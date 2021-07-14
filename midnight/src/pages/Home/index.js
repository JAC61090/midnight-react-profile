import React from "react";
import me from "./me-cropped.jpg";
import "./style.css";



function Home() {
  return (
    <div className="style" style={{ textAlign: "center"}}>
      <h2>Hello, World!</h2>
      <p>
        Hello! My name is Jason Carrazco. I have recently graduated a Full Stack Web Development program
        at Northwestern Universty in Chicago, Illinois. I am actively searching for job oppoerutniities 
        as Junior Web Developer. Some of my hobbies include cylcing, video games, hiking, and real estate development 
        when I am not creating websites.
      </p>
      <p>
        Languages I am Familiar with: HTML, CSS, JavaScript, REACT, BootStrap, node.js, express.js, MySQL, MERN & More
      </p>

      <br></br>
      <div>
        <img
          style={{
            width: "30%",
            height: "auto",
            borderRadius: "50% 0% 50% 0%",
          }}
          src={me}
          alt="Jason Carrazco"
        />
      </div>
      <marquee>Arrested Junior Web Development </marquee>
      
    </div>
  );
}

export default Home;
