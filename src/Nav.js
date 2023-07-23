import React from "react";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark  ">
      <div class="container-fluid   ">
        <a id="navicon" class="navbar-brand text-light text " href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler bg-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon "></span>
        </button>
        <div
          class="collapse navbar-collapse container-fluid"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li id="home" class="nav-item">
              <a
                class="nav-link active text-light "
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <div className="underline"></div>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Features
              </a>
              <div className="underline"></div>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Pricing
              </a>
              <div className="underline"></div>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Pricing
              </a>
              <div className="underline"></div>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Pricing
              </a>
              <div className="underline"></div>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Pricing
              </a>
              <div className="underline"></div>
            </li>
            <li class="nav-item dropdown ">
              <a
                class="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div className="underline"></div>
              <ul
                class="dropdown-menu "
                style={{
                  position: "absolute",
                  left: "-430px",
                  width: "600px",

                  borderRadius: 0,
                }}
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
