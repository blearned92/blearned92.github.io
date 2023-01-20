import React from 'react';
import styled from "styled-components";
import Sprite from '../../images/Sprite.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faReact, faHtml5, faCss3, faJs, faGit } from '@fortawesome/free-brands-svg-icons';
const Wrapper = styled.div`
    border: 1px solid white;
    margin: 0px 3%;
    // margin-bottom: 4%;
`;

const SubjectBox = styled.div`
    border: 2px solid blue;
    justify-content: center;
    margin: 20px 0px;
`;

const Title = styled.h1`
    width: 100%;
    text-align: center;
    // text-decoration: underline;
`;

const ContentBox = styled.p`
    width: 100%;
    text-align: center;
`;

const Home = () => {

    return (
        <Wrapper>
            <h2>Intro Hook</h2>
            <h2>About Me</h2>
            <h2>Experience</h2>
            <h2>Projects</h2>
            <h2>Contact Me</h2>

            {/* <p>I am a Full Stack Web Developer</p> */}
            {/* <img src={String(Sprite)}/> */}

            <h2>Technologies I Use</h2>
            {/* <FontAwesomeIcon icon={faJava}/>
            <FontAwesomeIcon icon={faReact}/>
            <FontAwesomeIcon icon={faJs}/>
            <FontAwesomeIcon icon={faHtml5}/>
            <FontAwesomeIcon icon={faCss3}/>
            <FontAwesomeIcon icon={faGit}/> */}

            <h2>Projects</h2>

        </Wrapper>
    // <Wrapper>
    //     <SubjectBox>
    //         <Title>About Me</Title>
    //         <ContentBox>Hello!</ContentBox>
    //     </SubjectBox>
    //     <SubjectBox>
    //         <Title>Technologies</Title>
    //         <ContentBox>Hello!</ContentBox>
    //     </SubjectBox>
    //     <SubjectBox>
    //         <Title>Projects</Title>
    //         <ContentBox>Hello!</ContentBox>
    //     </SubjectBox>
    // </Wrapper>
    )
}

export default Home;