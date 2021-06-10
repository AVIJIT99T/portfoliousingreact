import React from "react";
import "./Short.css";
import { withRouter } from "react-router";

const Short = (props) => {
  return (
    <>
      <div className="col-sm-4">
        <div className="card mb-4 card_short">
          <img
            src={props.imgsrc}
            className="card-img-top"
            width="200"
            height="200"
          />

          <div className="card-body card_body">
            <h5 className="card-title text-center">{props.title}</h5>
            <p className="card-text">{props.para}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Short);
