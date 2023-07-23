import React from "react";
import EditorsPick from "./EditorsPick";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-secondary d-flex my-5">
        <div className="container d-flex align-items-center justify-content-center py-5">
          <div>
            <div
              class="card bg-secondary border-0 rounded-0 "
              style={{ width: "18rem" }}
            >
              <img src="pic2.jpg" class="card-img-top rounded-0" alt="..." />
              <p class="card-text text-light">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div
            class="card bg-secondary border-0 rounded-0 mx-5"
            style={{ width: "18rem" }}
          >
            <img src="pic2.jpg" class="card-img-top rounded-0" alt="..." />
            <p class="card-text text-light">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>

          <div
            class="card bg-secondary border-0 rounded-0"
            style={{ width: "18rem" }}
          >
            <img src="pic2.jpg" class="card-img-top rounded-0" alt="..." />
            <p class="card-text text-light">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div id="containersize" className="container">
        <div id="line"></div>
        <div className="d-flex align-items-center justify-content-center my-4 w-100">
          <div className="d-flex justify-content-start align-items-center w-50">
            <img
              src="TheArenaGroup.svg"
              alt="Kiwi standing on oval"
              style={{ width: "10rem" }}
            />
          </div>
          <div className="d-flex justify-content-end align-items-center w-50">
            LOGO
          </div>
        </div>
        <div className="d-flex justify-content-end text-secondary  ">
          <ul className="d-flex justify-content-center">
            <ol className="p-0">privacy policy .</ol>
            <ol className="px-2">Terms of Usage .</ol>
            <ol className="px-0">About Us .</ol>
          </ul>
        </div>
        <div className="d-flex justify-content-end my-2  ">
          <div>
            © 2023 The Arena Media Brands, LLC MENS JOURNAL is a registered
            trademark of The Arena Media Brands, LLC.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
