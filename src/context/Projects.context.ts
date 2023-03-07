import React from "react";
import ProjectItem from "../models/ProjectItem";
import RedditImage from "../images/project-images/reddit-project.jpg";

const ProjectItemArray:ProjectItem[] = [
    // {
    //     title: "Reddit For Lurkers",
    //     technologies: ["ReactJS", "Redux ToolKit", "Jest", "React Router Dom", "one more", "another"],
    //     description: "Reddit for Lurkers is a ReactJS Front-End application that uses Reddit's Official API to allow users to: search Reddit posts, navigate different Sub Reddits, view user comment threads, and more.",
    //     titleLink: "https://redditforlurkers.netlify.app",
    //     imageLink: String(RedditImage),
    //     githubLink: "https://github.com/blearned92/reddit-api-reactjs"
    // },
    // {
    //     title: "Reddit For Lurkers",
    //     technologies: ["ReactJS", "Redux ToolKit", "Jest", "React Router Dom", "one more", "another"],
    //     description: "Reddit for Lurkers is a ReactJS Front-End application that uses Reddit's Official API to allow users to: search Reddit posts, navigate different Sub Reddits, view user comment threads, and more.",
    //     titleLink: "https://redditforlurkers.netlify.app",
    //     imageLink: String(RedditImage),
    //     githubLink: "https://github.com/blearned92/reddit-api-reactjs"
    // },
    {
        title: "Reddit For Lurkers",
        technologies: ["ReactJS", "Redux ToolKit", "React Router Dom", "Jest", "Reddit API"],
        description: "Reddit for Lurkers is a ReactJS Front-End application that uses Reddit's Official API to allow users to: search Reddit posts, navigate different Sub Reddits, view user comment threads, and more.",
        titleLink: "https://redditforlurkers.netlify.app",
        imageLink: String(RedditImage),
        githubLink: "https://github.com/blearned92/reddit-api-reactjs"
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