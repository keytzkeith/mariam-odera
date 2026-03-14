import type { Metadata } from 'next'
import { Caveat, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: 'Happy Birthday Mariam',
  description: 'A little illustrated world made just for you',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} antialiased bg-[#0B1020] text-[#F3EDE2]`} style={{
        '--caveat': caveat.style.fontFamily,
        '--poppins': poppins.style.fontFamily,
      } as React.CSSProperties}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
