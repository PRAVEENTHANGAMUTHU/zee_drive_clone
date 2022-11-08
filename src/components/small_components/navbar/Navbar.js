import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='nav-bar'>
              <ul className='nav-list'>
                  <li><Link>DASHBOARD</Link></li>
                  <li><Link>FOLDERS</Link></li>
                  <li><Link>USER GROUP</Link></li>
                  <li><Link>MEDIA</Link></li>
                  <li><Link>BIN</Link></li>
              </ul>
          </div>
  )
}

export default Navbar;