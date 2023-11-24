import React from "react";

const TechCard = ({ technologies }) => {
  return (
    <>
      {technologies
        ? technologies.map((tech, index) => (
            <span
              key={index}
              className="text-[12px] self-center  px-2 bg-green-600 text-white rounded-full"
            >
              {tech}
            </span>
          ))
        : "Technology : NA"}
    </>
  );
};

export default TechCard;
