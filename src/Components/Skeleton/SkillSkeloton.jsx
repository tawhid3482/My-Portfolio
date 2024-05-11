import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Skeleton from "react-loading-skeleton";

const SkillSkeloton = ({ item }) => {

  const progressBarStyle = {
    width: 150,
    height: 150,
  };
  const customStyles = buildStyles({
    pathColor: "#525252",
    textColor: "#525252",
    trailColor: "transparent",
  });
  return Array(item)
    .fill(0)
    .map((item) => (
      <div key={item}>
        <div className="mt-5 w-11/12 mx-auto">
          <div style={progressBarStyle}>
            <CircularProgressbar
              value={85}
              text={`${85}%`}
              styles={customStyles}
            />
          </div>

          <h1 className="uppercase font-semibold mt-3 mr-24 md:mr-9 lg:mr-10">
            <Skeleton width={80} height={15}></Skeleton>
          </h1>
        </div>
      </div>
    ));
};

export default SkillSkeloton;
