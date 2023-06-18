import React from 'react'
import { Link } from 'react-router-dom'

export default function UserProfilePage({user,a}) {
  const token ={token:localStorage.getItem('token')}
const handelLogut = async () => {
    const res= await fetch('http://127.0.0.1:8000/api/auth/logout/',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(token)
    })
    const jsonData= await res.json()
    localStorage.removeItem('token')
    window.location.href="http://localhost:3000/"
}

  return (
    <div className=' user'  style={{ display: a ? 'block' : 'none' }} >
        <h1>{user.username}</h1>
        <small className='row mx-1'>{user.phone}</small>
        <small className='row mx-1'>{user.address}</small>
        <Link to="/userproducts" className='row mx-1 btn btn-info'>
          Your Products
        </Link>
        <Link to="/editprofile" className='row mx-1 btn btn-primary'>
          Edit Profile
        </Link>
        <div className="btn btn-danger btn-xs" onClick={handelLogut}>Log Out</div>
    </div>
  )
}
