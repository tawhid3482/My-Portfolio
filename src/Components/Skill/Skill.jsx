import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import SkillSkeloton from "../Skeleton/SkillSkeloton";

const Skill = ({ skill }) => {
  const { name, percentage } = skill;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const progressBarStyle = {
    width: 150,
    height: 150,
  };

  const customStyles = buildStyles({
    pathColor: "#D89F13 ",
    textColor: "#fff",
    trailColor: "transparent",
  });

  return (
    <div className="">
      {loading ? (
        <SkillSkeloton item={8}></SkillSkeloton>
      ) : (
        <div className="mt-5 w-11/12 mx-auto">
          <div style={progressBarStyle}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={customStyles}
            />
          </div>

          <h1 className="uppercase font-semibold mt-3 mr-24 md:mr-9 lg:mr-10">
            {name}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Skill;
