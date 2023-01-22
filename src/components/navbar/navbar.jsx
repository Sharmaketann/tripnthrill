import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <h1>TRIPNTHRILL</h1>
        </div>
        <div className='navbar-links_container'>
          <p>
            <a href='#home'>Home</a>
          </p>
          <p>
            <a href='#about'>About Us</a>
          </p>
          <p>
            <a href='#careers'>Careers</a>
          </p>
          <p>
            <a href='#adventures'>Adventures</a>
          </p>
          <p>
            <a href='#blog'>Blogs</a>
          </p>
          <p>
            <a href='#mission'>Mission</a>
          </p>
        </div>
      </div>
      <div className='navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#ff9600'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#ff9600'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <p>
                <a href='#home'>Home</a>
              </p>
              <p>
                <a href='#about'>About Us</a>
              </p>
              <p>
                <a href='#careers'>Careers</a>
              </p>
              <p>
                <a href='#adventures'>Adventures</a>
              </p>
              <p>
                <a href='#blog'>Blogs</a>
              </p>
              <p>
                <a href='#mission'>Mission</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar