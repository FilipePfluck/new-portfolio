import { ReactNode } from 'react'
import './globals.css'
// eslint-disable-next-line
import { Inter, Roboto_Mono } from 'next/font/google'
import { css } from '../../styled-system/css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const robotoMono = Roboto_Mono({
  weight: ['400', '500', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={`${inter.variable} ${robotoMono.variable}`} lang="en">
      <body className={css({ bg: 'slate.1' })}>{children}</body>
    </html>
  )
}
