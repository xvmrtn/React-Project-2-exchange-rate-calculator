import React from "react";

function CalculatorCurrency({getCurrency}) {
  return (
    <div className="calculator__currency" id="calculator__currency">
      <select
        onChange={(e) => getCurrency(e.target.value)}
        name="calculator__currency--id"
        className="calculator__currency--id"
        id="calculator__currency--id"
      >
        <option value="EUR">EUR</option>
        <option value="CHF">CHF</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
}

export default CalculatorCurrency;
