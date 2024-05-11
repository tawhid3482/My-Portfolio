import { FaGithub, FaLocationArrow } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


const ProjectsCard = ({ project }) => {
  console.log(project);
  const { name, image, description,liveLink,code } = project;
  return (
    <div>
      <div data-aos="flip-left" className="card w-full lg:w-[520px] h-[400px] border border-yellow-600 bg-black text-white shadow-xl">
        <figure>
          <img src={image  || <Skeleton />} alt="projects Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Project Name: {name  || <Skeleton />}</h2>
          <p>{description  || <Skeleton />}</p>
          <div className="card-actions mt-5 justify-between">
            <a href={code  || <Skeleton />} target="blank" className="btn bg-yellow-600 text-white border-none">
                Code <FaGithub className="text-2xl"></FaGithub>
            </a>
            <a href={liveLink  || <Skeleton />} target="blank" className="btn bg-yellow-600 text-white border-none">Live Demo <FaLocationArrow className="text-xl"></FaLocationArrow></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
