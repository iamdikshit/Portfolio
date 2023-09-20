import { Button } from "@/components/ui";
import PortableText from "react-portable-text";
import Image from "next/image";
import Link from "next/link";
const Card = (props) => {
  return (
    <div
      className={`card grid grid-cols-1 sm:grid-cols-2  gap-16 mt-16 px-8 pt-8 md:px-16 md:pt-16  rounded-lg ${props.classess} `}
    >
      {/* Left section of card */}
      <div className="left-card pb-8 flex flex-col items-center justify-center sm:items-start gap-4">
        <h1 className="text-xl md:text-2xl lg:text-4xl  font-bold text-center md:text-start">
          {props.data?.title}
        </h1>
        <details>
          <summary>Description</summary>
          <PortableText content={props.data?.description} />
        </details>

        <div className="group-btn flex gap-8">
          <Link href={props?.data?.github} target="_blank">
            <Button
              text={"Github"}
              classess={
                "text-sm lg:text-base px-8 py-4 text-white font-bold bg-black border-solid border-2 border-black rounded-xl hover:text-black hover:bg-transparent transition-all ease-in-out  "
              }
            />
          </Link>

          <Link href={`${props?.data?.live}`} target="_blank">
            <Button
              text={"Live Demo"}
              type={"special"}
              classess={
                "text-sm lg:text-base px-8 py-4 text-black font-bold border-solid border-2 border-black rounded-xl "
              }
              divClass={"bg-black"}
            />
          </Link>
        </div>
      </div>
      {/* Right section of card */}
      <div className="right-card mx-auto flex flex-col items-center justify-center">
        <Image
          src={props.data?.image}
          width={500}
          height={600}
          className="w-[60%] h-auto  mx-auto"
          // style={{ width: "60%", height: "auto" }}
          // layout="responsive"

          alt={props.data.name}
        />
      </div>
    </div>
  );
};

export default Card;
