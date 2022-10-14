import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PokeBall from '../../images/PokeBall.png';

const Container = styled.div`
    margin: 0 5rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Title = styled.h1`
    width: 100%;
    text-align: center;
    text-decoration: underline;
`;

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

const Portfolio = () => {

    interface IFrontEnd {
        title: String,
        imageLink: String,
        githubLink: String
    }

    const navigate = useNavigate();
    const frontEndArray = [{
        title:"PokeAPI",
        imageLink:"../../images/PokeBall.png", 
        githubLink:"https://github.com/blearned92/MonkeyBusiness"}
    ];
    
    return (
        <Container>
            <Title>Project Catalog</Title>
            <Project>
                <ProjectTitle onClick={() => {navigate("/projectPokeAPI")}}>PokeAPI</ProjectTitle>
                <ProjectImage src={String(PokeBall)}/>
                <ProjectLink onClick={() => window.open("https://github.com/blearned92/MonkeyBusiness")}>Check Out The GitHub!</ProjectLink>
            </Project>
            <Project>Project2</Project>
            <Project>Project3</Project>
            <Project>Project4</Project>
            <Project>Project5</Project>
            <Project>Project6</Project>
            
        </Container>
    )
}

export default Portfolio;