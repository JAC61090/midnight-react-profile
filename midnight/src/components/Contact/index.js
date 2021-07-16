import React from "react";
import me from "./me-cropped.jpg";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <hr class="solid bg-dark" />
          <img
            style={{ height: "500px", marginBottom:"80px" }}
            src={me}
            class="pr-4 pb-3 img-fluid float-left"
            alt="Jason Carazco"
          />
          <h4 style={{padding: "20px"}} style={{fontFamily:"Barlow"}} style={{ fontSize: "27px" }}>
            I am actively looking for a Junior Web Development position.  
            Please feel free to contact me at any time and if I do not
            immediately respond I will respond within the next buisness day.
            Thank you!
          </h4>

          <MDBRow>
            <br>
            </br>

          
          <hr className="hr-dark w-65" />
          <h2>Contact Me:</h2>
          <br />
          <h3>E-mail</h3>
          {/* <hr className="hr-dark w-25" /> */}
          <a href="carrazcojason10@gmail.com">
            <MDBIcon icon="envelope" /> carrazcojason10@gmail.com
          </a>

          <hr className="hr-dark w-35" />
          <h3>Cell Phone</h3>
          {/* <hr className="hr-dark w-65" /> */}
          <a href="tel:773-860-6882">
            <MDBIcon icon="phone-alt" /> 312-860-6882
          </a>
          </MDBRow>
          
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;
