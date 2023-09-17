import React from "react";

const Blob = (props) => {
  return (
    <div
      className={`absolute h-96 w-96 rounded-full    mix-blend-multiply -z-20 ${props.classess}`}
    ></div>
  );
};

export default Blob;
