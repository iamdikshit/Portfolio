// import Image from "next/image";
import { Blob, Card } from "@/components/ui";
import { images } from "@/public/images";
export default function Project() {
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
      <div className="project-cards mt-6">
        <Card
          classess={"bg-green-400"}
          data={{
            image: images.fitness,
            title: "Fitness Freek e-commerce website",
            description: "Ecommerce website",
          }}
        />
        <Card
          classess={"bg-blue-400"}
          data={{
            image: images.fitness,
            title: "Fitness Freek e-commerce website",
            description: "Ecommerce website",
          }}
        />
        <Card
          classess={"bg-yellow-400"}
          data={{
            image: images.movie,
            title: "Movie mania for blockbuster movies",
            description: "Entertainment website",
          }}
        />
      </div>
    </section>
  );
}
