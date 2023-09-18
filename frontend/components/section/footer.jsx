import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="px-4 relative grid grid-cols-1 gap-8 sm:grid-cols-2 py-24  md:px-16 lg:px-28 mx-0 mt-36">
      <div className="social">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <IoLogoInstagram className="w-8 h-8 text-gray-600 cursor-pointer" />
          </li>
          <li>
            <IoLogoLinkedin className="w-8 h-8 text-gray-600 cursor-pointer" />
          </li>
          <li>
            <IoLogoYoutube className="w-8 h-8 text-gray-600 cursor-pointer" />
          </li>
        </ul>
      </div>
      <div className="copyright ">
        <p className="text-sm md:text-base text-gray-600">
          {`Copyright © ${new Date().getFullYear()}. Designed by Dikshit Bhardwaj All rights reserved.`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
