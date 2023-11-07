
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import BottomHeader from '@/components/Header/BottomHeader'
import Footer from '@/components/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { Providers } from '@/store/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shakil Ecommerce',
  description: 'Buy and Sell on Your Comfort zone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className="font-bodyFont bg-gray-300"><Providers><Header/><BottomHeader/>{children}<Footer/></Providers></body>
      
    </html>
  )
}
