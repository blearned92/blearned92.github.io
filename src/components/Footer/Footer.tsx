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
    display: flex;
    display: flex;
    margin: 5px;
    cursor: pointer;
`;

const Logo = styled.img``;

const LinkTitle = styled.p`
    display: flex;
    align-self: flex-end;
`;


const Footer = () => {
    return(
        <Wrapper>
            <Link onClick={() => window.open("https://github.com/blearned92/")}>
                <Logo src={String("https://cdn-icons-png.flaticon.com/512/25/25231.png")}/>
            </Link>
            <Link onClick={() => window.open("https://www.linkedin.com/in/brandon-learned/")}>
                <Logo src={String("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png")}/>
            </Link>
        </Wrapper>
    )
}

export default Footer;