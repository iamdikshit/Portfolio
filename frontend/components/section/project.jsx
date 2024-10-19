import React from "react";
import { Card, Button, Blob } from "@/components/ui";
import Link from "next/link";
const Project = ({ projectdata }) => {
  return (
    <section className="px-4 container mx-auto relative md:px-16 lg:px-28  mt-36 ">
      <Blob
        classess={
          "bg-pink-300 opacity-70 top-0 -left-20 animate-blob-bounce blur-2xl "
        }
      />
      <h1 className="text-2xl md:text-3xl font-semibold uppercase">Projects</h1>
      <p className="text-sm md:text-base text-gray-600 mt-6">
        "Web Development Adventures: A Glimpse into My Creative World"
      </p>
      <div className="project-cards mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-2 xl:gap-y-16 ">
        {projectdata.map((project, index) => (
          <Card
            key={index}
            classess={`${
              index === 0
                ? "bg-green-400"
                : index === 1
                ? "bg-blue-400"
                : "bg-yellow-400"
            }`}
            data={{
              image: project?.image,
              title: project?.name,
              description: project.description,
              summary: project?.summary,
              technology: project.technology,
              slug: project?.slug,
              live: project?.live,
              github: project?.github,
            }}
          />
        ))}
      </div>
      <div className="mt-16 flex items-center justify-center">
        <Link href={"/project/all/"}>
          <Button
            text={"View all"}
            classess={
              "text-sm lg:text-base px-8 py-4 text-white font-bold bg-black border-solid border-2 border-black rounded-xl hover:text-black hover:bg-transparent transition-all ease-in-out  "
            }
          />
        </Link>
      </div>
    </section>
  );
};

export default Project;

/*
{projectdata.map((project, index) => (
          <Card
            key={index}
            classess={`${
              index === 0
                ? "bg-green-400"
                : index === 1
                ? "bg-blue-400"
                : "bg-yellow-400"
            }`}
            data={{
              image: project?.image,
              title: project?.name,
              description: project.description,
              slug: project?.slug,
              live: project?.live,
              github: project?.github,
            }}
          />
        ))}

*/
