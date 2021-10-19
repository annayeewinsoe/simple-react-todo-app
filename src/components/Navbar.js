import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
   return (
      <nav>
         <Link to="/">Todos</Link>
         <span>|</span>
         <Link to="/about">About</Link>
      </nav>
   )
}
