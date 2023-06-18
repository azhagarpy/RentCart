import React, { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";


export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [password,setPassword]=useState('');
  const [username,setUsername]=useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };



const handleSubmit=(event)=>{
    event.preventDefault();
    const loginData={
        username:username,
        password:password
    }


    loginuser(loginData)


}

const loginuser= async (data)=>{
    const res =await fetch('http://127.0.0.1:8000/api/auth/login/',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify(data),
    })
    const jsonData= await res.json();
    if(jsonData.token){
    Object.values(jsonData).map((e)=>{
      localStorage.setItem("token",e.refresh)
      window.location.href='http://localhost:3000/'
    })
  }
}


  return (
    <div>
      <div className="container-lg container-md my-5">
        <form className="form-group" onSubmit={handleSubmit}>
          <div className="username">
            <label className="form-label">User Name</label>
            <input type="text" required  className="form-control" onChange={(e)=>{
                setUsername(e.target.value)
            }}/>
          </div>
          <div className="password">
            <label className="form-label">Password</label>
<div className="passeye">
<input
            required
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="form-control"
              onChange={(e)=>{
                setPassword(e.target.value)
            }}
            />
            <button onClick={togglePasswordVisibility}>
              {showPassword ? <FaEye/> : <FaEyeSlash/>}
            </button>
</div>
          </div>
            <Link to='/register' className="row my-3 mx-2 ">Create Account</Link>
          <button  className=" row btn btn-success my-3 mx-2" onClick={handleSubmit}> Log In</button>
        </form>
      </div>
    </div>
  );
}
