import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PageTransitionEffect from './PageTransitionEffect'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arun Kumar',
  description: 'Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <PageTransitionEffect>
        {children}
      </PageTransitionEffect>
        </body>
    </html>
  )
}
