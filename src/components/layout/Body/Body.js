import React from 'react'
import Header from '../header/Header'
import Footer from '../Footer/Footer'

export default function Body({
    children
}) {
  return (
    <div>
        <Header/>
      {children}
       <Footer />
      </div>
  )
}
