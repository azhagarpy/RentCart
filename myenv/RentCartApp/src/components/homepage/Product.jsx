import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <>
      <Link to={`/product/${props.id}`} className="nostyle">
        <div className="card product">
          <div className="heart">
            <FaHeart />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <img src={props.img} alt="A product" className="product-image" />
          </div>
          <div className="product-details">
            <div>
              <h5>
                <span>Per Day&#8377;&nbsp;</span>
                {props.price}.00
              </h5>
              <h6>{props.title}</h6>
              <small>
                Conditions:&nbsp;&nbsp;<small>{props.condition}</small>
              </small>
              <br />
              <small>Location:&nbsp;&nbsp;Chennai 60008</small>
            </div>
            <div>
              <small>{props.date.slice(0,7)}</small>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
