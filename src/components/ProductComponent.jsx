import React from "react";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  return (
    <>
      <h1>Welcome to products</h1>
      <ul>
        <li>
          <Link to="/products/p1">product 1</Link>
        </li>
        <li>
          <Link to="/products/p2">product 2</Link>
        </li>
        <li>
          <Link to="/products/p3">product 3</Link>
        </li>
      </ul>
    </>
  );
};
export default ProductComponent;
