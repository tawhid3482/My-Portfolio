import UseProjects from "../../Hooks/UseProjects";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Chat from "../Message/Chat";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [projects] = UseProjects();

  return (
    <div className="w-11/12 mx-auto ">
      <SectionTitle subtitle1={"My"} subtitle2={"projects"}></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {projects?.slice()?.reverse()?.map((project) => (
          <ProjectsCard key={project?.id} project={project}></ProjectsCard>
        ))}
      </div>
      <Chat></Chat>
    </div>
  );
};

export default Projects;
