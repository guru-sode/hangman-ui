import React from 'react';
import OtpInput from 'react-otp-input';

export default function OtpTypeInput({value = "", length = 0}) {
  return (
    <OtpInput
      value={value}
      numInputs={length}
      renderSeparator={<span style={{padding: '5px'}}></span>}
      inputStyle={{
        border: "1px solid transparent",
        borderRadius: "8px",
        width: "54px",
        height: "54px",
        fontSize: "24px",
        fontWeight: "400",
        caretColor: "blue"
      }}
      focusStyle={{
        border: "1px solid #CFD3DB",
        outline: "none"
      }}
      renderInput={(props) => <input {...props} />}
    />
  );
}