import { FaRegStickyNote } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="w-11/12 mx-auto my-10 ">
      <p className="uppercase text-xl my-5 font-semibold ">
        Experience & education
      </p>
      <div className=" grid grid-cols-1  lg:flex lg:justify-between lg:items-center">
        <div className="w-1/2 mx-auto">
          <div className="text-left flex gap-5">
            <div className="">
              <FaRegStickyNote className="text-2xl text-yellow-600 "></FaRegStickyNote>
            </div>
            <div className="">
              <p> 2025</p>
              <h2 className="uppercase font-medium text-lg">
                Web developer-<span className="text-sm">full-stack</span>
              </h2>
              <h5 className="w-52 md:w-[450px]">
              I have completed my full-stack journey
              </h5>
            </div>
          </div>


          <div className="text-left flex gap-5 my-5">
            <div className="">
              <FaRegStickyNote className="text-2xl text-yellow-600 "></FaRegStickyNote>
            </div>
            <div className="">
              <p> 2023</p>
              <h2 className="uppercase font-medium text-lg">
                Web developer-<span className="text-sm">front-end</span>
              </h2>
              <h5 className="w-52 md:w-[450px]">
              I have completed my web development journey
              </h5>
            </div>
          </div>
        </div>
        <hr className="my-3 w-full md:w-96 md:ml-36 border-yellow-600 lg:hidden" />
        <p className="text-center text-xl font-semibold uppercase my-3 lg:hidden">
          Education
        </p>
        <div className="w-1/2 mx-auto">
          <div className="text-left flex gap-5">
            <div className="">
              <FaRegStickyNote className="text-2xl text-yellow-600 "></FaRegStickyNote>
            </div>
            <div className="">
              <p>2025-Present</p>
              <h2 className="uppercase font-medium text-lg">
                Diploma 4th Year - <span className="text-sm">student</span>
              </h2>
              <h5 className="w-52 md:w-[450px]">
                Now i have been reading in diploma 4nd year in Sylhet
                polytechnic Institute.
              </h5>
            </div>
          </div>
          <div className="text-left flex gap-5 my-5">
            <div className="">
              <FaRegStickyNote className="text-2xl text-yellow-600 "></FaRegStickyNote>
            </div>
            <div className="">
              <p>2021-2022</p>
              <h2 className="uppercase font-medium text-lg">
                SSC - <span className="text-sm">high school</span>
              </h2>
              <h5 className="w-52 md:w-[450px]">
                I completed my higher secondary study in madhupur,tangail.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
