import React from "react";

function Button(props) {
  return (
    <button className="form-field" type="submit">
      {props.children}
    </button>
  );
}

export default Button;
