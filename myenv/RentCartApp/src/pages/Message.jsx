import React from 'react'
import { useParams } from 'react-router-dom'

function Message() {
  const {sellerId}=useParams()
  return (
    <div>
        <div className="container bg-info">
            <p className='bg-danger'>SEND MESSAGES HERE</p>
            <div style={{height:'200px'}}></div>
            <input type="text" /><span className='btn btn-success m-2'>SEND</span>
        </div>
    </div>
  )
}

export default Message