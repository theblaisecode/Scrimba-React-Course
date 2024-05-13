import React from "react";

export default function App() {
  const [result, func] = React.useState("Yes");
  console.log(result); // Yes

  return (
    <div className="state">
      <h1 className="state--title">Is state important to know?</h1>
      <div className="state--value">
        <h1>{result}</h1>
      </div>
    </div>
  );
}
