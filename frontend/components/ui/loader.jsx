import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full absolute h-screen flex items-center justify-center bg-white z-[999]">
      <ScaleLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
