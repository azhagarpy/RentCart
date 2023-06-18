import React,{useEffect,useState} from "react";
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom'
import UserProfilePage from "../../pages/UserProfilePage";
import { GiHamburgerMenu } from 'react-icons/gi';


export default function Header() {

const [validuser,setValidUser]=useState(null);
const [userid,setUserid]=useState(null);
const [user,setUser]=useState([]);


const [a,setA]=useState(false)

const handlUserClick = ()=>{
  setA(!a)
}


useEffect(()=>{
  validateUser();
  if(validuser){
  fetchUserDetail();
  }
},[userid])



  const validateUser = async ()=>{
    const token=localStorage.getItem('token')
    const data={
      token:token
    }
    if(token!=null){
    const res=await fetch('http://127.0.0.1:8000/api/auth/validate-token/',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    });
    const jsonData= await res.json()
    setValidUser(jsonData.valid);
    setUserid(jsonData.user)
  }
}


const fetchUserDetail=async () =>{
    const res = await fetch(`http://127.0.0.1:8000/api/user/${userid}/`);
    const jsonData = await res.json()
    setUser(jsonData);
}



  return (
    <div
      style={{
        backgroundColor: "#EFF1F3",
        zIndex: "10",
        position:'sticky',
        top:'0px'
      }}
    >
    { validuser!=true ?

      <div className="container-lg">
          { /* if user is not loed in */ }

          { /*       This code for desktop navbar for not loged in                 */  }


        <div className="   header ">
          <a href="http://localhost:3000/" className="logo  nostyle col-lg-1 col-sm-3" style={{ fontSize: '2rem' }}>RentCart</a>
          <select
            name="Dirstic"
            id="Dirstic"
            className="  px-1 Dirstic col-lg-2 col-sm-2"
          >
            <option value="Dirstic">Dirstic</option>
            <option value="Dirstic">Dirstic</option>
            <option value="Dirstic">Dirstic</option>
          </select>

          <div className="col-lg-3 col-sm-3">
            <SearchBar />
          </div>

          <Link to='/login' className="btn btn-primary btn-xs login col-lg-1 col-sm-1">
            Log in
          </Link>
          <Link className="btn btn-success col-lg-1 col-sm-1 " to='/rent' >Rent</Link>
        </div>

{ /*       This code for mobile navbar for not loged in                 */  }
        <div className="mobile p-2">
          <div className="mobile-header">
            <div className="hamburger-logo">
            <GiHamburgerMenu className="hamburger"/>
              <Link to='/' className="nostyle" >RENTCART</Link>
            </div>
            <div>
            <select
            name="Dirstic"
            id="Dirstic"
            className=" mobile-Dirstic"
          >
            <option value="Dirstic">Dirstic</option>
            <option value="Dirstic">Dirstic</option>
            <option value="Dirstic">Dirstic</option>
          </select>
            </div>
          </div>
          <div className="search-bar">
          <SearchBar />
          </div>
        </div>
      </div>
: 
<>
<div className="container-lg  loged-in  ">

  { /* if user is loged in */ }


  { /*       This code for desktop navbar logedin                 */  }


<div className="row   header ">
  <a href="http://localhost:3000/" className="logo col-lg-2 col-sm-2 nostyle" style={{ fontSize: '2rem' }}>RentCart</a>
  <select
    name="Dirstic"
    id="Dirstic"
    className="col-lg-2 col-sm-2  px-1 Dirstic"
  >
    <option value="Dirstic">Dirstic</option>
    <option value="Dirstic">Dirstic</option>
    <option value="Dirstic">Dirstic</option>
  </select>

  <div className="col-sm-4 col-lg-4">
    <SearchBar />
  </div>

  <div className="col-1  userProfile">
    <img src={user.profile ? user.profile : 'a'} onClick={handlUserClick} />
      <div>
      <UserProfilePage user={user} a={a}/>
      </div>
  </div>
  <Link className="btn btn-success col-lg-1 col-sm-1" to='/rent' >Rent</Link>
</div>

</div>

{ /*       This code for mobile navbar   for loged in              */  }

<div className="mobile-loged-in">
<div className="mobile-header ">
            <div className="hamburger-logo">
            <GiHamburgerMenu className="hamburger"/>
              <Link to='/' className="nostyle" >RENTCART</Link>
            </div>
            <div>
            <select
            name="Dirstic"
            id="Dirstic"
            className=" mobile-Dirstic"
          >
            <option value="Dirstic">Dirstic</option>
            <option value="Dirstic">Dirstic</option>
            <option value="Dirstic">Dirstic</option>
          </select>
            </div>
          </div>
          <div className="search-bar">
          <SearchBar />
          </div>
          </div>
</>



}
    </div>
  );
}
