import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io5";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="px-4 relative grid grid-cols-1  gap-8  py-24  md:px-16 lg:px-28 mx-0 mt-36">
      <div className="social">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link
              href={
                "https://instagram.com/dikshitbhardwaj.in?igshid=MmVlMjlkMTBhMg==https://instagram.com/dikshitbhardwaj.in?igshid=MmVlMjlkMTBhMg=="
              }
              target="_blank"
            >
              <IoLogoInstagram className="w-8 h-8 text-gray-600 cursor-pointer" />
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.linkedin.com/in/dikshit-bhardwaj-8678b2191/"}
              target="_blank"
            >
              <IoLogoLinkedin className="w-8 h-8 text-gray-600 cursor-pointer" />
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.youtube.com/channel/UCIVFg-OLeI02bdDBq180CiA"}
            >
              <IoLogoYoutube className="w-8 h-8 text-gray-600 cursor-pointer" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="copyright text-center ">
        <p className="text-sm md:text-base text-gray-600">
          {`Copyright © ${new Date().getFullYear()}. Designed by Dikshit Bhardwaj All rights reserved.`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
