import React from "react";

function CalculatorAmount({getAmount}) {
  return (
    <div className="calculator__amount" id="calculator__amount">
      <input
        onInput={(e) => getAmount(e.target.value)}
        type="number"
        min="0"
        className="calculator__provided--amount"
        id="calculator__provided--amount"
      />
    </div>
  );
}

export default CalculatorAmount;
