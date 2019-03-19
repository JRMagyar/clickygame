import React from "react";
import "./style.css";

function CharacterWrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default CharacterWrapper;
