import React from "react";
import "./style.css";

function SiteWrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default SiteWrapper;
