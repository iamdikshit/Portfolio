import React from "react";
import Image from "next/image";
import { TechCard, Button } from "../ui";
import { urlFor } from "@/utils/client";
import Link from "next/link";
import PortableText from "react-portable-text";
import { Blob } from "../ui";
const ProjectDetail = ({ data }) => {
  let img;
  if (data.media.images.length > 1) {
    img = urlFor(data.media.images[1] && data.media.images[1]).url();
  } else {
    img = urlFor(data.media.images[0] && data.media.images[0]).url();
  }

  return (
    <section className="px-4 container mx-auto relative md:px-16 lg:px-28 mt-24  ">
      <Blob
        classess={
          "bg-red-200 opacity-70 top-0 right-96  animate-blob-bounce blur-2xl "
        }
      />
      <Blob
        classess={
          "bg-yellow-200 opacity-70 top-24 right-56 animate-blob-bounce blur-2xl "
        }
      />

      <Blob
        classess={
          "bg-blue-200 opacity-70 top-0 right-20 animate-blob-bounce blur-2xl "
        }
      />
      <h1 className="text-2xl md:text-3xl font-semibold uppercase">Project</h1>
      <p className="text-sm md:text-base text-gray-600 mt-6">
        "Web Development Adventures: A Glimpse into My Creative World"
      </p>
      <h1 className="font-medium  text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-16">
        {data?.name}
      </h1>
      <div className="project-detail mt-16">
        <div className="top-section grid md:grid-cols-5 gap-4">
          <div className="image-section w-full h-96 md:col-span-3 shadow-md">
            <Image
              src={img}
              className="w-full h-full object-cover "
              width={900}
              height={500}
              alt={data.name ? data.name : "project image"}
            />
          </div>
          <div className="shortDetail-section shadow-md md:col-span-2 p-4 flex flex-col gap-8">
            <table className="table-auto w-full">
              <tbody className="border">
                <tr className="border-b-2">
                  <td className="text-base p-4">Role</td>
                  <td className="text-base p-4 border-l-2">
                    {data?.role ? data.role : "NA"}
                  </td>
                </tr>
                <tr className="border-b-2">
                  <td className="text-base p-4">Start Date</td>
                  <td className="text-base p-4 border-l-2">
                    {data?.duration ? data.duration?.start : "NA"}
                  </td>
                </tr>
                <tr className="border-b-2">
                  <td className="text-base p-4">End Date</td>
                  <td className="text-base p-4 border-l-2">
                    {data.duration?.present
                      ? "Currently Working"
                      : data.duration.end}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex items-center justify-center md:justify-start flex-wrap gap-2 mt-auto">
              <TechCard technologies={data?.technology} />
            </div>
            <div className="group-btn flex gap-8 mb-8 mt-auto items-center justify-center xl:justify-start">
              {data.github && (
                <Link href={data.github} target="_blank">
                  <Button
                    text={"Github"}
                    classess={
                      "text-sm lg:text-base px-4 py-2 text-white font-bold bg-black border-solid border-2 border-black rounded-xl hover:text-black hover:bg-transparent transition-all ease-in-out  "
                    }
                  />
                </Link>
              )}

              {data.live && (
                <Link href={data.live} target="_blank">
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
        <div className="bottom-section mt-24 flex flex-col gap-8">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            Description
          </h1>
          <div>
            <PortableText content={data?.description} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
