import { Blob, ServiceCard } from "../ui";
import React from "react";

const Service = () => {
  return (
    <section className="px-4 relative md:px-16 lg:px-28 mx-0 mt-36 ">
      <Blob
        classess={
          "bg-blue-200 opacity-70 top-0 -left-20 animate-blob-bounce blur-2xl "
        }
      />
      <h1 className="text-2xl md:text-3xl font-semibold uppercase">
        What I do?
      </h1>
      <p className="text-sm md:text-base text-gray-600 mt-6">
        "Crafting Tailored Solutions for Your Digital Needs"
      </p>
      <div className="project-cards mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <ServiceCard
          title={"Web Design"}
          icon="design"
          description={
            "Crafting captivating web designs that blend aesthetics with seamless functionality, ensuring your online presence shines."
          }
        />
        <ServiceCard
          title={"Backend Application"}
          icon="backend"
          description={
            "Empowering your digital infrastructure with robust backend solutions, we architect and optimize server-side logic for scalable and efficient performance."
          }
        />
        <ServiceCard
          title={"API Development"}
          icon="api"
          description={
            "Building bridges between applications with precision-crafted APIs that streamline data flow and enhance connectivity, fostering seamless interactions across your digital ecosystem."
          }
        />
      </div>
    </section>
  );
};

export default Service;
