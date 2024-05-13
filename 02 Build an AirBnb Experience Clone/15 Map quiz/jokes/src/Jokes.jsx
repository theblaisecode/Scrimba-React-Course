// import React from "react";

export default function Jokes(props) {
  console.log(props);

  return (
    <>
      <h3 style={{ display: props.setup ? "block" : "none" }}>
        Setup: {props.setup}
      </h3>

      {/* {props.setup && <h3 className="setup">Setup: {props.setup}</h3>} */}
      
      <p className="punchline">Punchline: {props.punchline}</p>
      <hr />
    </>
  );
}
