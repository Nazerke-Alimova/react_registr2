import React from "react";
import "../Input/Input.css"

function Input(props) {
  return (
    <input
      onChange={props.onChange}
      value={props.value}
      id={props.id}
      className="form-field"
      type="text"
      placeholder={props.placeholder}
      name={props.name}
    />
  );
}

export default Input;
