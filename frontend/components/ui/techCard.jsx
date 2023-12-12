import React from "react";

const TechCard = ({ technologies }) => {
  return (
    <>
      {technologies
        ? technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-[.5rem] md:text-xs text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
            >
              {tech}
            </span>
          ))
        : "Technology : NA"}
    </>
  );
};

export default TechCard;
