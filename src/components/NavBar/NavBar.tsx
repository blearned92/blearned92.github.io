import { useNavigate } from "react-router-dom";
import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 3rem;
  background-color: #c6baba;
  border-bottom: .3rem ridge black;
  z-index:4;
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  flex: 9;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 12px;
  margin-right: 12px;
`;

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <Container>
          <Left>
            <MenuItem onClick={() => {navigate("/")}}>Home</MenuItem>
            <MenuItem onClick={() => {navigate("/about")}}>About</MenuItem>
            <MenuItem onClick={() => {navigate("/portfolio")}}>Portfolio</MenuItem>
          </Left>
          <Right>
            <MenuItem>BrandonLearned.com</MenuItem>
          </Right>    
        </Container>
    );
    
};

export default NavBar;

