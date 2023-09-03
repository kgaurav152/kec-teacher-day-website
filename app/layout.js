import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KEC CSE 2K21',
  description: `A next app built for inviting teachers on the occasion of teacher&apos;s day by KEC CSE 2K21`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
