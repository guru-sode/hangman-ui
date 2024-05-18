import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const spinnerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)"
}

export default function Spinner() {
  return (
    <div style={spinnerStyle}>
      <CircularProgress size={100}/>
    </div>
  );
}