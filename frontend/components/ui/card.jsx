import { Button } from "@/components/ui";
import { images } from "@/public/images";
import Image from "next/image";
const Card = (props) => {
  return (
    <div
      className={`card grid grid-cols-1 sm:grid-cols-2  gap-16 mt-16 px-8 pt-8 md:px-16 md:pt-16  rounded-lg ${props.classess} `}
    >
      {/* Left section of card */}
      <div className="left-card flex flex-col items-center justify-center sm:items-start gap-4">
        <h1 className="text-xl md:text-2xl lg:text-4xl  font-bold text-center md:text-start">
          Fitness Freek e-commerce website
        </h1>
        <p className="text-base md:text-lg text-gray-600">E-commerce website</p>
        <div className="group-btn flex gap-8">
          <Button
            text={"View"}
            classess={
              "text-sm lg:text-base px-8 py-4 text-white font-bold bg-black border-solid border-2 border-black rounded-xl hover:text-black hover:bg-transparent transition-all ease-in-out  "
            }
          />
          <Button
            text={"Live Demo"}
            type={"special"}
            classess={
              "text-sm lg:text-base px-8 py-4 text-black font-bold border-solid border-2 border-black rounded-xl "
            }
            divClass={"bg-black"}
          />
        </div>
      </div>
      {/* Right section of card */}
      <div className="right-card flex flex-col items-center justify-center">
        <Image
          src={images.fitness}
          style={{ width: "70%", height: "auto" }}
          alt="Fitness"
        />
      </div>
    </div>
  );
};

export default Card;
