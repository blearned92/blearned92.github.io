import "./Projects.scss"
import { ProjectsContext } from "../../context/Projects.context";
import { useContext } from "react";
import Project from "./Project/Project";

const Projects = () => {

    const { Projects, setProjects } = useContext(ProjectsContext); //Made a context, because I may want to add a db later on


    return(
        <section className="projects-wrapper" id="projects">
            <section className="projects-info">
                <h1>Projects</h1>
                <div className="underline-decoration"></div>
                <p><b>Sorry, this area is still under construction!</b></p>
            </section>
            {/* <div className="project-container">
                {
                    Projects.map((item)=>{
                        return(<Project 
                            title={item.title}
                            titleLink={item.titleLink}
                            githubLink={item.githubLink}
                            imageLink={item.imageLink}/>)
                    })
                }
            </div> */}

             
        </section>
    )
}

export default Projects;