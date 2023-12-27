import img from "../../assets/Saikat1-removebg-preview (2).png";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="">
      <div className="md:flex md:justify-around mt-8 p-3 ">
        <div data-aos="fade-right" className="">
          <img
            src={img}
            className="w-72 md:w-80 md:h-60 lg:h-full border-l-8 border-b-8 border-yellow-600 mr-0 md:mr-10"
            alt=""
          />
        </div>
        <div className="mt-10 space-y-3 ml-5">
          <h2 data-aos="fade-left" className="text-2xl lg:text-3xl text-yellow-600 font-bold">- I AM TAWHIDUL ISLAM </h2>
          <p className="text-2xl lg:text-3xl font-bold text-white ml-6">WEB DEVELOPER</p>
          <p className="text-white font-lg w-64 md:w-[450px] lg:w-[520px] text-left ">I am a React based front-end web developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
          <button className="btn uppercase bg-black text-white rounded-3xl ">more about me <FaArrowRight className="bg-yellow-600 rounded-full p-3 text-white text-4xl" /></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
