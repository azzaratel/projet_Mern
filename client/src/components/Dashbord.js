import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { deleteproduct } from "../JS/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { deletecommande } from "../JS/commandeSlice";
function Dashbord({ ping, setping }) {
  const [tab, settab] = useState("product");
  const products = useSelector((state) => state.product?.productlist);
  const commandes = useSelector((state) => state.commande.commandelist);
  const dispatch = useDispatch();
  return (
    <div className="tabs">
      <div className="tab1">
        <ul>
          <li style={{listStyle:"none"}} >
            <button 
            style={{background:" white" ,
            border: "solid 2px black",
            padding: ".375em 1.125em",
            fontSize: "1rem",width:"90px" }} onClick={() => settab("product")}>Products</button>
          </li>
          <li style={{listStyle:"none"}}>
            <button   style={{background:" white" ,
            border: "solid 2px black",
            padding: ".375em 1.125em",
            fontSize: "1rem",
            width:"90px"}} onClick={() => settab("commande")}>Commandes</button>
          </li>
          {/* <li>
            <button onClick={() => settab("user")}>users</button>
          </li> */}
        </ul>
      </div>

      <div    className="tab2">
        {tab == "product" ? (
          <div>
            <h1 style={{ marginLeft:"345px"}}>Product Liste </h1>
            <table
              style={{  width: "80%", color: "black" }}
            >
              <tr>
                <td> <h3 className="h11"> Image </h3></td>
                <td> <h3 className="h11">Name Product </h3></td>
                <td> <h3 className="h11"> Description </h3></td>
                <td> <h3 className="h11"> Price </h3></td>
                <td> <h3 className="h11"> Category </h3></td>
                
              </tr>
              {products?.map((el) => (
                <tr>
                  <td>
                    <img
                      style={{ width: "130px", height: "130px" }}
                      src={el?.image_product}
                    />
                  </td>
                  <td> <h3 className="h11"> {el?.name_product} </h3></td>
                  <td> <h3 className="h11">{el?.descrition} </h3></td>

                  <td><h3 className="h11">{el?.prix}  </h3> </td>
                  <td> <h3 className="h11">{el?.categorie}  </h3></td>
                  <td>
                    <button
                    style={{background:"red" }}
                      onClick={() => {
                        dispatch(deleteproduct(el?._id));
                        setping(!ping);
                      }}
                    >
                      X
                    </button>
                  </td>
                  <td>
                    <button style={{background:"green" }}>edit</button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        ) : (
          <div>
            <h6>Commande List</h6>
            <table
              style={{ width: "80%",  color: "black" }}
            >
              <tr>
                <td><h3 className="h11"> Image </h3></td>
                <td><h3 className="h11">Name Product </h3></td>
                <td><h3 className="h11">Quantité </h3></td>
                <td><h3 className="h11">Price</h3></td>
                <td></td>
                <td></td>
              </tr>
              {commandes?.map((el) => (
                <tr>
                  <td>
                    <img
                     style={{ width: "130px", height: "130px" }}
                      src={el?.img_prod}
                    />
                  </td>
                  <td><h3 className="h11"> {el?.name_prod} </h3></td>
                  <td> <h3 className="h11"> {el?.qte_prod} </h3></td>
                  <td><h3 className="h11"> {el?.price} </h3> </td>
                  <td>
                    <button
                     style={{background:"red" }}
                      onClick={() => {
                        dispatch(deletecommande(el?._id));
                        setping(!ping);
                      }}
                    >
                      X
                    </button>
                  </td>
                  <td>
                    <button style={{background:"green" }}>edit</button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashbord;
