// import React from "react";

export default function Jokes(props) {
  console.log(props.comments);
  return (
    <div>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      <p>Punchline: {props.punchline}</p>
      <hr />
    </div>
  );
}
