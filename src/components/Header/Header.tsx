import React from "react";
import { Button} from "react-bootstrap";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


// import Typed from "react-typed";

const Header = () => {
    return (
        <section className="header-wrapper" id="home">
            <section className="main-info">
                <h1>Brandon Learned</h1>
                <h2>Full-Stack Web Developer</h2>
                <Button className="project" href="#projects">Projects</Button>
                <Button className="hide" href="#resume">Resume</Button>
            </section>
            <ul className="side">
                <li><FontAwesomeIcon icon={faLinkedin} onClick={() => window.open("https://www.linkedin.com/in/brandon-learned/")}/></li>
                <li><FontAwesomeIcon icon={faGithub} onClick={() => window.open("https://github.com/blearned92/")}/></li>
            </ul>
        </section>
    )
    
}

export default Header;