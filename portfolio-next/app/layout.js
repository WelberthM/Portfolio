import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
  display: 'swap',
})

export const metadata = {
  title: 'Welberth Almeida | Front-end Developer',
  description: 'Desenvolvedor Front-end com especialidade em React, CSS e JavaScript.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${outfit.className} bg-slate-950 text-slate-50 antialiased`}>
        {children}
      </body>
    </html>
  )
}
