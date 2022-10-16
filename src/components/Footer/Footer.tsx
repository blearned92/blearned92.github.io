import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
    background-color: #3b036e;
    position: fixed;
    display: flex;
    bottom: 0;
    width: 100%;
    height: 6%;
    justify-content: right;
`;

const Link = styled.div`
    margin: 5px;
    cursor: pointer;
    width: 40px;
`;

const Logo = styled.img`
    height: 100%;
    width: 100%;
    padding-right: 100%;
`;


const Footer = () => {
    return(
        <Wrapper>
            <Link onClick={() => window.open("https://github.com/blearned92/")}>
                <Logo src={String("https://cdn-icons-png.flaticon.com/512/25/25231.png")}/>
            </Link>
            <Link onClick={() => window.open("https://www.linkedin.com/in/brandon-learned/")}>
                <Logo src={String("https://rmutrecht.org/wp-content/uploads/sites/259/2017/10/LinkedIn-Logo-500x500.png")}/>
            </Link>
        </Wrapper>
    )
}

export default Footer;