// import { Inter } from 'next/font/google'
// import './globals.css'
// import Navbar from '@/components/shared/Navbar'
import { Inter } from 'next/font/google'
import Navbar from "@/components/shared/Navbar"
import '../globals.css'
import { Toaster } from 'react-hot-toast'
import ToasterContext from '@/components/ToasterContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dialogify | Home',
  description: 'Dialogify Home Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterContext/> {children}
      </body>
    </html>
  )
}
