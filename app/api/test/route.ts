import { NextResponse } from "next/server"

export async function GET() {
  try {
    console.log("=== API Test Route ===")

    // Тестируем прямое подключение к GraphQL API
    const response = await fetch("http://89.232.184.198:3301/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            courses {
              id
              title
            }
          }
        `,
      }),
    })

    const responseText = await response.text()

    return NextResponse.json({
      success: true,
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      body: responseText.substring(0, 500),
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
      type: error.constructor.name,
      timestamp: new Date().toISOString(),
    })
  }
}
