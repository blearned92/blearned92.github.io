import "./Projects.scss"
import { ProjectsContext } from "../../context/Projects.context";
import { useContext } from "react";
import Project from "./Project/Project";

const Projects = () => {

    const { Projects } = useContext(ProjectsContext); //Made a context, because I may want to add a db later on

    return(
        <section className="projects-wrapper" id="projects">
            <section className="projects-info">
                <h1>Projects</h1>
                <div className="underline-decoration"></div>
            </section>    
            <section className="projects-container">
                {
                Projects.map((item)=>{
                    return(<Project 
                        title={item.title}
                        technologies={item.technologies}
                        description = {item.description}
                        titleLink={item.titleLink}
                        frontEndGithub={item.frontEndGithub}
                        backEndGithub={item.backEndGithub}
                        imageLink={item.imageLink}/>)
                    })
                }
            </section>
        </section>
    )
}

export default Projects;