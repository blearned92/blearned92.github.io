import { useNavigate } from "react-router-dom";
import React from 'react';
import styled from "styled-components";
import Banner from "../Banner/Banner";
import {Color} from '../../common/colors';

const Wrapper = styled.div`
  height: 6vh;
  border: 2px solid purple;
  // @media(max-width: 768px){
  //   display: flex;
  // }
`;

const Container = styled.div`
  background-color: ${Color.secondaryColor};
  display: flex;
  justify-content: center;
  font-family: sans-serif, "Helvetica Neue", "Lucida Grande", Arial;
  font-stretch: expanded;
  @media(max-width: 768px){
    border-top: none;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`;

const Title = styled.h1`
  background-color: ${Color.tetriaryColor};
  padding: .8rem;
  font-size: 1.2em;
  text-align: center;
  border-right: 1px solid black;
  @media(max-width: 768px){
    border-right: none;
    border-bottom: 1px solid black;
    width: 100%;
    font-size: 1rem;
    line-height: 1.3rem;
    padding: .8rem 0;
  }
`;

const MenuItem = styled.div` 
  writing-mode:vertical-rl; 
  font-size: 1.2em;
  width: 6rem;
  text-align: center;
  padding: 0.8rem;
  cursor: pointer;
  border-right: 1px solid black;
  @media(max-width: 768px){
    // border-right: 1px solid black;
    border-bottom: 1px solid black;
    width: 100%;
    padding: .8rem 0;
  }
  &:hover {
    background-color: ${Color.hoverColor};
  }
`;

const LeadItem = styled(MenuItem) `
  border-left: 1px solid black;
`;

// const Bottom = styled.div`
//   width: 100%;
//   @media(max-width: 768px){
//     display: flex;
//     order: 1;
//   }
// `;

// const Top = styled.div`
//   @media(max-width: 768px){
//     display: flex;
//     order: 2;
//     justify-content: right;
//     border-left: 2px solid black;
//     border-bottom: 1px solid black;
//   }
// `;

const NavBar = () => {
    const navigate = useNavigate();

    return (
      <Wrapper>
          {/* <Container>
              <LeadItem onClick={() => {navigate("/")}}>Home</LeadItem>
              <MenuItem onClick={() => {navigate("/about")}}>About</MenuItem>
              <Title> <Banner/> </Title>
              <MenuItem onClick={() => {navigate("/portfolio")}}>Projects</MenuItem>
              <MenuItem>Skills</MenuItem>
          </Container>           */}
      </Wrapper>
        
    );
    
};

export default NavBar;

