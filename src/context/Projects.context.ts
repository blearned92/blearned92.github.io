import React from "react";
import ProjectItem from "../models/ProjectItem";
import RedditImage from "../images/project-images/reddit-project.jpg";
import MangoMoviesImage from "../images/project-images/mangomovies-project.png";

const ProjectItemArray:ProjectItem[] = [
  
    {
        title: "Mango Movies",
        technologies: ["ReactJS", "Java", "Spring Boot", "Spring Security", "MongoDB", "Jest/JUnit"],
        description: "Mango Movies is a Full-stack application using that allow users to search movies, view production details, and read/write reviews. User sessions are kept secure using JWTs authorization and authentication.",
        titleLink: "https://mongo-movies.netlify.app/",
        imageLink: String(MangoMoviesImage),
        frontEndGithub: "https://github.com/blearned92/react-mongo-movies",
        backEndGithub: "https://github.com/blearned92/sb_mongo_movies"
    },
    {
        title: "Reddit For Lurkers",
        technologies: ["ReactJS", "Redux ToolKit", "React Router Dom", "Jest", "Reddit API"],
        description: "Reddit for Lurkers is a ReactJS Front-End application that uses Reddit's Official API to allow users to: search Reddit posts, navigate different Sub Reddits, view user comment threads, and more.",
        titleLink: "https://redditforlurkers.netlify.app",
        imageLink: String(RedditImage),
        frontEndGithub: "https://github.com/blearned92/reddit-api-reactjs",
        backEndGithub: ""
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