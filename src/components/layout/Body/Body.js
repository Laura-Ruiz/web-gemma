import React from 'react'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../../Sidebar/Sidebar'
export default function Body({
    children
}) {
  return (
    <div>
        <Header/>
        <Sidebar/>
      {children}
       <Footer />
      </div>
  )
}
