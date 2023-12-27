import SectionTitle from "../../SectionTitle/SectionTitle";
// import UseSkills from "../../Hooks/UseSkills";
import { useLoaderData } from "react-router-dom";
import Skill from "../Skill/Skill";
import Experience from "../Experience/Experience";
import { FaDownload } from "react-icons/fa";

const About = () => {

  const data = useLoaderData();
  
  return (
    <div className="text-white w-11/12 mx-auto">
      <div className="">
        <SectionTitle subtitle1={"About"} subtitle2={"me"}></SectionTitle>
      </div>
      <div className=" lg:flex lg:justify-around lg:items-center">
        <div className="">
          <p className="text-xl font-semibold uppercase"> personal infos</p>
          <div className="grid grid-cols-2 space-y-1 ">
            <p className="text- text-slate-300">
              First Name: <span className="text-white">Tawhidul Islam</span>
            </p>
            <p className="text- text-slate-300 ml-4 lg:ml-20">
              Nick Name: <span className="text-white">Saikat</span>
            </p>
            <p className="text- text-slate-300  ">
              Age: <span className="text-white">20 Years</span>
            </p>
            <p className="text- text-slate-300 ml-4 lg:ml-20">
              Nationality: <span className="text-white">Bangladesh</span>
            </p>
            <p className="text- text-slate-300 ">
              Address:{" "}
              <span className="text-white">Madhupur,Tangail, <br className='md:hidden' /> <span>Dhaka</span></span>
            </p>
            <p className=" text-slate-300 ml-4 lg:ml-20">
              Email:{" "}
              <span className="text-white">tawhidulislam3482  <br className="md:hidden" />    <span>@gmail.com</span></span>
            </p>
            <p className=" text-slate-300 ">
              Phone: <span className="text-white">01826853371</span>
            </p>
            <p className=" text-slate-300  ml-4 lg:ml-20">
              Language: <span className="text-white">Benali, English</span>
            </p>
          </div>
          <div className="my-4">
            <a href='../../assets/Developer CV Coming Soon.pdf' download target="_blank" className="btn w-44 uppercase rounded-3xl bg-transparent text-white">
              download cv
              <FaDownload className="text-lg text-yellow-600"></FaDownload>{" "}
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 space-y-0 gap-5">
          <div className="w-36  border border-yellow-600 rounded-lg ">
            <p className="text-5xl text-yellow-600   font-bold ">1+</p>
            <h1 className=" ml-10 uppercase font-semibold text-slate-300 ">
              Years of experience
            </h1>
          </div>
          <div className="w-36  border border-yellow-600 rounded-lg ">
            <p className="text-5xl text-yellow-600 p-1 font-bold ">40+</p>
            <h1 className=" ml-10 uppercase font-semibold text-slate-300 ">
              completed projects
            </h1>
          </div>
          <div className="w-36 border border-yellow-600 rounded-lg ">
            <p className="text-5xl text-yellow-600 p-1 font-bold ">0+</p>
            <h1 className=" ml-10 uppercase font-semibold text-slate-300 ">
              Happy customers
            </h1>
          </div>
          <div className="w-36 border border-yellow-600 rounded-lg ">
            <p className="text-5xl text-yellow-600 p-1 font-bold ">3+</p>
            <h1 className=" ml-10 uppercase font-semibold text-slate-300 ">
              Awards won
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-center uppercase m-7">
          My Skills
        </h2>

        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  md:gap-10 text-center">
          {data?.map((skill) => (
            <Skill key={skill.name} skill={skill}></Skill>
          ))}
        </div>
        <div className="text-center my-5">
          <Experience></Experience>
        </div>
      </div>
    </div>
  );
};

export default About;
