// import Image from "next/image";
import { Hero, Skill, Project } from "../components/section";
import { client } from "@/utils/client";
async function getHeroData() {
  const query = `*[_type=="about" && isactive==true ]{
  name,
  "image":images.asset->url,
  "resume":resume.asset->url
}`;

  const data = await client.fetch(query, { cache: "force-cache" });

  return {
    data,
  };
}
export default async function Home() {
  const { data } = await getHeroData();
  const { projectdata } = await getProject();

  return (
    <>
      <main>
        <Hero data={data[0]} />
        <Skill />
        <Project projectdata={projectdata} />
      </main>
    </>
  );
}

async function getProject() {
  const query = `*[_type=="project" && isactive==true][0...3]{
  name,
  "slug":slug.current,
  description,
    live,
    github,
    "image":media.images[0].asset->url,
    }  `;

  const projectdata = await client.fetch(query);

  return {
    projectdata,
  };
}
