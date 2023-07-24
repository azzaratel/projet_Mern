// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";

// import { useDispatch } from "react-redux";
// import ProductCard from "./ProductCard";
// import { editproduct } from "../JS/productSlice";

// function Editproduct({ product, ping, setping }) {
//   const dispatch = useDispatch();
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [edit, setedit] = useState({
//     name_product: product.name_product,
//     image_product: product.image_product,
//     descrition: product.descrition,
//     prix: product.prix,
//     categorie: product.categorie,
//   });
//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Edit
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit product</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Product name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder={product.name_product}
//                 onChange={(e) =>
//                   setedit({ ...edit, name_product: e.target.value })
//                 }
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Product image</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder={product.image_product}
//                 onChange={(e) =>
//                   setedit({ ...edit, image_product: e.target.value })
//                 }
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Product description</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder={product.descrition}
//                 onChange={(e) =>
//                   setedit({ ...edit, descrition: e.target.value })
//                 }
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Product price</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder={product.prix}
//                 onChange={(e) => setedit({ ...edit, prix: e.target.value })}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Product categorie</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder={product.categorie}
//                 onChange={(e) =>
//                   setedit({ ...edit, categorie: e.target.value })
//                 }
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button
//             variant="primary"
//             onClick={() => {
//               dispatch(editproduct({ id: product._id, edit }));
//               setping(!ping);
//             }}
//           >
//             Edit
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       <ProductCard product={product} ping={ping} setping={setping} />
//     </>
//   );
// }

// export default Editproduct;
