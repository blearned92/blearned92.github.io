import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ProjectsContext } from "../../../context/Projects.context";
import ProjectItem from "../../../models/ProjectItem";

const Project = styled.div`
    text-align: center;
    cursor: pointer;
    width: 200px;
    height: 200px;
    color: white;
    border: 2px solid white;
    margin: 2%;
    &:hover {
        border-color: #3b035e;
    }
    &:active {
        width: 195px;
        height: 195px;
    }
`;

const ProjectTitle = styled.h2`
    width: 100%;
    text-align: center;
    text-decoration: underline;
    &:hover {
        color: gray;
    }
`;

const ProjectImage = styled.img`
    width: 5rem;
    border-radius: 100%;
    background-color: purple;
`;

const ProjectLink = styled.p`
    width: 100%;
    text-align: center;
    text-decoration: underline;
    &:hover {
        color: gray;
    }
`;

const Portfolio = (ProjectItem:ProjectItem) => {
    
    return (
        <Project>
            <ProjectTitle onClick={() => window.location.href=String(ProjectItem.titleLink)}>{ProjectItem.title}</ProjectTitle>
            <ProjectImage src={String(ProjectItem.imageLink)} onClick={() => window.location.href=String(ProjectItem.titleLink)}/>
            <ProjectLink onClick={() => window.open(String(ProjectItem.githubLink))}>Check Out The GitHub!</ProjectLink>
        </Project>
    )
}

export default Portfolio;