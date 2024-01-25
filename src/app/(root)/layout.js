// import { Inter } from 'next/font/google'
// import './globals.css'
// import Navbar from '@/components/shared/Navbar'
import { Inter } from 'next/font/google'
import Navbar from "@/components/shared/Navbar"
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dialogify | Home',
  description: 'Dialogify Home Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className='shadow-md bg-white sticky top-0 z-50'>
            <Navbar/>
          </div>
          <div className='max-w-6xl m-auto'>
            {children}
          </div>
      </body>
    </html>
  )
}
