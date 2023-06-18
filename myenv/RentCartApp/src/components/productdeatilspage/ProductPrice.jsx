import React from "react";

export default function ProductPrice({price}) {
  return (
    <div className="px-2">
      <div className="my-4 product-price">
        Rent per Day
        <h1>$ {price}</h1>
      </div>
      <hr />
    </div>
  );
}
