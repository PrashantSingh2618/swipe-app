import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Swipe App',
  description: 'Your personal shopping companion',
  icons: {
    icon: '/Logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
