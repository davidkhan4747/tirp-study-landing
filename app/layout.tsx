import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trip Tour Study - Turizm biznesini o\'rganish platformasi',
  description: 'Turizm biznesini rivojlantirish uchun zamonaviy onlayn platforma',
  generator: 'v0.dev',
  icons: {
    icon: '/logo-trip-study.png',
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
      </head>
      <body>{children}</body>
    </html>
  )
}
