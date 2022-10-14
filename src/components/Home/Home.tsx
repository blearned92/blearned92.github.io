import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    // border: 2px solid white;
`;

const SubjectBox = styled.div`
    // border: 2px solid blue;
    height: 100%;
    justify-content: center;
`;

const Title = styled.h1`
    width: 100%;
    text-align: center;
    text-decoration: underline;
`;

const ContentBox = styled.p`
    width: 100%;
    text-align: center;
`;

const Home = () => {

    return (
    <Wrapper>
        <SubjectBox>
            <Title>Home</Title>
            {/* <ContentBox>Hello!</ContentBox> */}
        </SubjectBox>
        {/* <SubjectBox>
            <Title>TechStack</Title>
            <ContentBox>Hello!</ContentBox>
        </SubjectBox> */}
    </Wrapper>
    )
}

export default Home;