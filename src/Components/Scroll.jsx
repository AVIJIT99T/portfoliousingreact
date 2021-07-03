import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import ExpandLessIcon from "@material-ui/icons/ExpandLessIcon";
import { FaMale } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";

const Scroll = (showBelow) => {
  const [show, setShow] = useState(showBelow ? false : true);
  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.addEventListener(`scroll`, handleScroll);
    }
  });
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <>
      {show && (
        <IconButton onClick={handleClick}>
          {/* <ExpandLessIcon /> */}
          <FaMale />
        </IconButton>
      )}
    </>
  );
};

export default Scroll;
