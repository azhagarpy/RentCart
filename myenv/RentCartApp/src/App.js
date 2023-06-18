
import React,{useEffect,useState} from "react";
import "./App.css";
import Header from './components/homepage/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import PostAdPage from "./pages/PostAdPage";
import Loginpage from "./pages/Loginpage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Message from "./pages/Message";

function App() {
const [latitude,setLatitude]=useState()
const [longitude,setLongitude]=useState()

  
  useEffect(() => {
    if ("geolocation" in navigator) {
      // Geolocation is supported
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLatitude(latitude);
        setLongitude(longitude);
      });
    } else {
      console.log("Geolocation is not supported by your browser.");
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/product/:id" element={<ProductDetails lat={latitude} long={longitude} />}></Route>
          <Route path="/rent" element={<PostAdPage/>} />
          <Route path="/login" element={<Loginpage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/chatwithseller/:sellerId" element={<Message/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
