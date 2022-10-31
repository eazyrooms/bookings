import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
      <nav className="navbar bg-light custom-nav">
        <div className="container">
          <a className="navbar-brand " href="#">
            <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1666957884/logo_gtlifu.png" className='rounded mx-auto d-block' alt="" width="150" height="50" />
          </a>
          <div className='d-flex'>
            <button type="button" className="btn btn-warning " data-bs-toggle="modal" data-bs-target="#exampleModal">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" style={{ marginRight: "10px" }} viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>Login</button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 my-text" id="exampleModalLabel">Mobile Number</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body" style={{ border: 0 }}>
                    <input type="text" className="form-control" />

                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-dark"> OTP</button>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </nav>


    </>

  )
}

export default Header