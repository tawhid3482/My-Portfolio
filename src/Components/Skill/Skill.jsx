import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skill = ({ skill }) => {
  const { name, percentage } = skill;

  const progressBarStyle = {
    width: 150,
    height: 150,
  };

  const customStyles = buildStyles({
    pathColor: '#D89F13 ',
    textColor: '#fff',
    trailColor: 'transparent',
  });

  return (
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
  );
};

export default Skill;
