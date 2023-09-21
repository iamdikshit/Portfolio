"use client";

import Image from "next/image";
import { images } from "@/public/images";
import { IoApps, IoCloseCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <header className="h-20 relative md:h-24 flex items-center justify-between bg-transparent px-4 md:px-16 lg:px-28 ">
      <Link href={"/"}>
        <Image src={images.logo1} width={200} height={100} />
      </Link>

      {showMenu ? (
        <button onClick={showMenuHandler} className=" z-50">
          <IoCloseCircleOutline className="w-6 h-6 " />
        </button>
      ) : (
        <button onClick={showMenuHandler} className=" z-50">
          <IoApps className=" w-6 h-6" />
        </button>
      )}

      {showMenu && (
        <div className=" bg-white  fixed h-screen w-full z-30 top-0 left-0 flex items-center justify-center">
          <nav className=" ">
            <ul className="flex flex-col items-center gap-4 uppercase">
              <li>
                <Link onClick={showMenuHandler} href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={showMenuHandler} href={"/project/all"}>
                  Projects
                </Link>
              </li>

              <li>
                <Link onClick={showMenuHandler} href={"/about"}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
