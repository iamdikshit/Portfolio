import { Blob } from "../ui";

const AboutSection = () => {
  return (
    <section className="px-4 container mx-auto relative md:px-16 lg:px-28  mt-36 ">
      <Blob
        classess={
          "bg-red-200 opacity-70 top-0 left-96  animate-blob-bounce blur-2xl "
        }
      />
      <Blob
        classess={
          "bg-yellow-200 opacity-70 top-24 left-56 animate-blob-bounce blur-2xl "
        }
      />

      <Blob
        classess={
          "bg-blue-200 opacity-70 top-0 left-20 animate-blob-bounce blur-2xl "
        }
      />
      <h1 className="text-2xl md:text-3xl font-semibold uppercase">About me</h1>
      <p className="text-sm md:text-base text-gray-600 mt-6">
        "Discover the Mind Behind the Code: My Journey in Web Development"
      </p>

      <h1 className="mt-8 text-base md:text-lg">
        As a highly skilled web developer with two years of experience, I have
        honed my skills in web design, Javascript, Node.js, Express, React.js,
        and Python. I am an expert in creating responsive and user-friendly
        websites that are visually appealing and efficient. With my extensive
        knowledge of front-end and back-end web development, I am able to
        seamlessly integrate all the necessary components to create a smooth and
        engaging user experience. Whether it's developing a custom web
        application, building an e-commerce site, or designing a responsive
        website, I have the skills and expertise to get the job done. My
        experience in the industry has taught me the importance of staying
        up-to-date with the latest trends and technologies. As a result, I am
        constantly learning and expanding my knowledge base to ensure that my
        work is always innovative and of the highest quality. If you're looking
        for a skilled and experienced web developer who can bring your ideas to
        life, please don't hesitate to reach out. I would be honored to work
        with you on your next project.
      </h1>
    </section>
  );
};

export default AboutSection;
