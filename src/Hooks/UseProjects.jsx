import { useEffect, useState } from "react";

const UseProjects = () => {
    const [projects, setProjects] = useState(null);
    useEffect(() => {
        fetch("../../public/projects.json")
          .then((res) => res.json())
          .then((data) => setProjects(data));
      }, []);
    
      return [projects];

 
};

export default UseProjects;