import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { FiAnchor } from "react-icons/fi";

export default function Topsell() {
  return (
    <div className="bg-info container-lg topsell">
      <h1>Unlock Your Perfect Rental Experience</h1>
      <div>
        <span>
          <FaThumbsUp />
        </span>
        <span>
          <FiAnchor />
        </span>
        <span>
          <MdShoppingCart />
        </span>
      </div>
    </div>
  );
}
