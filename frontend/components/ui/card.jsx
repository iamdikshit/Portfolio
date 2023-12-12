import { Button, TechCard } from "@/components/ui";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
const Card = (props) => {
  return (
    <div className={`card-1 shadow-md bg-white `}>
      <div className="inner-card h-full px-2 flex gap-8 flex-col xl:flex-row xl:flex-grow xl:gap-2  ">
        <div className="card-pic mx-auto  w-full h-full  xl:w-[40rem] xl:h-auto m-2  overflow-hidden relative ">
          <div className="group  absolute w-full h-full bg-transparent top-0 left-0 ">
            <div className="w-full h-full bg-black/50 backdrop-opacity-10 -translate-x-[100%] group-hover:translate-x-[0] transition-all ease-in duration-150 flex items-center justify-center">
              <Link href={`/project/${props.data.slug}`}>
                <div className="group2 cursor-pointer  border-2 border-white rounded-full  p-2 bg-transparent">
                  <MdOutlineRemoveRedEye className="text-white cursor-pointer w-8 h-8  z-50  " />
                </div>
              </Link>
            </div>
          </div>
          <Image
            src={props.data?.image}
            className="group w-full h-full object-cover  "
            width={300}
            height={100}
            alt={props.data.name ? props.data.name : "project image"}
          />
        </div>
        <div className="card-details p-4 flex flex-col   gap-6">
          <Link href={`/project/${props.data.slug}`}>
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center xl:text-start">
              {props.data?.title}
            </h1>
          </Link>
          {/* Technology used */}

          <div className="flex items-center justify-center xl:justify-start flex-wrap gap-2 mt-auto">
            <TechCard technologies={props.data.technology} />
          </div>

          {/* description */}
          <div className="description mt-auto">
            <p className="text-sm xl:text-base text-gray-900 text-center xl:text-start">
              {props.data?.summary?.slice(0, 100)}...
            </p>
          </div>

          <div className="group-btn flex gap-8 mb-8 mt-auto items-center justify-center xl:justify-start ">
            {props.data.github && (
              <Link href={props?.data?.github} target="_blank">
                <Button
                  text={"Github"}
                  classess={
                    "text-sm lg:text-base px-4 py-2 text-white font-bold bg-black border-solid border-2 border-black rounded-xl hover:text-black hover:bg-transparent transition-all ease-in-out  "
                  }
                />
              </Link>
            )}

            {props.data.live && (
              <Link href={`${props?.data?.live}`} target="_blank">
                <Button
                  text={"Live Demo"}
                  type={"special"}
                  classess={
                    "text-sm lg:text-base px-4 py-2 text-black font-bold border-solid border-2 border-black rounded-xl "
                  }
                  divClass={"bg-black"}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
