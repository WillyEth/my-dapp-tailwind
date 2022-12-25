import React from 'react'
import Header from './Header'
import Banner from './Banner'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const Layout = ({ children }) => {
  return (
    <div>
      <main className={`${inter.variable} font-sans`}>
        <Banner />
        <Header />
        <div>{children}</div>
      </main>
    </div>
  )
}

export default Layout
