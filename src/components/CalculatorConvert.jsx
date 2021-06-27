import React from "react";

function CalculatorConvert({onBtnClick}) {
  return (
    <div className="calculator__convert" id="calculator__convert">
      <button
        onClick={onBtnClick}
        className="calculator__convert--btn"
        id="calculator__convert--btn"
      >
        Convert
      </button>
    </div>
  );
}

export default CalculatorConvert;
