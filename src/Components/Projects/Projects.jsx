import UseProjects from "../../Hooks/UseProjects";
import SectionTitle from "../../SectionTitle/SectionTitle";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    const [projects]= UseProjects()
    console.log(projects)
    return (
        <div>
            <SectionTitle subtitle1={'My'} subtitle2={'projects'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {
                    projects?.map((project)=><ProjectsCard key={project.id} project={project}></ProjectsCard>)
                }
            </div>
        </div>
    );
};

export default Projects;