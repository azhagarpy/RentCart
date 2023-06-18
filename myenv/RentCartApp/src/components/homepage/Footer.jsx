import React from "react";

export default function Footer(){
  return (

    <div className=" my-lg-5 my-md-4 my-xs-2 footer">
    <footer
      className="text-center text-lg-start text-dark"
      style={{ backgroundColor: "#ECEFF1" }}
    >


      <section className="">
        <div className="container-lg container-md  text-center pt-3 text-md-start mt-2">
          <div className="row mt-lg-3 mt-xs-2">
            <div className="col-md-3 col-lg-4 col-xl-3  mx-auto mb-lg-4 mb-xs-4">
              <h6 className="text-uppercase fw-bold">Company name</h6>
              <hr
                className="mb-lg-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2 footer">
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr
                className="mb-2 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a href="#!">Books</a>
              </p>
              <p>
                <a href="#!">Mobiles</a>
              </p>
              <p>
                <a href="#!">Phones</a>
              </p>
              <p>
                <a href="#!">Cloths</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2 footer">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-2 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a href="#!">Your Account</a>
              </p>
              <p>
                <a href="#!">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!">Shipping Rates</a>
              </p>
              <p>
                <a href="#!">Help</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2 footer">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-2 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <i className="fas fa-home mr-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> vbc@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-4 text-center">
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        ><i className="fab fa-facebook-f"></i
        ></a>

        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        ><i className="fab fa-twitter"></i
        ></a>

        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        ><i className="fab fa-google"></i
        ></a>

        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        ><i className="fab fa-instagram"></i
        ></a>

        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        ><i className="fab fa-linkedin-in"></i
        ></a>

        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        ><i className="fab fa-github"></i
        ></a>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/">RentCart</a>
      </div>
    </footer>
  </div>

  )
  }