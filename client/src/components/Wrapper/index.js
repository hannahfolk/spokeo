import React from "react";
import "./style.css";

const Wrapper = (props) => {
  const { children } = props;
  return <div id="wrapper">{children}</div>;
};

export default Wrapper;
