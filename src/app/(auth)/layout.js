import { Inter } from 'next/font/google'
import '../globals.css'
import ToasterContext from '@/components/ToasterContext'
import Provider from '@/components/Provider/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dialogify | Login',
  description: 'Dialogify Login Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ToasterContext/> {children}
        </Provider>
      </body>
    </html>
  )
}
