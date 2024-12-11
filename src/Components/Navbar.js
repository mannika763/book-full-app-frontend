import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div class="navbar">
        <div class="row">
            <div class="col logo">
              <Link to="/" className="no-style-link"><div>Logo</div></Link> 
            </div>
            <div class="col menu">
            <Link to="/your_store" className="no-style-link"><div >Books</div></Link>
              
            <Link to="/login" className="no-style-link">   <div>Login</div></Link>
            <Link to="/signup" className="no-style-link">   <div>Signup</div></Link>
            </div>
        </div>
        </div>
    </>
  )
}

export default Navbar
