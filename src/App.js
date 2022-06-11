import { useState, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Stats from "./components/Stats";
import CalculatePercentage from "./utils/CalculatePercentage";
import Slider from "./components/Slider";

function App() {
  const [numArr, setNumArr] = useState([]);
  const percentageHash = useMemo(() => CalculatePercentage(numArr), [numArr]);
  return (
    <div className="App">
      <Header />
      <Slider numArr={numArr} />
      <Stats percentageHash={percentageHash} />
      <Calculator setNumArr={setNumArr} />
    </div>
  );
}

export default App;
