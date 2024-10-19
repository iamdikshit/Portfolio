import { Blob, Button } from "../ui";
import Link from "next/link";
const Connect = ({ data }) => {
  return (
    <section className="px-4 container mx-auto relative md:px-16 lg:px-28 mt-36 ">
      <Blob
        classess={
          "bg-pink-300 opacity-70 top-0 left-96  animate-blob-bounce blur-2xl "
        }
      />
      <Blob
        classess={
          "bg-yellow-300 opacity-70 top-24 left-56 animate-blob-bounce blur-2xl "
        }
      />

      <Blob
        classess={
          "bg-blue-300 opacity-70 top-0 left-20 animate-blob-bounce blur-2xl "
        }
      />
      <div className="flex flex-col mt-24 items-center justify-center gap-8 lg:gap-16 px-8 sm:px-16 md:px-24 lg:px-44">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center leading-tight p-2 ">
          Have a project in mind? Let’s get to work.👋📫
        </h1>
        <Link
          href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${data?.email}`}
          target="_blank"
        >
          <Button
            text={"Say Hello"}
            type={"special"}
            classess={
              "text-sm lg:text-base px-8 py-4 text-black font-bold border-solid border-2 border-black rounded-xl "
            }
            divClass={"bg-black"}
          />
        </Link>
      </div>
    </section>
  );
};

export default Connect;
