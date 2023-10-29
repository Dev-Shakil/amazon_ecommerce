import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import BottomHeader from '@/components/Header/BottomHeader'
import Footer from '@/components/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-bodyFont bg-gray-300"><Header/><BottomHeader/>{children}<Footer/></body>
    </html>
  )
}