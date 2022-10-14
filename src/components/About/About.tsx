import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`;

const Title = styled.h1`
    width: 100%;
    text-align: center;
    text-decoration: underline;
`;

const About = () => {
    return (
        <Container>
            <Title>About</Title>
        </Container>
    )
}

export default About;