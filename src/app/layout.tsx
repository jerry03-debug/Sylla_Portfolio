import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { CustomCursor } from '../components/CustomCursor'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio Dynamique',
  description: 'Portfolio professionnel personnalisable',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={poppins.className}>
        {children}
        <CustomCursor />
      </body>
    </html>
  )
}
