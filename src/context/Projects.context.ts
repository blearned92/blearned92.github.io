import React from "react";
import ProjectItem from "../models/ProjectItem";
import PokeBall from "../images/ProjectLogos/PokeBall.png";

const ProjectItemArray:ProjectItem[] = [
    {
        title:"PokeAPI",
        titleLink:"http://brandonlearned.com/pokeapi-searchapp/",
        imageLink:String(PokeBall),
        githubLink:"https://github.com/blearned92/pokeapi-searchapp.git"
    }
];

interface ProjectsContextState {
    Projects: ProjectItem[];
    setProjects: (Projects: ProjectItem[]) => void;
}

export const ProjectsContext = React.createContext<ProjectsContextState>({
    Projects: ProjectItemArray,
    setProjects: ()=> {}
});