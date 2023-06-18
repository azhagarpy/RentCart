
import Categories from '../components/homepage/Categories';
import Topsell from '../components/homepage/Topsell';
import ProductsList from '../components/homepage/ProductsList';
import Footer from '../components/homepage/Footer';
import GoogleMaps from '../components/homepage/GoogleMaps';
import React,{useState,useEffect} from 'react';
function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);


  const userLatitude = 37.7749; // User's latitude
  const userLongitude = -122.4194; // User's longitude

  const locations = [
    { name: 'Location 1', latitude: 37.7749, longitude: -122.4194 },
    { name: 'Location 2', latitude: 37.7833, longitude: -122.4167 },
    { name: 'Location 3', latitude: 37.7914, longitude: -122.4089 },
    // Add more locations as needed
  ];


  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/categories/');
      const jsonData = await response.json();
      setCategories(jsonData);
    } catch (error) {
      console.log('Error fetching categories:', error);
    }
  };


  const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/products/');
      const jsonData = await response.json();
      setProducts(jsonData);
    } catch (error) {
      console.log('Error fetching categories:', error);
    }
  };



  return (
    <div className="App">
<Categories categories={categories} />
<GoogleMaps userLatitude={userLatitude} userLongitude={userLongitude} locations={locations} />

<Topsell/>
<ProductsList products={products}/>
<Footer/>


    </div>
  );
}

export default App;
