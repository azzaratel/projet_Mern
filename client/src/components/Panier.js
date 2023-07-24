import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletecommande } from "../JS/commandeSlice";

function Panier({ ping, setping }) {
  const commandes = useSelector((state) => state.commande.commandelist);
  const user = useSelector((state) => state.user.user);
  console.log(commandes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="h11">My commandes</h1>
      <table style={{ width: "80%" }}>
        <tr>
          <td>
            <h3 className="h11"> Image </h3>
          </td>
          <td>
            {" "}
            <h3 className="h11"> Nom de produit </h3>
          </td>
          <td>
            {" "}
            <h3 className="h11"> Quantité </h3>
          </td>
          <td>
            {" "}
            <h3 className="h11"> prix </h3>
          </td>
          <td></td>
        </tr>
        {commandes
          ?.filter((el) => el?.name_user == user?.name)
          .map((el) => (
            <tr>
              <td>
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                  src={el?.img_prod}
                />
              </td>
              <td>
                <h6> {el?.name_prod} </h6>
              </td>
              <td>
                <h6>{el?.qte_prod}</h6>
              </td>
              <td>
                <h6 style={{ marginLeft: "50px" }}>{el?.price}</h6>
              </td>
              <td>
                <button
                  onClick={() => {
                    dispatch(deletecommande(el?._id));
                    setping(!ping);
                  }}
                  style={{ width: "50px", color: "red" }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default Panier;
