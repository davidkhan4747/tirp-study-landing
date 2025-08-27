"use client"

import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  Clock,
  Award,
  Users,
  Star,
  Play,
  CheckCircle,
  TrendingUp,
  Globe,
  Shield,
  AlertCircle,
  Instagram,
  Send,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { ApolloProvider, useQuery } from "@apollo/client"
import client from "../lib/apollo-client"
import { GET_COURSES_PUBLIC } from "../lib/queries"

// Компонент для курсов с Apollo
function CoursesSection() {
  const { loading, error, data } = useQuery(GET_COURSES_PUBLIC, {
    errorPolicy: "all",
    notifyOnNetworkStatusChange: true,
  })

  // Мок данные для курсов
  const mockCourses = [
    {
      id: "1",
      title: "Turizm biznesini boshqarish",
      description:
        "Turizm kompaniyalarini boshqarish, marketing va moliyaviy rejalashtirishni o'rganing. Amaliy loyihalar bilan tajriba to'plang.",
      price: 500000,
      imageUrl: "/placeholder.svg?height=200&width=300",
      isPublished: true,
      enrollmentLimit: 25,
      instructor: {
        id: "1",
        name: "Aziz Karimov",
        email: "aziz@example.com",
        __typename: "User",
      },
      instructorId: "1",
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z",
      __typename: "Course",
    },
    {
      id: "2",
      title: "Turizm marketingi",
      description:
        "Turizm marketingi, reklama va PRni o'rganing. Amaliy loyihalar bilan tajriba to'plang.",
      price: 600000,
      imageUrl: "/placeholder.svg?height=200&width=300",
      isPublished: true,
      enrollmentLimit: 20,
      instructor: {
        id: "2",
        name: "Malika Tosheva",
        email: "malika@example.com",
        __typename: "User",
      },
      instructorId: "2",
      createdAt: "2024-01-20T10:00:00.000Z",
      updatedAt: "2024-01-20T10:00:00.000Z",
      __typename: "Course",
    },
    {
      id: "3",
      title: "Tur operatorligi",
      description: "Tur operatorligi, marshrutlar va ekskursiyalar tashkil etishni o'rganing. Amaliy loyihalar bilan tajriba to'plang.",
      price: 400000,
      imageUrl: "/placeholder.svg?height=200&width=300",
      isPublished: true,
      enrollmentLimit: 30,
      instructor: {
        id: "3",
        name: "Davron Aliyev",
        email: "davron@example.com",
        __typename: "User",
      },
      instructorId: "3",
      createdAt: "2024-01-25T10:00:00.000Z",
      updatedAt: "2024-01-25T10:00:00.000Z",
      __typename: "Course",
    },
    {
      id: "4",
      title: "Turizm menejmenti",
      description:
        "Turizm menejmenti, turizm kompaniyalarini boshqarish va rivojlantirishni o'rganing. Amaliy loyihalar bilan tajriba to'plang.",
      price: 700000,
      imageUrl: "/placeholder.svg?height=200&width=300",
      isPublished: true,
      enrollmentLimit: 15,
      instructor: {
        id: "4",
        name: "Sardor Rahimov",
        email: "sardor@example.com",
        __typename: "User",
      },
      instructorId: "4",
      createdAt: "2024-02-01T10:00:00.000Z",
      updatedAt: "2024-02-01T10:00:00.000Z",
      __typename: "Course",
    },
    {
      id: "5",
      title: "Turizm iqtisodiyoti",
      description: "Turizm iqtisodiyoti, turizmning iqtisodiyotga ta'siri va turizmni rivojlantirishni o'rganing. Amaliy loyihalar bilan tajriba to'plang.",
      price: 800000,
      imageUrl: "/placeholder.svg?height=200&width=300",
      isPublished: true,
      enrollmentLimit: 12,
      instructor: {
        id: "5",
        name: "Nilufar Karimova",
        email: "nilufar@example.com",
        __typename: "User",
      },
      instructorId: "5",
      createdAt: "2024-02-05T10:00:00.000Z",
      updatedAt: "2024-02-05T10:00:00.000Z",
      __typename: "Course",
    },
    {
      id: "6",
      title: "Turizm huquqi",
      description: "Turizm huquqi, turizmga oid qonunlar va nizomlarni o'rganing. Amaliy loyihalar bilan tajriba to'plang.",
      price: 900000,
      imageUrl: "/placeholder.svg?height=200&width=300",
      isPublished: true,
      enrollmentLimit: 10,
      instructor: {
        id: "6",
        name: "Bobur Tursunov",
        email: "bobur@example.com",
        __typename: "User",
      },
      instructorId: "6",
      createdAt: "2024-02-10T10:00:00.000Z",
      updatedAt: "2024-02-10T10:00:00.000Z",
      __typename: "Course",
    },
  ]

  // Определяем какие курсы показывать
  const courses = error || !data?.courses ? mockCourses : data.courses.filter((course:any) => course.isPublished)

  // Логирование для отладки
  useEffect(() => {
    console.log("=== Apollo Query State ===")
    console.log("Loading:", loading)
    console.log("Error:", error?.message || "No error")
    console.log("Data:", data ? "Data received" : "No data")

    if (error) {
      console.error("GraphQL Error Details:", {
        message: error.message,
        graphQLErrors: error.graphQLErrors,
        networkError: error.networkError,
      })
    }
  }, [loading, error, data])

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mashhur{" "}
            <span className="bg-gradient-to-r from-[#672c8e] to-purple-600 bg-clip-text text-transparent">
              kurslarimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional mentorlar tomonidan tayyorlangan sifatli kurslar bilan o'z karyerangizni rivojlantiring
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-100 rounded-2xl p-6 animate-pulse">
                <div className="w-full h-48 bg-gray-200 rounded-xl mb-6"></div>
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
                <div className="flex justify-between items-center">
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                  <div className="h-10 bg-gray-200 rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 6).map((course:any) => (
              <div
                key={course.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.imageUrl || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(course.title + " course")}`
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[#672c8e]">
                    {course.enrollmentLimit} o'rin
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#672c8e] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">{course.description}</p>

                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#672c8e] to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      {course.instructor.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{course.instructor.name}</p>
                      <p className="text-xs text-gray-500">Mentor</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-[#672c8e]">
                      {(course.price / 1000).toLocaleString()}k so'm
                    </div>
                    <Link 
                      href={`https://my.tripstudy.uz/dashboard/courses/${course.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-gradient-to-r from-[#672c8e] to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                        Ro'yxatdan o'tish
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center bg-blue-50 text-blue-800 px-6 py-3 rounded-lg border border-blue-200">
              <AlertCircle className="w-5 h-5 mr-2" />
              <div className="text-left">
                <div className="font-semibold">Demo rejimida ishlayapti</div>
                <div className="text-sm opacity-75">Haqiqiy kurslar tez orada yuklanadi</div>
              </div>
            </div>
          </div>
        )}

        {/*<div className="text-center mt-12">*/}
        {/*  <button className="bg-gradient-to-r from-[#672c8e] to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">*/}
        {/*    Barcha kurslarni ko'rish*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    </section>
  )
}

// Остальные компоненты остаются без изменений...
// (AnimatedCounter, AnimatedProgressBar, TripStudyLandingContent)

// Компонент анимированного счетчика
function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const currentCount = Math.floor(progress * (target - startValue) + startValue)
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return (
    <span ref={counterRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// Компонент анимированного прогресс бара
function AnimatedProgressBar({
  width,
  delay = 0,
  color = "from-purple-500 to-blue-500",
}: { width: number; delay?: number; color?: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentWidth, setCurrentWidth] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      setCurrentWidth(width)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, width, delay])

  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2" ref={barRef}>
      <div
        className={`bg-gradient-to-r ${color} h-1.5 rounded-full transition-all duration-2000 ease-out`}
        style={{ width: `${currentWidth}%` }}
      ></div>
    </div>
  )
}

function TripStudyLandingContent() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image src="/logo-trip-study.png" alt="Trip Tour Study Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold text-[#672c8e]">Trip Tour Study</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-[#672c8e] transition-colors font-medium">
                Biz haqimizda
              </Link>
              <Link href="#features" className="text-gray-600 hover:text-[#672c8e] transition-colors font-medium">
                Imkoniyatlar
              </Link>
              <Link href="#courses" className="text-gray-600 hover:text-[#672c8e] transition-colors font-medium">
                Kurslar
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-[#672c8e] transition-colors font-medium">
                Aloqa
              </Link>
              <button className="bg-[#672c8e] text-white px-6 py-2 rounded-lg hover:bg-[#5a2478] transition-all duration-300 shadow-lg hover:shadow-xl">
                Kirish
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-purple-50 to-white py-20 lg:py-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#672c8e]/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-[#672c8e]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-[#672c8e]/10 text-[#672c8e] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-5 h-5 mr-2" />
                O'zbekistondagi #1 tur biznes ta'lim platformasi
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                <span className="bg-gradient-to-r from-[#672c8e] to-purple-600 bg-clip-text text-transparent">
                  Trip Tour Study
                </span>
                <br />
                ga xush kelibsiz
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                Turizm biznesini rivojlantirish uchun zamonaviy onlayn platforma. Professional ko'nikmalarni rivojlantiring va biznesingizni yangi bosqichga olib chiqing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-[#672c8e] to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  O'rganishni boshlash
                </button>
                <button className="flex items-center justify-center border-2 border-[#672c8e] text-[#672c8e] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#672c8e] hover:text-white transition-all duration-300">
                  <Play className="w-5 h-5 mr-2" />
                  Demo ko'rish
                </button>
              </div>

              {/* Mini stats */}
              <div className="flex flex-wrap gap-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  1,000+ talaba
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  10+ kurs
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  10+ mentor
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end relative">
              <div className="relative">
                <div className="w-full max-w-lg h-96 bg-gradient-to-br from-[#672c8e] via-purple-600 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden relative">
                  <Image 
                    src="/vhereoMain.jpg" 
                    alt="Trip Tour Study Hero" 
                    width={500} 
                    height={400} 
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#672c8e]/70 via-purple-600/50 to-pink-500/70 rounded-3xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <BookOpen className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Interaktiv Darslar</h3>
                      <p className="text-lg opacity-90">Video, test va amaliyotlar</p>
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">90%</p>
                      <p className="text-xs text-gray-500">Muvaffaqiyat</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">24/7</p>
                      <p className="text-xs text-gray-500">Yordam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-[#672c8e]/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-[#672c8e]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Bizning{" "}
              <span className="bg-gradient-to-r from-[#672c8e] to-purple-600 bg-clip-text text-transparent">
                yutuqlarimiz
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Har kuni minglab talabalar bizning platformamiz orqali yangi bilimlar olmoqda
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Stat 1 */}
            <div className="group text-center">
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
                <div className="w-16 h-16 bg-gradient-to-r from-[#672c8e] to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>

                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 transition-all duration-500">
                  <AnimatedCounter target={1000} suffix="+" />
                </div>

                <div className="text-gray-600 font-medium mb-4">Faol talabalar</div>

                <AnimatedProgressBar width={85} delay={500} color="from-[#672c8e] to-purple-600" />
                <div className="text-xs text-gray-500">+500 bu oy</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group text-center">
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>

                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 transition-all duration-500">
                  <AnimatedCounter target={10} suffix="+" />
                </div>

                <div className="text-gray-600 font-medium mb-4">Video kurslar</div>

                <AnimatedProgressBar width={75} delay={700} color="from-blue-500 to-cyan-500" />
                <div className="text-xs text-gray-500">Yangi kurslar</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group text-center">
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>

                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 transition-all duration-500">
                  <AnimatedCounter target={10} suffix="+" />
                </div>

                <div className="text-gray-600 font-medium mb-4">Tajribali mentorlar</div>

                <AnimatedProgressBar width={90} delay={900} color="from-green-500 to-emerald-500" />
                <div className="text-xs text-gray-500">Expert darajada</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="group text-center">
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>

                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 transition-all duration-500">
                  <AnimatedCounter target={90} suffix="%" />
                </div>

                <div className="text-gray-600 font-medium mb-4">Muvaffaqiyat darajasi</div>

                <AnimatedProgressBar width={95} delay={1100} color="from-orange-500 to-red-500" />
                <div className="text-xs text-gray-500">Yuqori natija</div>
              </div>
            </div>
          </div>

          {/* Additional floating stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-[#672c8e]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                <AnimatedCounter target={24} suffix="/7" />
              </div>
              <div className="text-gray-600">Yordam xizmati</div>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-[#672c8e]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                <AnimatedCounter target={5} suffix="+" />
              </div>
              <div className="text-gray-600">Yo'nalishlar</div>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-[#672c8e]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                <AnimatedCounter target={100} suffix="%" />
              </div>
              <div className="text-gray-600">Ishonchli platforma</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-600 to-transparent opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Trip Tour Study haqida</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Trip Tour Study - bu O'zbekistondagi eng yirik turizm ta'lim platformasi bo'lib, minglab talabalar uchun
                sifatli ta'lim imkoniyatlarini taqdim etadi. Bizning platformamiz zamonaviy texnologiyalar va tajribali
                mentorlar yordamida professional ko'nikmalarni rivojlantirishga yordam beradi.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Biz nafaqat onlayn, balki oflayn darslarni ham taklif etamiz. Bizning oflayn darslarimiz zamonaviy o'quv markazimizda
                o'tkaziladi, bu yerda talabalar mentorlar bilan bevosita muloqot qilish va amaliy ko'nikmalarni rivojlantirish imkoniyatiga ega bo'ladilar.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Yaqinda yangi onlayn kurslarimiz ishga tushdi! Video darslar, interaktiv testlar, amaliy mashg'ulotlar va professional 
                sertifikatlar orqali o'z bilimlaringizni yangi darajaga olib chiqing.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Sertifikatlar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Global standartlar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Ishonchli platforma</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Mukofotlar</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-4 h-60 overflow-hidden relative">
                  {/* Offline class image */}
                  <Image 
                    src="/vhero.jpg" 
                    alt="Zamonaviy o'quv markazimizda" 
                    width={400} 
                    height={240} 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex flex-col justify-end p-6">
                    <p className="text-white text-lg font-semibold">Oflayn darslar</p>
                    <p className="text-white/90 text-sm">Zamonaviy o'quv markazimizda</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-4 h-60 overflow-hidden relative">
                  {/* Online class video */}
                  <video 
                    className="w-full h-full object-cover rounded-2xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/video-dem.MOV" type="video/quicktime" />
                    <source src="/video-dem.MOV" type="video/mp4" />
                    Sizning brauzeringiz video formatini qo'llab-quvvatlamaydi.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex flex-col justify-end p-6">
                    <p className="text-white text-lg font-semibold">Yangi onlayn kurslar</p>
                    <p className="text-white/90 text-sm">Istalgan joydan o'rganing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Nega aynan Trip Tour Study?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bizning platformamizni o'ziga xos qiladigan imkoniyatlar bilan tanishing va o'rganish sayohatingizni
              boshlang.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-r from-[#672c8e] to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interaktiv o'rganish</h3>
              <p className="text-gray-600 leading-relaxed">
                Dinamik kontent, testlar va amaliy mashg'ulotlar orqali samarali va qiziqarli o'rganish tajribasi.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Moslashuvchan jadval</h3>
              <p className="text-gray-600 leading-relaxed">
                24/7 kurslarga kirish imkoniyati bilan o'z vaqtingizga mos ravishda o'rganing.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Zamonaviy materiallar</h3>
              <p className="text-gray-600 leading-relaxed">
                Muntazam yangilanadigan kurs kontenti va resurslar bilan eng so'nggi bilimlarni egallang.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mentor yordami</h3>
              <p className="text-gray-600 leading-relaxed">
                Tajribali mentorlardan shaxsiy yo'l-yo'riq oling va muvaffaqiyatga erishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section with Apollo */}
      <CoursesSection />

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mijozlar fikri</h2>
            <p className="text-xl text-gray-600">Bizning platformamiz orqali muvaffaqiyatga erishgan tur kompaniyalari</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Trip Tour Study orqali turizm biznesini boshqarishni o'rgandim va hozir kompaniyamiz yaxshi rivojlanmoqda. Mentorlar juda yaxshi!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#672c8e] to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  A
                </div>
                <div>
                  <p className="font-semibold">Aziz Karimov</p>
                  <p className="text-sm text-gray-500">Tur agentlik direktori</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Juda qulay platforma! Turizm marketingi bo'yicha bilimlarim oshdi. Kurslar juda sifatli."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  M
                </div>
                <div>
                  <p className="font-semibold">Malika Tosheva</p>
                  <p className="text-sm text-gray-500">Marketing menejeri</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Sertifikat olganim uchun mijozlar bizga ko'proq ishonch bildirmoqda. Rahmat!"
              </p>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  D
                </div>
                <div>
                  <p className="font-semibold">Davron Aliyev</p>
                  <p className="text-sm text-gray-500">Tur operatori</p>
                </div>
              </div>
              {/* Certificate image */}
              <div className="mt-4">
                <Image 
                  src="/oooooo.jpg" 
                  alt="Sertifikat" 
                  width={300} 
                  height={200} 
                  className="w-full h-32 object-cover rounded-lg border-2 border-green-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bizning sertifikatlarimiz</h2>
            <p className="text-xl text-gray-600">Rasmiy tan olingan sertifikatlar bilan kasbiy rivojlanish</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Turizm bo'yicha sertifikat</h3>
              </div>
              <Image 
                src="/oooooo.jpg" 
                alt="Turizm sertifikati" 
                width={400} 
                height={300} 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600">Rasmiy tan olingan turizm ta'limi sertifikati</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Malaka oshirish sertifikati</h3>
              </div>
              <Image 
                src="/2025-08-07 14.23.44.jpg" 
                alt="Malaka oshirish sertifikati" 
                width={400} 
                height={300} 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600">2025 yilgi malaka oshirish kursi sertifikati</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-[#672c8e] via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            O'rganish sayohatingizni boshlashga tayyormisiz?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Minglab talabalar Trip Tour Study orqali o'z karyeralarini o'zgartirdilar. Bugun o'z sayohatingizni boshlang va
            potensialingizni ochib bering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#672c8e] px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
              Hoziroq qo'shiling
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-[#672c8e] transition-all duration-300">
              Bepul sinab ko'ring
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/logo-trip-study.png" alt="Trip Tour Study Logo" width={32} height={32} className="w-8 h-8" />
                <span className="text-2xl font-bold">Trip Tour Study</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Butun dunyo bo'ylab talabalarni zamonaviy onlayn ta'lim va professional rivojlanish imkoniyatlari bilan
                ta'minlash.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/turizm.maktab/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#672c8e] transition-colors cursor-pointer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://t.me/TRIPTOUR_STUDY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#672c8e] transition-colors cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Tezkor havolalar</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    Biz haqimizda
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Imkoniyatlar
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-gray-400 hover:text-white transition-colors">
                    Kurslar
                  </Link>
                </li>
                <li>
                  <Link href="tel:+99890 017 77 88" className="text-gray-400 hover:text-white transition-colors">
                    +99890 017 77 88
                  </Link>
                </li>
              </ul>
            </div>

            {/*<div>*/}
            {/*  <h3 className="text-lg font-bold mb-6">Yordam</h3>*/}
            {/*  <ul className="space-y-3">*/}
            {/*    <li>*/}
            {/*      <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">*/}
            {/*        Aloqa*/}
            {/*      </Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">*/}
            {/*        Foydalanish shartlari*/}
            {/*      </Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">*/}
            {/*        Maxfiylik siyosati*/}
            {/*      </Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <Link href="/support" className="text-gray-400 hover:text-white transition-colors">*/}
            {/*        Texnik yordam*/}
            {/*      </Link>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              {new Date().getFullYear()} Trip Tour Study. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>O'zbek tilida</span>
              <span>•</span>
              <span>Toshkent, O'zbekiston</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function TripStudyLanding() {
  return (
    <ApolloProvider client={client}>
      <TripStudyLandingContent />
    </ApolloProvider>
  )
}
