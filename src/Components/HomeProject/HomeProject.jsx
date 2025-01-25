
import { Link } from "react-router-dom";
import UseProjects from "../../Hooks/UseProjects";
import SectionTitle from "../../SectionTitle/SectionTitle";
import ProjectsCard from "../Projects/ProjectsCard";

const Projects = () => {
  const [projects] = UseProjects();
  const project = projects?.slice()?.reverse()?.slice(0, 4);

  return (
    <div className="w-11/12 mx-auto">
      <SectionTitle subtitle1={"My"} subtitle2={"projects"}></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {project?.map((project) => (
          <ProjectsCard key={project.id} project={project}></ProjectsCard>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/project">
          <button className="btn uppercase bg-yellow-600 text-white border-none">see all</button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
