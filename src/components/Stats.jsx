import { useState, useEffect } from "react";
function Stats({ percentageHash }) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(Object.entries(percentageHash).sort((a, b) => a[0] - b[0]));
  }, [percentageHash]);

  return (
    <div>
      <h3>Stats</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {arr.map((percent, i) => (
          <div
            style={{
              textAlign: "left",
              padding: "0 10px",
            }}
            key={i}
          >
            <div>
              <p>Number: {percent[0]}</p>
              <p>Percent: {percent[1]}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
