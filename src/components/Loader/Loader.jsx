import { useLoading } from "../../context/LoadingContext";
import "./Loader.css";

const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-[9999] space-y-4">
      <div className="loader"></div>
      <p className="text-gray-600 font-medium">{text}</p>
    </div>
  );
};

export default Loader;
