import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
function Store() {
  return (
    <div>
      <div className="contaiiner">
        <div className="title">
          <h1 className="h11"> Made in Germany Categories</h1>
        </div>

        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://tn.jumia.is/cms/0000_Refresh2023/July/W28/GEN/J23_TN_Summer_Slider11.jpg"
              alt="First slide"
              style={{ height: "1000px", width:"50%" }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://tn.jumia.is/cms/0000_Refresh2023/July/W28/UND/Smartphones/J23_TN_Smartphone_Slider1.jpg"
              alt="Second slide"
              style={{ height: "1000px" , width:"50%" }}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://tn.jumia.is/cms/0000_Refresh2023/July/W28/UND/Parfums/J23_TN_PARFUM_Slider.jpg"
              alt="third slide"
              style={{ height: "1000px" , width:"50%" }}
            />
            <Carousel.Caption>
              <h3>third slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>







        <div className="ghost">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="services">
        <Link to="/pco">
          <Card
            style={{
              maxWidth: "300px",
              minWidth: "300px",
              maxHeight: "300px",
              minHeight: "300px",
              marginTop:"100px"
            }}
          >
            <Card.Img
              style={{
                maxWidth: "300px",
                minWidth: "300px",
                maxHeight: "200px",
                minHeight: "200px",
                
              }}
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTM05qTvFgQCpj55VCxL3xywgOKMzGegyFDsT3Sp79h0YMcGXdw3nwBzsuO93Ow44HbEk&usqp=CAU"
            />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}} >Produits cosmotique</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/pe">
          <Card
            style={{
              maxWidth: "300px",
              minWidth: "300px",
              maxHeight: "300px",
              minHeight: "300px",
              marginTop:"100px"
            }}
          >
            <Card.Img
              style={{
                maxWidth: "300px",
                minWidth: "300px",
                maxHeight: "200px",
                minHeight: "200px",
              }}
              variant="top"
              src="https://t3.ftcdn.net/jpg/02/12/63/96/240_F_212639674_94RhRUJI8fnhndG1Xww17EHeANcIkhFj.jpg?fbclid=IwAR0ulQMW9kvGhVnjfw5nEX_sKIpDKoa9gILpB1fZl8HNLIjO1xgxKnIiUPs"
            />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>Produits électronique</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/pa">
          <Card
            style={{
              maxWidth: "300px",
              minWidth: "300px",
              maxHeight: "300px",
              minHeight: "300px",
              marginTop:"100px"
            }}
          >
            <Card.Img
              style={{
                maxWidth: "300px",
                minWidth: "300px",
                maxHeight: "200px",
                minHeight: "200px",
              }}
              variant="top"
              src="https://as1.ftcdn.net/v2/jpg/04/22/46/66/1000_F_422466688_T0OhZyKSBT3qlFfAi0tsNQyqq1QL3Y0M.jpg?fbclid=IwAR1qdDpW9dlKWaEc_XRj2D9bBWEz6KegERhGHUj4QTyT31Wcj9zhyK29vgo"
            />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>Produits alimentaire</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default Store;
