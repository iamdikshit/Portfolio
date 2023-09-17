import Image from "next/image";
import { images } from "@/public/images";
import { IoApps, IoCloseCircleOutline } from "react-icons/io5";
const Nav = () => {
  return (
    <header className="h-20 md:h-24 flex items-center justify-between bg-white px-4 md:px-8 lg:px-16 ">
      <Image src={images.logo1} width={200} height={100} />
      <nav className="hidden">
        <ul className="hidden md:flex items-center gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Resume</li>
        </ul>
      </nav>
      <button>
        <IoApps className="w-6 h-6" />
        <IoCloseCircleOutline className="w-6 h-6 hidden" />
      </button>
    </header>
  );
};

export default Nav;
