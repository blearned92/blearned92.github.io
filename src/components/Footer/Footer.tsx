import styled from "styled-components";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.div`
    background-color: ;
    position: fixed;
    display: flex;
    bottom: 0;
    width: 100%;
    height: 6%;
    justify-content: right;
    align-items: center;
`;

const Logo = styled.img`
    height: 100%;
    width: 100%;
    padding-right: 100%;
`;

const FooterIcon = styled(FontAwesomeIcon)`
    color: ;
    height: 60%;
    padding-right: 10px;
    cursor: pointer;
`

const Footer = () => {
    return(
        <Wrapper>
            <FooterIcon icon={faLinkedin} onClick={() => window.open("https://www.linkedin.com/in/brandon-learned/")}/>
            <FooterIcon icon={faGithub} onClick={() => window.open("https://github.com/blearned92/")}/>
        </Wrapper>
    )
}

export default Footer;