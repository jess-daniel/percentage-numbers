import { useState } from "react";
import TextField from "@mui/material/TextField";
import CustomButton from "./CustomButton";

function Calculator({ setNumArr }) {
  const [num, setNum] = useState(1);

  const changeHandler = (e) => {
    setNum(e.target.value);
  };

  const addNumber = (e) => {
    if (isNaN(Number(num))) return;
    setNumArr((prev) => [...prev, num]);
  };

  const clear = (e) => {
    setNumArr([]);
    setNum(1);
  };

  const validate = (e) => {
    if (isNaN(Number(num))) {
      return true;
    } else if (Number(num) < 1 || Number(num) > 18) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ width: "50%", margin: "20px auto" }}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={num}
          onChange={changeHandler}
          error={validate()}
          helperText="Input a number between 1 and 12."
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          margin: "0 auto",
        }}
      >
        <CustomButton text={"Add Number"} clickHandler={addNumber} />
        <CustomButton text={"Clear"} clickHandler={clear} />
      </div>
    </div>
  );
}

export default Calculator;
