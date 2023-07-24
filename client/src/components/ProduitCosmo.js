import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

function ProduitCosmo({ ping, setping }) {
  const products = useSelector((state) => state.product?.productlist);
  console.log(products);

  return (
    <div>
      <div className="container_product">
        {products
          ?.filter((el) => el.categorie == "pc")
          .map((el) => (
            <ProductCard product={el} ping={ping} setping={setping} />
          ))}
      </div>
    </div>
  );
}

export default ProduitCosmo;
