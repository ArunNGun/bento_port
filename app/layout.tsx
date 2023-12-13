import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PageTransitionEffect from './PageTransitionEffect'
import Head from 'next/head'

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
      <Head>
      <title>'Arun Kumar'</title>
      <meta
        name="description"
        content="arun kumar is a software engineer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="arun kumar, Arun, web developer portfolio, Arun web developer, Arun developer, mern stack, arun kumar portfolio, bento-grids, bento design"
      />
      <meta property="og:title" content="arun kumar's Portfolio" />
      <meta
        property="og:description"
        content="A software engineer building websites that you'd like to use."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:image" content="https://i.imgur.com/yZiiZHD.png" />
      <meta property="og:url" content="https://a--k.vercel.app/" />
      <meta name="twitter:card" content="summary_large_img" />
    </Head>
      <body className={inter.className}>
      <PageTransitionEffect>
        {children}
      </PageTransitionEffect>
        </body>
    </html>
  )
}
