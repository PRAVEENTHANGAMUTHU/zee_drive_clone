import React from 'react'
import './User.css';
import user from './user.png';
const User = () => {
  return (
      <div className='user'>
          <img className='user-logo' src={user} alt='user-logo' />
          <button></button>
    </div>
  )
}

export default User;