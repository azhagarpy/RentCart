import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useParams } from "react-router-dom";

export function ImageSlider({ images, }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [productImages, setProductImages] = useState(null);
  const { id } = useParams()


  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const fetchProductImages = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/product-images/${id}/`);
      const jsonData = await response.json();
      setProductImages(jsonData);
    } catch (error) {
      console.log('Error fetching product images:', error);
    }
  };

  useEffect(() => {
    fetchProductImages();

  }, []);

  const keys = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8',]



  return (
    <div className="image-slider-container container-lg">


      <div className="image-slider ">
        <button className="slider-button btn btn-success" onClick={previousImage}>
          <BsChevronLeft />
        </button>
        {productImages ? (

          <img
            src={productImages[keys[currentImageIndex]]}
            alt="Slider"
            className="slider-image"
          />) : (
          <p>Loading product images...</p>
        )}
        <button className="slider-button btn btn-success" onClick={nextImage}>
          <BsChevronRight />
        </button>
      </div>
      <div className="image-slider-icons">



        {productImages ? (
          Object.keys(productImages).map((e, index) => {
            if (index === 0 || index === Object.keys(productImages).length - 1) {
              return null; // Skip the first and last item
            }
            else {
              return (
                <img
                  key={index}
                  src={productImages[e]}
                  alt="net slow"
                  className="  image-slider-icon-image"
                  onClick={() => { setCurrentImageIndex(index-1) }}
                />)
            }
          })
        ) : (
          <p>Loading product images...</p>
        )}





      </div>
    </div>
  );
}

export default ImageSlider;
