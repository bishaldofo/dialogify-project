

import { Inter } from 'next/font/google'
import Navbar from "@/components/shared/Navbar"
import '../globals.css'
import Provider from '@/components/Provider/Provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dialogify | Home',
  description: 'Dialogify Home Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
