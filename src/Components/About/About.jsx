import SectionTitle from "../../SectionTitle/SectionTitle";
// import UseSkills from "../../Hooks/UseSkills";
import { useLoaderData } from "react-router-dom";
import Skill from "../Skill/Skill";

const About = () => {
  //   const [Skills] = UseSkills();
  //   console.log(Skills);

  const data = useLoaderData();
  //   console.log(data);

  return (
    <div className="text-white">
      <div className="">
        <SectionTitle subtitle1={"About"} subtitle2={"me"}></SectionTitle>
      </div>
      <div className="md:flex md:justify-around items-center">
        <div className="">
          <p className="text-xl font-semibold uppercase"> personal infos</p>
          <div className="grid grid-cols-2 space-y-1">
            <p className="text- text-slate-300">
              First Name: <span className="text-white">Tawhidul Islam</span>
            </p>
            <p className="text- text-slate-300 ml-20">
              Nick Name: <span className="text-white">Saikat</span>
            </p>
            <p className="text- text-slate-300  ">
              Age: <span className="text-white">20 Years</span>
            </p>
            <p className="text- text-slate-300  ml-20">
              Nationality: <span className="text-white">Bangladesh</span>
            </p>
            <p className="text- text-slate-300 ">
              Address:{" "}
              <span className="text-white">Madhupur,Tangail,Dhaka</span>
            </p>
            <p className="text- text-slate-300  ml-20">
              Email:{" "}
              <span className="text-white">tawhidulislam3482@gmail.com</span>
            </p>
            <p className="text- text-slate-300 ">
              Phone: <span className="text-white">01826853371</span>
            </p>
            <p className="text- text-slate-300  ml-20">
              Language: <span className="text-white">Benali, English</span>
            </p>
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
      <div className="">
        <h2 className="text-xl font-semibold text-center uppercase m-7">
          My Skills
        </h2>

        <div className="grid grid-cols-4">
          {data?.map((skill) => (
            <Skill key={skill.name} skill={skill}></Skill>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
