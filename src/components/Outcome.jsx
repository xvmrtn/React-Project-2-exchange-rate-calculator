import React from "react";

function Outcome({ text }) {
  return (
    <div className="outcome" id="outcome">
      <p>It's {text} PLN</p>
    </div>
  );
}

export default Outcome;
