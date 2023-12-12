import Image from "next/image";

const SmallCards = ({ position, img, alt, text }) => {
  return (
    <div
      className={`absolute skillcard flex items-center justify-center p-1 border bg-white  rounded-md shadow-lg ${position}`}
    >
      <Image
        src={img}
        width={30}
        height={30}
        alt={alt ? alt : "small card image"}
      />
      <h1 className="text-sm">{text}</h1>
    </div>
  );
};

export default SmallCards;
