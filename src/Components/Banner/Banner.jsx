import img from "../../assets/Saikat1-removebg-preview (2).png";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="">
      <div className="md:flex justify-around mt-8 p-5 ">
        <div className="">
          <img
            src={img}
            className="w-80 border-l-8 border-b-8  border-yellow-600"
            alt=""
          />
        </div>
        <div className="mt-10 space-y-3">
          <h2 className="text-3xl text-yellow-600 font-bold">- I AM TAWHIDUL ISLAM. </h2>
          <p className="text-3xl font-bold text-white ml-6">WEB DEVELOPER</p>
          <p className="text-white font-lg w-[520px] text-left ">I am a React based front-end web developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
          <button className="btn uppercase bg-black text-white rounded-3xl ">more about me <FaArrowRight className="bg-yellow-600 rounded-full p-3 text-white text-4xl" /></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
