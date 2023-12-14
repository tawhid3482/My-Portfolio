import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Skill = ({ skill }) => {
  const { name, percentage } = skill;
  const progressBarStyle = {
    color: '#D7A11C', 
    width: 150,
    height: 150,
  };

  return (
    <div className="mt-5 w-11/12 mx-auto ">
      <div  style={progressBarStyle}>
      <CircularProgressbar   value={percentage}  text={`${percentage}%`}  />
      </div>

      <h1 className=" uppercase font-semibold mt-3 ml-8 md:mr-9 lg:mr-10 ">
        {name}
      </h1>

    </div>
  );
};

export default Skill;
