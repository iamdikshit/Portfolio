import React from "react";

const Button = (props) => {
  if (props.type === "special")
    return (
      <button
        className={`group relative overflow-hidden flex items-center justify-center border-2 bg-transparent  font-bold ${props.classess}`}
      >
        <div
          className={`absolute translate-y-48   h-72 w-72 rounded-full transition-all duration-[500ms] ease-out group-hover:-translate-y-0 ${props.divClass}  `}
        ></div>
        <span className={`relative group-hover:text-white`}>{props.text}</span>
      </button>
    );
  else
    return (
      <button onClick={props.onclick} className={props.classess}>
        {props.text}
      </button>
    );
};

export default Button;
