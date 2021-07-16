import React from "react";
import "./style.css";
import me from "./me-cropped.jpg";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <hr class="solid bg-dark" />
          <img
            style={{
              height: "250px",
              width: "30%",
              height: "auto",
              borderRadius: "50% 0% 50% 0%",
              marginBottom:"80px"
            }}
            src={me}
            class="float-left pr-3 pt-3 pb-3 img-fluid"
            alt="Jason A. Carrazco"
          />
          <p className="first" style={{ fontSize: "27px" }}>
            Hello! My name is Jason Carrazco. I recently completed a Full Stack
            Coding Program at Northwestern University. I received a certificate
            of completion and now I am actively searching for job opportunities
            as a Junior Web Developer. Some of my hobbies include being
            outdoors, cylcing,video games, hiking, and Real Estate development
            when I am not creating websites.
          </p>

          <p style={{ fontSize: "27px" }}>
            Languages I am proficient with are HTML, CSS, JavaScript, REACT,
            BootStrap, node.js, express.js, MySQL & More
          </p>
          <p className="first" style={{ fontSize: "27px" }}>
            I am committed to high standards of user experience, usability, and speed.
            I am detail focused and an ambitious problem solver with a passion for learning new skills.
            
            



          </p>
          
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
