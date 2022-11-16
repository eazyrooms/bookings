import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <>
      <nav className="navbar p-3 bg-light custom-nav">
        <div className="container">
          <Link to='/'>
            <a className="navbar-brand mx-auto " href="#" >
              <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1666957884/logo_gtlifu.png"
                className='rounded mx-auto text-center my-log' alt="" width="180" height="50" />
            </a></Link>
        </div>
      </nav>


    </>

  )
}

export default Header