import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import Editproduct from "./Editproduct";
import { addcommande } from "../JS/commandeSlice";
import { deleteproduct } from "../JS/productSlice";

function ProductCard({ product, setping, ping }) {
  const user = useSelector((state) => state.user.user);
  const [commande, setcommande] = useState({
    name_user: user?.name,
    lastname_user: user?.lastname,
    name_prod: product?.name_product,
    img_prod: product?.image_product,
    qte_prod: "1",
    price: product?.prix,
  });
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product?.image_product} />
      <Card.Body>
        <Card.Title>{product?.name_product}</Card.Title>
      </Card.Body>

      <button
        onClick={() => {
          dispatch(addcommande(commande));
          setping(!ping);
          Swal.fire(
            "Votre commande est ajoutée!",
            "You clicked the button!",
            "success"
          );
        }}
      >
        buy
      </button>
      {/* <Editproduct product={product} ping={ping} setping={setping} />
      <button
        onClick={() => {
          dispatch(deleteproduct(product._id));
          setping(!ping);
        }}
      >
        Delete
      </button>  */}
    </Card>
  );
}

export default ProductCard;
