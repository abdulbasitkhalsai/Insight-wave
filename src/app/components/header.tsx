import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo'>Insight Waves</h1>
        <div>
            <nav>
                <ul className='navbar'>
                    <li className='navLinks'><Link href={"/"}>Home</Link></li>
                    <li className='navLinks'><Link href={"/technology"}>Technology</Link></li>
                    <li className='navLinks'><Link href={"/lifestyle"}>Life Style</Link></li>
                    <li className='navLinks'><Link href={"/contact"}>Contact Us</Link></li>
                    <li className='navLinks'><Link href={"/about"}>About</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
