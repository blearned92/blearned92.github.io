import { useNavigate } from "react-router-dom";
import React from 'react';
import styled from "styled-components";
import Banner from "../Banner/Banner";

const Wrapper = styled.div`
  @media(max-width: 768px){
    display: flex;
  }
`;

const Top = styled.div`
  @media(max-width: 768px){
    display: flex;
    order: 2;
    justify-content: right;
    border-left: 2px solid black;
    border-bottom: 1px solid black;
  }
`;

const Bottom = styled.div`
  width: 100%;
  @media(max-width: 768px){
    display: flex;
    order: 1;
  }
`;

const Container = styled.div`
  background-color: #3b036e;
  display: flex;
  border-top: 2px solid black;
  font-family: sans-serif, "Helvetica Neue", "Lucida Grande", Arial;
  font-stretch: expanded;
  @media(max-width: 768px){
    border-top: none;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`;

const MenuItem = styled.div`  
  font-size: 1.2em;
  width: 6rem;
  text-align: center;
  padding: 0.8rem;
  cursor: pointer;
  border-right: 1px solid black;
  @media(max-width: 768px){
    border-right: 2px solid black;
    border-bottom: 1px solid black;
    width: 100%;
    padding: .8rem 0;
  }
  &:hover {
    background-color: #590a8b;
  }
`;

const Logo = styled.div`
  background-color: #590a5b;
  text-decoration: underline;
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

const NavBar = () => {
    const navigate = useNavigate();

    return (
      <Wrapper>
        <Top>
          <Banner/>
        </Top>
        <Bottom>
          <Container>
              <Logo>BrandonLearned.com</Logo>
              <MenuItem onClick={() => {navigate("/")}}>Home</MenuItem>
              <MenuItem onClick={() => {navigate("/about")}}>About</MenuItem>
              <MenuItem onClick={() => {navigate("/portfolio")}}>Portfolio</MenuItem>
          </Container>
        </Bottom>
          
      </Wrapper>
        
    );
    
};

export default NavBar;

