import React from "react";
import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";

function ProduitAli({ ping, setping }) {
  const products = useSelector((state) => state.product?.productlist);
  console.log(products);

  return (
    <div className="container_product">
      {products
        ?.filter((el) => el.categorie === "pa")
        .map((el) => (
          <ProductCard product={el} ping={ping} setping={setping} />
        ))}
    </div>
  );
}

export default ProduitAli;
