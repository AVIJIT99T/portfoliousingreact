import React from "react";
import img2 from "../Images/pic4.png";
import "./About.css";
import { withRouter } from "react-router";
// import { FaMale } from "react-icons/fa";
// import { IoMdContact } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section id="about" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <h1 className="about_heading">About Me</h1>
                <div className="col-lg-6 col-sm-8 order-2 order-lg-2 about_img">
                  <img
                    src={img2}
                    className="img-fluid"
                    alt="about img"
                    height="400px"
                    width="400px"
                  />
                </div>
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column about_right">
                  <p className="para_about">
                    <span className="about_span">Hi,</span> I am Avijit Karati,
                    currently pusrsuing my B.Tech in Electronics & Communication
                    Engineering from Kalyani Government Engineering College. I
                    hold an 8.75 CGPA along my three years. I passed my 10th
                    standard from Howrah Vivekananda Institution with an
                    aggregate of 87% and also passed my higher secondary from
                    the same school with an aggregate of 88%.I love coding.I
                    have solved over 600 questions on Leetcode. Besides that
                    currently I enhance my skills through Web Development.I have
                    a knowledge of HTML, CSS, JavaScript, Reactjs. Also, I know
                    a bit of DBMS and SQL as well.Besides my studies I love
                    sports.I love to watch cricket, football, tennis etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withRouter(About);
