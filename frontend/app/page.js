// import Image from "next/image";
import { Hero, Skill, Project, Footer } from "../components/section";
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Project />
        <Skill />
        <Footer />
      </main>
    </>
  );
}
