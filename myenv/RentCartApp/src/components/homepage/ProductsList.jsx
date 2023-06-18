import React from "react";
import Product from "./Product";

export default function ProductsList({products}) {
  //  write code to fetch all products details

  //  map all items in products and pass all details to Products component


  return (
    <div className="ProductsList container-lg">
      {Object.keys(products).map((keys) => {
        const item = products[keys];
        return (
          <div key={item.id} >
            <Product
              id={item.id}
              img={item.thumbnail}
              condition={item.condition}
              date={item.created_at}
              price={item.price}
              title={item.title}
            />
          </div>
        );
      })}
    </div>
  );
}
