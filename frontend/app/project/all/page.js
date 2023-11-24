// import Image from "next/image";
import { Blob, Card } from "@/components/ui";

import { client } from "@/utils/client";
export default async function Project() {
  const { projectdata } = await getProject();
  return (
    <section className="px-4 relative md:px-16 lg:px-28 mx-0 mt-36 ">
      <Blob
        classess={
          "bg-red-200 opacity-70 top-0 -left-20 animate-blob-bounce blur-2xl "
        }
      />
      <h1 className="text-2xl md:text-3xl font-semibold uppercase">Projects</h1>
      <p className="text-sm md:text-base text-gray-600 mt-6">
        "Web Development Adventures: A Glimpse into My Creative World"
      </p>
      <div className="project-cards mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 ">
        {projectdata.map((project, index) => (
          <Card
            key={index}
            classess={`${
              (index + 1) % 2 == 0
                ? "bg-blue-400"
                : (index + 1) % 3 == 0
                ? "bg-yellow-400"
                : "bg-green-400"
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
    </section>
  );
}

async function getProject() {
  const query = `*[_type=="project" && isactive==true]{
  name,
  "slug":slug.current,
   summary,
   technology,
  description,
    live,
    github,
    "image":media.images[0].asset->url,
    }  `;

  const projectdata = await client.fetch(query, { cache: "force-cache" });

  return {
    projectdata,
  };
}
