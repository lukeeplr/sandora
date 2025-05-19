import React from 'react'
import Logo from './Logo'

function NavBar() {
  return (
    <nav className='hidden lg:flex fixed w-full h-40 py-8 px-16 items-center pointer-events-none'>
        <Logo className='w-50 h-10 pointer-events-auto' />
    </nav>
  )
}

export default NavBar