import { FaGithub, FaLocationArrow } from "react-icons/fa";

const ProjectsCard = ({ project }) => {
  console.log(project);
  const { name, image, description,liveLink,code } = project;
  return (
    <div>
      <div data-aos="flip-left" className="card w-full lg:w-[520px] h-[400px] border border-yellow-600 bg-black text-white shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Project Name: {name}</h2>
          <p>{description}</p>
          <div className="card-actions mt-5 justify-between">
            <a href={code} target="blank" className="btn bg-yellow-600 text-white border-none">
                Code <FaGithub className="text-2xl"></FaGithub>
            </a>
            <a href={liveLink} target="blank" className="btn bg-yellow-600 text-white border-none">Live Demo <FaLocationArrow className="text-xl"></FaLocationArrow></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
