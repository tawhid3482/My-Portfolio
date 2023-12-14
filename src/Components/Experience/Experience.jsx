import { FaRegStickyNote } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <p className="uppercase text-xl my-5 font-semibold mt-5">
        Experience & education
      </p>
      <div className="flex justify-between items-center">
        <div className="w-1/2 mx-auto">
            
          <div className="text-left flex gap-5">
            <div className="">
                <FaRegStickyNote className="text-2xl text-yellow-600 "></FaRegStickyNote>
            </div>
          <div className="">
          <p> 2023-Present</p>
            <h2 className="uppercase font-medium text-lg">
              Web developer - <span className="text-sm">envato</span>
            </h2>
            <h5 className="w-[450px]">
              Recently i complete my web development journey.
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
              Web Design - <span className="text-sm">themeforest</span>
            </h2>
            <h5 className="w-[450px]">
             in 2021-2022 i work on wev design
            </h5>
          </div>
          </div>
        </div>
        <div className="w-1/2 mx-auto">
        <div className="text-left flex gap-5">
            <div className="">
                <FaRegStickyNote className="text-2xl text-yellow-600 "></FaRegStickyNote>
            </div>
          <div className="">
          <p>2023-Present</p>
            <h2 className="uppercase font-medium text-lg">
              Diploma 2nd Year - <span className="text-sm">student</span>
            </h2>
            <h5 className="w-[450px]">
              now i read in diploma 2nd year in sylhet polytacnic institution
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
            <h5 className="w-[450px]">
             i complete my higher secondary study in madhupur,tangail.
            </h5>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
