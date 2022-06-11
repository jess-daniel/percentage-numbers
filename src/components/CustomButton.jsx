import Button from "@mui/material/Button";

function CustomButton({ text, clickHandler }) {
  return (
    <Button variant="contained" onClick={clickHandler}>
      {text}
    </Button>
  );
}

export default CustomButton;
