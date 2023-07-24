import React from "react";
import "./Contact.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Contact() {
  const item = {
    name: "Location 1",
    location: {
      lat: 33.87290585709625,
      lng: 10.110983289931685,
    },
  };

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 33.87290585709625,
    lng: 10.110983289931685,
  };

  return (
    <div>
      <div style={{marginTop:" -386px", marginBottom:"50px"}}>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="../main.css" />
        <div className="wrapper">
          <form className="form">
            <div className="pageTitle title">Contact us </div>
            <div className="secondaryTitle title">
              Please fill this form to contact us.
            </div>
            <input type="text" className="name formEntry" placeholder="Name" />
            <input
              type="text"
              className="email formEntry"
              placeholder="Email"
            />
            <textarea
              className="message formEntry"
              placeholder="Message"
              defaultValue={""}
            />
            <input
              type="checkbox"
              className="termsConditions"
              defaultValue="Term"
            />
            <label style={{ color: "grey" }} htmlFor="terms">
              {" "}
              I Accept the{" "}
              <span style={{ color: "#0e3721" }}>Terms of Use</span> &amp;{" "}
              <span style={{ color: "#0e3721" }}>Privacy Policy</span>.
            </label>
            <br />
            <button className="submit formEntry" onclick="thanks()">
              Submit
            </button>
          </form>

          <div>
            <div className="aboutUsElement">
              <LoadScript googleMapsApiKey="AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE">
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={15}
                  center={defaultCenter}
                >
                  <Marker key={item.name} position={item.location} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
