import { Link } from "react-router-dom";
import img from "../../assets/Saikat.png";
import { FaArrowRight } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";

const Banner = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <div className="md:flex md:justify-around mt-8 p-3 ">
        <div data-aos="fade-right" className="">
          {loading ? (
            <Skeleton width={350} height={350} />
          ) : (
            <img
              src={img}
              className="w-72 md:w-80 md:h-60 lg:h-full border-l-8 border-b-8 border-yellow-600 mr-0 md:mr-10"
              alt=""
            />
          )}
        </div>
        <div className="mt-10 space-y-3 ml-5">
          {loading ? (
            <Skeleton width={355} height={38} />
          ) : (
            <h2
              data-aos="fade-left"
              className="text-2xl lg:text-3xl text-yellow-600 font-bold"
            >
              - I AM TAWHIDUL ISLAM
            </h2>
          )}

          {loading ? (
            <Skeleton width={300} height={38} />
          ) : (
            <p className="text-2xl lg:text-3xl font-bold text-white ml-6">
              WEB DEVELOPER
            </p>
          )}

          {loading ? (
            <Skeleton count={3} width={400} height={15} />
          ) : (
            <p className="text-white font-lg w-64 md:w-[450px] lg:w-[520px] text-left ">
              I am a Full-stack web developer focused on crafting
              clean & user-friendly experiences, I am passionate about building
              excellent software that improves the lives of those around me.
            </p>
          )}

          {loading ? (
            <Skeleton className={`mt-4`}  width={200}  height={38} />
          ) : (
            <Link to="/about">
              <button className="mt-4 btn uppercase bg-black text-white rounded-3xl ">
                more about me{" "}
                <FaArrowRight className="bg-yellow-600 rounded-full p-3 text-white text-4xl" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
