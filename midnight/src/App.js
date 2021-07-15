import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index"
import Nav from "./components/Nav/index.js"
import Footer from "./components/Footer/index.js"
import Wrapper from "./components/Wrapper/index";
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio/index.js"
import ResumePage from "./pages/ResumePage";
import './index.css';


function App() {
  return (
   
      <div>
        <Nav />
        <Route  exact path="/" component={Home} />
        <Route  exact path="/contact" component={Contact} />
        <Route  exact path="/portfolio" component={Portfolio} />
        <Route  exact path="/resume" component={ResumePage} />
        <Footer />
      </div>
 
    
  );
}

export default App;
