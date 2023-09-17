import React from "react";
import { Card, Button, Blob } from "@/components/ui";
const Project = () => {
  return (
    <section className="px-4 relative md:px-16 lg:px-28 mx-0 mt-36">
      <Blob
        classess={
          "bg-red-200 opacity-70 top-0 -left-20 animate-blob-bounce blur-2xl "
        }
      />
      <h1 className="text-2xl md:text-3xl font-semibold uppercase">Projects</h1>
      <p className="text-sm md:text-base text-gray-600 mt-6">
        "Web Development Adventures: A Glimpse into My Creative World"
      </p>
      <div className="project-cards mt-6">
        <Card classess={"bg-green-400"} />
        <Card classess={"bg-blue-400"} />
        <Card classess={"bg-yellow-400"} />
      </div>
      <div className="mt-8 flex items-center justify-center">
        <Button
          text={"View all"}
          classess={
            "text-sm lg:text-base px-8 py-4 text-white font-bold bg-black border-solid border-2 border-black rounded-xl hover:text-black hover:bg-transparent transition-all ease-in-out  "
          }
        />
      </div>
    </section>
  );
};

export default Project;
