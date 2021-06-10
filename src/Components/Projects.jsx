import React from "react";
import img3 from "../Images/pic6.jpeg";
import img4 from "../Images/pic7.jpg";
import img5 from "../Images/pic8.jpg";
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
                  imgsrc={img3}
                  title="WEB DEVELOPMENT"
                  para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
            distinctio sunt. Excepturi distinctio officiis, aliquam ratione
            reiciendis amet ipsa nam, suscipit, eum exercitationem delectus
            voluptate. "
                />
                <Short
                  imgsrc={img4}
                  title="CMOS VLSI DESIGN"
                  para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
            distinctio sunt. Excepturi distinctio officiis, aliquam ratione
            reiciendis amet ipsa nam, suscipit, eum exercitationem delectus
            voluptate. "
                />
                <Short
                  imgsrc={img5}
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

export default withRouter(Projects);
