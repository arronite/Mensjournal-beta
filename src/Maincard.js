import React from "react";
import { useReducer, useState } from "react";
const initial = {
  page: 0,
  pagetext: "akshefkhasdfkljahsdfksadh;klfh",
};

const Maincard = () => {
  return (
    <div className="container">
      <div
        class="card  mt-5"
        style={{ marginBottom: "10rem", maxwidth: "540px" }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            {" "}
            <img src="pic.jpg" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8  ">
            <div class="card-body d-flex flex-column  justify-content-center text-bg-dark w-100">
              <h5 class="card-title  text-light">Card title</h5>
              <p class="card-text align-middle ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-bg-dark">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincard;
