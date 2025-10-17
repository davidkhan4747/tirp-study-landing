import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trip Tour Study - Turizm biznesini o\'rganish platformasi | O\'zbekistondagi #1 tur biznes ta\'lim platformasi',
  description: 'Turizm biznesini rivojlantirish uchun zamonaviy onlayn platforma. Professional ko\'nikmalarni rivojlantiring va biznesingizni yangi bosqichga olib chiqing. 1000+ talaba, 10+ kurs, tajribali mentorlar.',
  keywords: 'turizm ta\'limi, tur biznes, onlayn kurslar, turizm menejmenti, tur operatorligi, turizm marketingi, O\'zbekiston, professional rivojlanish, sertifikatlar, mentorlar',
  authors: [{ name: 'Trip Tour Study' }],
  creator: 'Trip Tour Study',
  publisher: 'Trip Tour Study',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: 'Next.js',
  applicationName: 'Trip Tour Study',
  referrer: 'origin-when-cross-origin',
  category: 'education',
  classification: 'Tourism Education Platform',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo-trip-study.png',
    shortcut: '/logo-trip-study.png',
    apple: '/logo-trip-study.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    url: 'https://tripstudy.uz',
    siteName: 'Trip Tour Study',
    title: 'Trip Tour Study - O\'zbekistondagi #1 tur biznes ta\'lim platformasi',
    description: 'Turizm biznesini rivojlantirish uchun zamonaviy onlayn platforma. 1000+ talaba, 10+ kurs, tajribali mentorlar bilan professional ko\'nikmalarni rivojlantiring.',
    images: [
      {
        url: '/vhereoMain.jpg',
        width: 1200,
        height: 630,
        alt: 'Trip Tour Study - Turizm ta\'lim platformasi',
      },
      {
        url: '/logo-trip-study.png',
        width: 800,
        height: 600,
        alt: 'Trip Tour Study Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tripstudy_uz',
    creator: '@tripstudy_uz',
    title: 'Trip Tour Study - O\'zbekistondagi #1 tur biznes ta\'lim platformasi',
    description: 'Turizm biznesini rivojlantirish uchun zamonaviy onlayn platforma. Professional ko\'nikmalarni rivojlantiring.',
    images: ['/vhereoMain.jpg'],
  },
  verification: {
    google: 'google-site-verification-code-here',
    yandex: 'yandex-verification-code-here',
  },
  alternates: {
    canonical: 'https://tripstudy.uz',
    languages: {
      'uz-UZ': 'https://tripstudy.uz',
      'ru-RU': 'https://tripstudy.uz/ru',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <link rel="icon" href="/logo-trip-study.png" />
        
        {/* Структурированные данные для организации */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Trip Tour Study",
              "alternateName": "TripStudy",
              "url": "https://tripstudy.uz",
              "logo": "https://tripstudy.uz/logo-trip-study.png",
              "image": "https://tripstudy.uz/vhereoMain.jpg",
              "description": "O'zbekistondagi eng yirik turizm ta'lim platformasi. Professional ko'nikmalarni rivojlantiring va biznesingizni yangi bosqichga olib chiqing.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "UZ",
                "addressRegion": "Toshkent",
                "addressLocality": "Toshkent"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+99890-017-77-88",
                "contactType": "customer service",
                "availableLanguage": ["uz", "ru"]
              },
              "sameAs": [
                "https://www.instagram.com/turizm.maktab/",
                "https://t.me/TRIPTOUR_STUDY"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Turizm kurslari",
                "itemListElement": [
                  {
                    "@type": "Course",
                    "name": "Turizm biznesini boshqarish",
                    "description": "Turizm kompaniyalarini boshqarish, marketing va moliyaviy rejalashtirishni o'rganing",
                    "provider": {
                      "@type": "Organization",
                      "name": "Trip Tour Study"
                    }
                  },
                  {
                    "@type": "Course", 
                    "name": "Turizm marketingi",
                    "description": "Turizm marketingi, reklama va PRni o'rganing",
                    "provider": {
                      "@type": "Organization",
                      "name": "Trip Tour Study"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "Tur operatorligi", 
                    "description": "Tur operatorligi, marshrutlar va ekskursiyalar tashkil etishni o'rganing",
                    "provider": {
                      "@type": "Organization",
                      "name": "Trip Tour Study"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1000",
                "bestRating": "5"
              }
            })
          }}
        />

        {/* Структурированные данные для веб-сайта */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Trip Tour Study",
              "url": "https://tripstudy.uz",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://tripstudy.uz/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
