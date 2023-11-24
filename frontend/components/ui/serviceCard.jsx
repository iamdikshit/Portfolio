import React from "react";
import { MdDesignServices, MdOutlineCodeOff, MdApi } from "react-icons/md";
const ServiceCard = ({ title, description, icon }) => {
  const iconStyle =
    "w-6 h-6 md:w-12 md:h-12 text-yellow-400 group-hover:text-white";
  return (
    <div className=" group flex flex-col gap-4 hover:bg-yellow-400 transition-all ease-in-out duration-300  p-8 shadow-lg cursor-pointer  rounded-sm items-center">
      {icon == "design" ? (
        <MdDesignServices className={`${iconStyle}`} />
      ) : icon == "backend" ? (
        <MdOutlineCodeOff className={`${iconStyle}`} />
      ) : icon == "api" ? (
        <MdApi className={`${iconStyle}`} />
      ) : (
        ""
      )}

      <h1 className="text-xl text-center sm:text-2xl md:text-3xl font-bold group-hover:text-white">
        {title}
      </h1>
      <div className="text-center mt-4">
        <p className="text-sm sm:text-base text-gray-700 group-hover:text-white ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
