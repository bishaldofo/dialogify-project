import Navbar from '@/components/shared/navbar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dialogify',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='max-w-7xl m-auto'>
          <Navbar></Navbar>
          {children}
          
        </div>
      </body>
    </html>
  )
}
