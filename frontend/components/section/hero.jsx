"use client";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { images } from "@/public/images";
import { SmallCards, Button, Blob, Loader } from "../ui";
// import { urlFor } from "@/utils/client";
import { useState } from "react";
import { saveAs } from "file-saver";
import Link from "next/link";

const Hero = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const saveFile = () => {
    setIsLoading(true);
    saveAs(data?.resume, "dikshitresume.pdf");
    setIsLoading(false);
  };
  return (
    <section className="hero relative px-4 md:px-16 lg:px-28 mt-32 ">
      {isLoading && <Loader />}
      <div className="inner-herosection relative grid grid-cols-1 gap-44 md:grid-cols-2 md:gap-12 mx-auto mt-24">
        <Blob
          classess={
            "bg-green-200 opacity-70 -top-28 -left-20 animate-blob-bounce blur-2xl "
          }
        />

        {/* // left section */}
        <div className="left-section flex flex-col items-center justify-center lg:items-start ">
          <h1 className="text-4xl lg:text-7xl font-bold mb-4 ">👋 Hey! I'm</h1>

          <TypeAnimation
            className="text-3xl  lg:text-5xl font-bold bg-gradient-to-b from-[#5b1aaa] to-[#00d4ff] bg-clip-text text-transparent pb-2  "
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Full Stack Develper.",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Code Creator.",
              1000,
              "Problem Solver.",
              1000,
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />

          <p className="mt-6 text-sm lg:text-lg text-gray-600 text-center lg:text-left ">
            "Let's work together to transform your vision into a digital
            reality. Get in touch today!"
          </p>
          <div className="hero-btn mt-8 flex items-center gap-4">
            <Link
              href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${data?.email}`}
              target="_blank"
            >
              <Button
                text={"Say Hello"}
                icon={"👋"}
                classess={
                  "text-sm lg:text-base px-8 py-4 text-white font-bold bg-black border-solid border-2 border-black rounded-xl hover:text-black hover:bg-white transition-all ease-in-out  "
                }
              />
            </Link>
            <Button
              onClick={saveFile}
              text={"Download CV"}
              type={"special"}
              classess={
                "text-sm lg:text-base px-8 py-4 text-black font-bold border-solid border-2 border-black rounded-xl "
              }
              divClass={"bg-black"}
            />
          </div>
        </div>
        {/* // Right section */}
        <div className="left-right   ">
          <div className="inner-right relative flex items-center justify-center">
            <Blob classess={"bg-orange-300 blur-xl animate-blob  "} />
            <Image
              className="rounded-full shadow-2xl"
              src={data?.image}
              width={350}
              height={350}
              alt={data.name ? data.name : "user logo"}
            />

            <SmallCards
              position={"-top-10 left-24 sm:left-36 md:left-24 lg:left-44  "}
              img={images.htmlpic}
              text={"HTML"}
              alt={"HTML"}
            />

            <SmallCards
              position={
                "top-10 left-1 sm:left-20 md:left-1 lg:left-20 xl:left-2 "
              }
              img={images.CSSLogo}
              text={"CSS"}
              alt={"CSS"}
            />

            <SmallCards
              position={
                "-top-6 right-1 sm:right-24 md:right-1 lg:right-48 lg:-top-10 xl:right-24 xl:-top-10"
              }
              img={images.Jslogo}
              text={"Javascript"}
              alt={"Javacript logos"}
            />
            <SmallCards
              position={
                "top-16 right-1 sm:right-16 md:right-1 lg:right-16 xl:right-2 "
              }
              img={images.reactlogo}
              text={"ReactJs"}
              alt={"React logos"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
