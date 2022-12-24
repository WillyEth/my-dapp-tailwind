import React from 'react'
import Header from './Header'
import Banner from './Banner'


const Layout = ({ children }) => {
  return (
    <div>
      <Banner />
      <Header />
    
      <div>{children}</div>
    </div>
  )
}

export default Layout
