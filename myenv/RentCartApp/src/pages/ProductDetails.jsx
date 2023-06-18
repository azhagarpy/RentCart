import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import ImageSlider from "../components/productdeatilspage/ImageSlider";

import ProductPrice from "../components/productdeatilspage/ProductPrice";

import ProductDescription from "../components/productdeatilspage/ProductDescription";

import Chatwithseller from "../components/productdeatilspage/Chatwithseller";

import GoogleMap from "../components/productdeatilspage/GoogleMap";

import PhoneNumberVerification from "../components/OTP/PhoneNumberVerification";


export default function ProductDetails({ lat, long }) {

  const [productdeatils,setProductdeatils]=useState([])
  const [seller,setSeller]=useState([]);
  const { id } = useParams()

  useEffect(()=>{
    fetchProductDeatils(id)
  },[])
  const images = [
    "1",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
  ];


  const fetchProductDeatils=async(id)=>{
    const res= await fetch(`http://127.0.0.1:8000/products/${id}/`)

    const data=await res.json()
    setProductdeatils(data)
    sellerfetch(data.product)
  }
  const center = { lat: lat, lng: long };  // Replace with your desired coordinates

const sellerfetch=async(sellerid)=>{
  const res= await fetch(`http://127.0.0.1:8000/api/user/${sellerid}/`)

  const data=await res.json()
  setSeller(data)
}
  return (

    <div className="container-lg">
      <ImageSlider images={images} />
      <ProductDescription  description={productdeatils.description} />
      <ProductPrice price={productdeatils.price} />
      <Chatwithseller seller={seller} />
      <GoogleMap center={center} zoom={15} />
      <PhoneNumberVerification/>
    </div>
  );
}
