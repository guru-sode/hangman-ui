import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const alertStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)"
}

export default function Banner(props) {
  const { severity = "", message = "" } = props;
  
  return (
    <div style={alertStyle}>
      <Alert severity={severity}>
        <AlertTitle>{severity.toUpperCase()}</AlertTitle>
        {message}
      </Alert>
    </div>
  );
}