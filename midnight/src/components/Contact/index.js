import React from "react";
import me from "./me-cropped.jpg";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "300px" }}
            src={me}
            class="pr-4 pb-3 img-fluid float-left"
            alt="Jason Carazco"
          />
          <h4>
            I recently gradated a Full Stack Web Development Bootcamp at Northwestern University. 
            I was given a certificate of completion and now
            I am actively looking for a Junior Web Development
            position, below I have linked my e-mail and cell phone number.
            Please feel free to contact me at any time and if I do not
            immediately respond I will respond within the next buisness day.
            Thank you!
          </h4>

          <MDBRow>

          <hr className="hr-light" />
          <h3>E-mail</h3>
          <hr className="hr-dark w-25" />
          <a href="carrazcojason10@gmail.com">
            <MDBIcon icon="envelope" /> carrazcojason10@gmail.com
          </a>

          <hr className="hr-light w-55" />
          <h3>Cell Phone</h3>
          <hr className="hr-dark w-65" />
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
