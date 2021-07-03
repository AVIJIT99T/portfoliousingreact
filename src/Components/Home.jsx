import React from "react";
import img1 from "../Images/pic3.jpg";
import { withRouter } from "react-router";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section id="home" className="d-flex align-items-center">
        <div className="container-fluid home_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6  pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column home_right">
                  <h3>Hello, my name is</h3>
                  <h1>Avijit Karati</h1>
                  <h2>
                    And I'm a
                    <span className="span_heading"> Web Developer</span>
                  </h2>
                  <div className="mt-3">
                    <a className="btn btn-get-started">Hire Me</a>
                  </div>
                </div>
                <div className="col-lg-6  order-1 order-lg-2 home-img">
                  <img
                    src={img1}
                    className="img-fluid animated rounded"
                    alt="home_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
