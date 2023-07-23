import React from "react";

const Content = ({ title }) => {
  return (
    <div className="container">
      <div className="row">
        <h5 className="fs-1 fw-semibold my-4">{title} </h5>
      </div>
      <div className="row">
        <div className="col-8">
          <div class="card mb-3 border-0 rounded-0">
            <img
              src="pic2.jpg"
              class="card-img-top rounded-0 position-relative"
              alt="..."
            />
            <div>
              <div
                id="textbg"
                className="z-2 w-100 text-light position-absolute bottom-0 fs-2 fw-semibold"
              >
                <span className="mx-2">{title}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex flex-column h-100 justify-content-center align-itmes-center">
          <div class="card mb-3 border-0">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="pic.jpg" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 border-0">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="pic.jpg" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 border-0">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="pic.jpg" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
