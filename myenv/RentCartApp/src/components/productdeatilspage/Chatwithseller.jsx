import React from "react";
import { Link } from "react-router-dom";

export default function Chatwithseller({seller}) {
  return (
    <div className="chat-with-seller">
      <div>
        <img src={seller.profile} alt="aa" className="user-profile" />
        <h4>{seller.username}</h4>
      </div>
      <Link to={`/chatwithseller/${seller.id}`} className="btn  col-8 my-5 offset-2 btn-info">Chat With Seller</Link>
    </div>
  );
}
