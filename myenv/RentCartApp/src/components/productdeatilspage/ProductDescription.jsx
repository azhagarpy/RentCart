import React from "react";

export default function ProductDescription({description}) {
  return (
    <div className="px-2  my-3">
      <div className="product-description">
        <h1>Description</h1>
        <p>
          {description}
        </p>
      </div>
    </div>
    
  );
}
