import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.onclick} className={props.classess}>
      {props.text}
    </button>
  );
};

export default Button;
