import React, { useState } from 'react';
import { RiImageAddFill } from 'react-icons/ri';


export function MyForm() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [rentCartPrice, setRentCartPrice] = useState('');
  const [policy, setPolicy] = useState(false)
  const [uploadedImages, setUploadedImages] = useState(Array(8).fill(null));
  const [district, setDistrict] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [condition, setCondition] = useState('');
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = {
      productName,
      description,
      rentCartPrice,
      district,
      mobileNumber,
      otp,
      uploadedImages,
      policy,
      condition
    };
    console.log(formData);
  };
  const handlePhotoChange = (index, e) => {
    const files = Array.from(e.target.files);
    const updatedImages = [...uploadedImages];
    updatedImages[index] = files[0];
    setUploadedImages(updatedImages);
  };


  return (
    <div className="container-lg container-md my-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name:</label>
          <input
            required
            type="text"
            className="form-control"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
          required
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Product Condition</label>
          <select className='form-control'
            onChange={(e) => setCondition(e.target.value)}
          >
            <option value="">Select Product Condition</option>
            <option value="Bad">Bad</option>
            <option value="Good">Good</option>
            <option value="Best Condition">Best Condition</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="rentCartPrice" className="form-label">RentCart Price:</label>
          <input
          required
            type="text"
            className="form-control"
            id="rentCartPrice"
            value={rentCartPrice}
            onChange={(e) => setRentCartPrice(e.target.value)}
          />
        </div>
        <h1>Select Product Images</h1>
        <div className="image-upload">
          {[...Array(8)].map((_, index) => (
            <div key={index}>
              <label className="form-label">{`Image ${index + 1}`}</label>
              <div className="upload-image">
                <input type="file" onChange={(e) => handlePhotoChange(index, e)} required />
                <RiImageAddFill className="image-upload-icon" />
              </div>
            </div>
          ))}

        </div>
        <div className="mb-3">
          <label htmlFor="district" className="form-label">District:</label>
          <select
          required
            className="form-select"
            id="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option value="">Select District</option>
            <option value="district1">District 1</option>
            <option value="district2">District 2</option>
            <option value="district3">District 3</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">Mobile Number:</label>
          <input
          required
            type="text"
            className="form-control"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="otp" className="form-label">OTP:</label>
          <input
          required
            type="text"
            className="form-control"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <div className='row my-3'>
          <input type="checkbox" className='col-1'
          required
            onChange={(e) => setPolicy(e.target.value)}
          />
          <label className='form-label col-2'>Policy</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>


    </div>
  );
};

export default MyForm;
