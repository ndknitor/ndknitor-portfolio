import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import BlurredImage from '@/components/BlurredImage/BlurredImage'
import { ThemeProvider, createTheme } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ndknitor",
  description: '',
  manifest : "/site.webmanifest",
  icons: ["/favicon-32x32.png", "/favicon-16x16.png"]
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}
