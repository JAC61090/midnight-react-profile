import React from "react";
import "./style.css"

function FootReturn() {
  return (
    <footer class="page-footer fixed-bottom font-small special-color-dark pt-1 ">
      <div class="container">
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a
              class="btn-floating btn-fb mx-1"
              href="https://github.com/JAC61090"
            >
              <i class="fab fa-github"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="btn-floating btn-li mx-1"
              href="https://www.linkedin.com/in/jason-carrazco-b614531b3/"
            >
              <i class="fab fa-linkedin-in"> </i>
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-copyright text-center py-1">
        © 2021 Copyright:
        <a href="https://github.com/JAC61090">
          {" "}
          Jason A. Carrazco
        </a>
      </div>
    </footer>
    
  );
}

export default FootReturn;
