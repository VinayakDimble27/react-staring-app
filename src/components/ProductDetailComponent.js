import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productID } = useParams();
  return <>{<p>You can buy {productID} for $999</p>}</>;
};

export default ProductDetail;
