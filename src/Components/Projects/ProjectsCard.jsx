import { useEffect, useState } from "react";
import { FaGithub, FaLocationArrow, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProjectSkeleton from "../Skeleton/ProjectSkeleton";

const ProjectsCard = ({ project }) => {
  const {
    id,
    name,
    image,
    description,
   frontEnd,
    backEnd,
    liveLink,
  } = project;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <ProjectSkeleton />
      ) : (
        <div
          data-aos="flip-left"
          className="card w-full lg:w-[520px] h-[500px] border border-yellow-600 bg-black text-white shadow-xl"
        >
          <figure className="h-[220px] overflow-hidden">
            <img src={image} alt="project" className="w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project Name: {name}</h2>
            <p>{description}</p>

            <div className="grid grid-cols-2 gap-3 mt-5">
              {frontEnd && (
                <a
                  href={frontEnd}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm bg-yellow-600 text-white border-none"
                >
                 frontEnd <FaGithub />
                </a>
              )}
              {backEnd && (
                <a
                  href={backEnd}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm bg-yellow-600 text-white border-none"
                >
                  Back-end <FaGithub />
                </a>
              )}
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm bg-yellow-600 text-white border-none"
                >
                  Live <FaLocationArrow />
                </a>
              )}
              <Link to={`/project/${id}`} state={{ project }} className="btn btn-sm bg-yellow-600 text-white border-none">
                Details <FaInfoCircle />
              </Link>
            </div>  
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsCard;
