import "./Portfolio.scss"
import { ProjectsContext } from "../../context/Projects.context";
import {Texts} from "../../common/texts"
import { useContext } from "react";
import Project from "../Project/Project";

const Projects = () => {

    const { Projects, setProjects } = useContext(ProjectsContext); //Made a context, because I may want to add a db later on


    return(
        <section className="portfolio">
            <h2 className="portfolio-h2">Projects:</h2>
            <div className="project-container">
                {
                    Projects.map((item)=>{
                        return(<Project 
                            title={item.title}
                            titleLink={item.titleLink}
                            githubLink={item.githubLink}
                            imageLink={item.imageLink}/>)
                    })
                }
            </div>

             
        </section>
    )
}

export default Projects;