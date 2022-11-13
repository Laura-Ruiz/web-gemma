import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <li>
        <Link to="/">Inicio</Link>
    </li>
    <li>
        <Link to="/Biography">Biografia</Link>
    </li>
   
</>
  )
}
