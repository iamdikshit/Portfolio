"use client";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { images } from "@/public/images";
import { SmallCards, Button } from "../ui";

const Hero = () => {
  return (
    <section className="hero px-4 md:px-8 lg:px-16">
      <div className="inner-herosection grid grid-cols-1 gap-24  md:grid-cols-2 md:gap-12 mx-auto mt-24">
        {/* // left section */}
        <div className="left-section flex flex-col items-center justify-center lg:items-start ">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-red-900 to-pink-500 bg-clip-text text-transparent py-2">
            Hey! I'm
          </h1>
          <br />
          <TypeAnimation
            className="text-3xl  lg:text-5xl font-bold bg-gradient-to-b from-[#5b1aaa] to-[#00d4ff] bg-clip-text text-transparent pb-2  "
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Full Stack Develper.",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Web Designer.",
              1000,
              "Javascript Developer.",
              1000,
            ]}
            wrapper="span"
            speed={10}
            style={{}}
            repeat={Infinity}
          />
          <div className="hero-btn mt-8 flex items-center gap-4">
            <Button
              text={"Resume"}
              classess={
                "text-base px-8 py-2 text-white bg-black border-solid border-2 border-black rounded-full "
              }
            />
            <Button
              text={"Hire me"}
              classess={
                "text-base px-8 py-2 text-black border-solid border-2 border-black rounded-full "
              }
            />
          </div>
        </div>
        {/* // Right section */}
        <div className="left-right   ">
          <div className="inner-right relative flex items-center justify-center">
            <Image
              className="rounded-full shadow-2xl border "
              src={images.profile}
              width={350}
              height={350}
              alt="Profile"
            />

            <SmallCards
              position={"-top-10 left-24 sm:left-36 md:left-24 lg:left-44"}
              img={images.htmlpic}
              text={"HTML"}
              alt={"HTML"}
            />

            <SmallCards
              position={"top-10 left-1 sm:left-20 md:left-1 lg:left-20"}
              img={images.CSSLogo}
              text={"CSS"}
              alt={"CSS"}
            />

            <SmallCards
              position={
                "-top-6 right-1 sm:right-24 md:right-1 lg:right-48 lg:-top-10"
              }
              img={images.Jslogo}
              text={"Javascript"}
              alt={"Javacript logos"}
            />
            <SmallCards
              position={"top-16 right-1 sm:right-16 md:right-1 lg:right-16"}
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
