import React from "react";
import img3 from "../Images/pic6.jpeg";
import img4 from "../Images/pic7.jpg";
import img5 from "../Images/pic8.jpg";
import { DiCode } from "react-icons/di";
// import { DiCode } from "react-icons/di";
// import { DiCode } from "react-icons/di";
import "./Projects.css";
import Short from "./Short";
import { withRouter } from "react-router";

const Projects = () => {
  return (
    <>
      <section id="projects" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <h1 className="projects_heading">My Projects</h1>
              <div className="row">
                <Short
                  // imgsrc={<DiCode />}
                  title="WEB DEVELOPMENT"
                  para="From the end of 2020, I have been introduced to web development. And from the very start I have a huge interest on it.
                  I have started with HTML, CSS, JavaScript. And currently learning React and Node js as a backend.Also I know a little bit of SQL,MongoDb as well."
                />
                <Short
                  // imgsrc={<DiCode />}
                  title="CMOS VLSI DESIGN"
                  para="I have done my project on CMOS VLSI design from Ardent. I have made a project on Seven segment display using microwind and xilinx.It is an
                  output display system that offers a substitute to complicate dot matrix displays to display information in the form of image or text."
                />
                <Short
                  // imgsrc={<DiCode />}
                  title="ARDUINO"
                  para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
            distinctio sunt. Excepturi distinctio officiis, aliquam ratione
            reiciendis amet ipsa nam, suscipit, eum exercitationem delectus
            voluptate."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
