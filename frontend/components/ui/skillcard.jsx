import React from "react";
import Image from "next/image";
const SkillCard = (props) => {
  return (
    <div
      className={`flex items-center justify-center gap-1 p-2 ${props?.class}`}
    >
      <Image
        src={props?.image}
        width={props.width}
        height={props.height}
        alt={props.text}
      />
      <h1 className={`text-sm`}>{props.text}</h1>
    </div>
  );
};

export default SkillCard;
