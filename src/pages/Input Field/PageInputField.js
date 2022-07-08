import React, { useState } from "react";
import InputField from "../../components/Input Field/InputField";
import "./PageInputField.css";

export default function PageInputField() {
  const [textfield, setTextfield] = useState("");
  return (
    <InputField
      id="textfield"
      placeholder="text"
      value={textfield}
      onChange={(event) => setTextfield(event.target.value)}
    >
      Username
    </InputField>
  );
}
