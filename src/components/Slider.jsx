import React from "react";

function Slider({ numArr }) {
  return (
    <div>
      <h3>Number History</h3>
      <div
        style={{
          overflow: "auto",
          whiteSpace: "nowrap",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {numArr.map((num, i) => (
          <div key={i}>
            <p
              style={{
                display: "inline-block",
                textAlign: "center",
                padding: "14px",
              }}
            >
              {num}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
