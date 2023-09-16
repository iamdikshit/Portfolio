import Image from "next/image";
import { images } from "@/public/images";

const Nav = () => {
  return (
    <header className="h-28 flex items-center justify-between bg-white px-4 md:px-8 lg:px-16 ">
      <Image src={images.logo1} width={200} height={100} />
      <nav>
        <ul className="hidden md:flex items-center gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Resume</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
