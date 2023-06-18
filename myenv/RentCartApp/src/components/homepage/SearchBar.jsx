import React,{useEffect,useState} from "react";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function SearchBar() {

const [data,setData]=useState([]);
const [searchValue,setSearchValue]=useState('');


const handelChange=(e)=>{
    setSearchValue(e.target.value);
    console.log(searchValue)
}


useEffect(()=>{
    fetchProducts();
},[])

const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/products/');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error fetching categories:', error);
    }
  };



    return (
            <div className="search">
                <input
                    type="text"
                    placeholder="Search places and products"
                    className=" search-box"
                    onChange={(e)=>{handelChange(e)}}
                />


            <RiSearchLine className="search-icon" />
                <div className="search-list">
                
                {
                    searchValue.length > 0 && 
                    data.map((e)=>{
                        return(
                            <a href={`/product/${e.id}`} >
                        <p className="m-1 search-item" >{e.title.toLowerCase().includes(searchValue) ? e.title : 'No Results Found'}</p>
                        </a>
                        )
                    }
                    )
                }

                </div>
</div>
    );
}
