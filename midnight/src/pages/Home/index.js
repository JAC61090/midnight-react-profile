import React from "react";
import me from "./me-cropped.jpg";
import "./style.css"

function Home() {
    return(
        
          <div className="style" style={{textAlign: "center"}} >
      
          <h2>Greetings!</h2>
          <p>Hello my name is Jason Carrazco, I was born in "The City of Broad Shoulders" Chicago, Illinois. 
            I am a hopeful and aspiring fullstack Web Developer with experience as an Independant Contractor and Bicycle Mechanic.

          </p>
          <br></br>
          <div>
          
          <img style={{  width:"30%", height: "auto", borderRadius:"50% 50% 0% 50%"}} src={me} alt="Jason Carrazco"/>
          <br></br>
          </div>
          <br></br>
          
          <h3>About Me</h3>
          <p>I am a aspiring fullstack Web Developer and once I am finished with my fullstack training I plan to pursue software development as next career endeavor. 
            I have many hobbies that inlcude, building/restoring all kinds of bicycles, 
            traveling to park/forest preserves across the state, and participating in organized sports.
            Although Coding began as a hobby, it quickly evolved into a quest that leaves me in both 
            confusion and awe.</p>

          </div>
    );
  }
  
  export default Home;