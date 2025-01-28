import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
       <header>
        <Link to={'/'} className='logo'>Home</Link>
        <nav>
          <Link to={'/login'} className=''>Login</Link>
          <Link to={'/register'}>Register</Link>
        </nav>
        </header>
  )
}

export default Header
