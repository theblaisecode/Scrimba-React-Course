import React from "react";

export default function Box(props) {
  props.on;
  const styling = {
    backgroundColor: props.on ? "#222222" : "",
  };

  return <div className="box" key={props.key} style={styling}></div>;
}
