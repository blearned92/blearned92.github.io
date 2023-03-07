import React from "react";
import ProjectItem from "../../../models/ProjectItem";
import "./project.scss";

const Portfolio = (ProjectItem:ProjectItem) => {
    
    return (
        <div className="project-item">
            <h2 className="project-title" onClick={() => window.open(String(ProjectItem.titleLink))}>{ProjectItem.title}</h2>
            <section className="project-sides">
                <div className="project-left">
                    <img  className="project-image" src={String(ProjectItem.imageLink)} onClick={() => window.open(String(ProjectItem.titleLink))}/>
                </div>
                <div className="project-right">
                    <h3>About Project:</h3>
                    <p className="project-right-description">{ProjectItem.description}</p>
                    <h3>Technologies Used:</h3>
                    <ul className="project-right-technologies">
                        {
                            ProjectItem.technologies.map((technology)=>{
                                return(<li>{technology}</li>)
                            })
                        }
                    </ul>
                    <footer className="project-right-footer">
                        <p onClick={() => window.open(String(ProjectItem.titleLink))}>Visit the Site</p>
                        <p className="project-github" onClick={() => window.open(String(ProjectItem.githubLink))}>Visit the GitHub</p>
                    </footer>
                </div>
            </section>
        </div>
    )
}

export default Portfolio;