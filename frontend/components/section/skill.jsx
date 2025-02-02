import React from "react";
import { Blob, SkillCard } from "../ui";
import { images } from "@/public/images";
import Image from "next/image";
const Skill = ({ skillData }) => {
  return (
    <section className="px-4 container mx-auto relative md:px-16 lg:px-28 mt-36">
      <Blob
        classess={
          "bg-pink-400 opacity-70 top-20 left-20 animate-blob-bounce blur-2xl  "
        }
      />
      <Blob
        classess={
          "bg-yellow-400 opacity-70 top-20 left-72 animate-blob-bounce blur-2xl "
        }
      />
      <Blob
        classess={
          "bg-green-400 opacity-70 top-44 left-44 animate-blob-bounce delay-150  blur-2xl "
        }
      />
      <h1 className="text-2xl md:text-3xl font-semibold uppercase">Skills</h1>
      <p className="text-sm md:text-base text-gray-600 mt-6">
        "Coding, Design, and Beyond: My Versatile Skill Set"
      </p>
      <div className="skill-innerSection grid grid-cols-1 gap-8 md:grid-cols-2 mt-8 ">
        <div className="skill-cards mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2  ">
          {skillData.map((skill, index) => (
            <SkillCard
              key={index}
              class={"bg-white  rounded-md"}
              width={"50"}
              height={"50"}
              image={skill.image}
              text={skill.skill}
            />
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center">
          <p className="text-sm relative md:text-base lg:text-lg text-gray-600">
            <span className="md:absolute static -top-5 -left-6 hidden">
              <Image
                src={images.quotation}
                width={30}
                height={30}
                alt={"quotation"}
              />
            </span>
            <span className="text-4xl font-bold text-gray-600">"</span>
            As a Full Stack Web Developer, I possess a comprehensive skill set
            encompassing the entire web development spectrum. I excel in both
            frontend and backend development, creating responsive user
            interfaces with HTML, CSS, and JavaScript, as well as architecting
            server-side logic with Node.js. JavaScript is my forte, allowing me
            to craft interactive and dynamic web experiences using libraries
            like React and Nextjs framework on the frontend, and Node.js on the
            backend. Additionally, my keen eye for web design principles ensures
            that my creations not only function flawlessly but also delight
            users with visually appealing and intuitive interfaces, showcasing
            the harmonious fusion of design aesthetics with robust development
            capabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skill;
