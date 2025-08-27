import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("=== GraphQL Proxy Request Started ===")
    console.log("Request URL:", request.url)
    console.log("Request method:", request.method)

    // Читаем тело запроса
    const body = await request.json()
    console.log("Request body received:", {
      operationName: body.operationName,
      hasQuery: !!body.query,
      hasVariables: !!body.variables,
    })

    // Проверяем, что это валидный GraphQL запрос
    if (!body.query || typeof body.query !== "string") {
      console.error("Invalid GraphQL request - missing or invalid query")
      return NextResponse.json(
        {
          errors: [
            {
              message: "Invalid GraphQL request: query field is required",
              extensions: { code: "INVALID_REQUEST" },
            },
          ],
        },
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
    }

    // Делаем запрос к внешнему GraphQL API
    console.log("Making request to external GraphQL API...")

    const response = await fetch("http://api.tripstudy.uz/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Trip-Study-NextJS/1.0",
      },
      body: JSON.stringify(body),
      // Добавляем timeout
      signal: AbortSignal.timeout(10000), // 10 секунд
    })

    console.log("External API response:", {
      status: response.status,
      statusText: response.statusText,
      contentType: response.headers.get("content-type"),
    })

    // Читаем ответ как текст
    const responseText = await response.text()
    console.log("Response text length:", responseText.length)
    console.log("Response preview:", responseText.substring(0, 200))

    // Проверяем, не HTML ли это
    if (responseText.includes("<!DOCTYPE") || responseText.includes("<html")) {
      console.error("Received HTML instead of JSON")
      throw new Error("External API returned HTML instead of JSON")
    }

    // Проверяем статус ответа
    if (!response.ok) {
      console.error(`HTTP Error ${response.status}:`, responseText)
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    // Парсим JSON
    let data
    try {
      data = JSON.parse(responseText)
      console.log("Successfully parsed JSON response")
    } catch (parseError) {
      console.error("JSON Parse Error:")
      throw new Error("Failed to parse JSON response from external API")
    }

    // Возвращаем успешный ответ
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("=== GraphQL Proxy Error ===")
    console.error("Error:")

    // Возвращаем ошибку для Apollo Client
    return NextResponse.json(
      {
        errors: [
          {
            message: "GraphQL API temporarily unavailable",
            extensions: {
              code: "API_UNAVAILABLE",
              originalError: "GraphQL API temporarily unavailable",
            },
          },
        ],
      },
      {
        status: 503,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  })
}

// Добавляем GET endpoint для проверки
export async function GET() {
  return NextResponse.json({
    status: "GraphQL Proxy is running",
    timestamp: new Date().toISOString(),
    endpoint: "http://api.tripstudy.uz/graphql",
  })
}
