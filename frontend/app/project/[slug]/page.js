"use client";
import { ProjectDetail } from "@/components/section";
import { client } from "@/utils/client";
export default async function DetailedProject({ params }) {
  const slug = params.slug;
  const query = `*[_type=="project" && slug.current=="${slug}" &&  isactive==true]`;
  const projectdata = await client.fetch(query);
  return (
    <>
      <ProjectDetail data={projectdata[0]} />
    </>
  );
}
