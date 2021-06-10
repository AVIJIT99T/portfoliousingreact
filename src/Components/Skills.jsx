import React from "react";
import "./Skills.css";
import { withRouter } from "react-router";

const Skills = () => {
  return (
    <>
      <section id="skills" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <h1 className="skills_heading">My Skills</h1>

                <div className="col-md-6 pt-5  pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column skills_left">
                  <p className="para_skills">
                    Though I am an ECE student, I am very much interested in
                    recent technologies.That's why now I am more interested in
                    computer science subjects. I am very much aware of Web
                    Development.This is the field which attracts me the most.I
                    started with HTML, CSS, JavaScript. Then I learn about some
                    basic SQL queries.I am also learning about react
                    components.These are some of my basic skills.
                  </p>
                </div>

                <div className="col-lg-6 order-2 order-lg-2 mt-4 skills_right">
                  <div className="bars">
                    <div className="info">
                      <span>HTML</span>
                      <span>90%</span>
                    </div>
                    <div className="line html"></div>
                  </div>
                  <div className="bars">
                    <div className="info">
                      <span>CSS</span>
                      <span>70%</span>
                    </div>
                    <div className="line css"></div>
                  </div>
                  <div className="bars">
                    <div className="info">
                      <span>JavaScript</span>
                      <span>80%</span>
                    </div>
                    <div className="line js"></div>
                  </div>
                  <div className="bars">
                    <div className="info">
                      <span>React</span>
                      <span>90%</span>
                    </div>
                    <div className="line react"></div>
                  </div>
                  <div className="bars">
                    <div className="info">
                      <span>SQL</span>
                      <span>80%</span>
                    </div>
                    <div className="line sql"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withRouter(Skills);
