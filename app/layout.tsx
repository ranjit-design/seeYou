import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ranjit',
  description: 'Created with v0',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: 'http://localhost:4000/assets/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'http://localhost:4000/assets/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'http://localhost:4000/assets/placeholder.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: 'http://localhost:4000/assets/placeholder-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
