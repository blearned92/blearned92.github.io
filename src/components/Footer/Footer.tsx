import styled from "styled-components";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./Footer.scss";

const Footer = () => {
    return(
        <section className="wrapper">
            <span>
                <a href="https://www.freepik.com/free-vector/abstract-black-texture-background-hexagon_18702139.htm#query=black%20hexagon&position=2&from_view=keyword"> Background Image by almumtazza</a> on Freepik
            </span>
            <span className="name">
                Brandon Learned 2023
            </span>
            <ul className="footer-ul">
                <li><FontAwesomeIcon icon={faLinkedin} onClick={() => window.open("https://www.linkedin.com/in/brandon-learned/")}/></li>
                <li><FontAwesomeIcon icon={faGithub} onClick={() => window.open("https://github.com/blearned92/")}/></li>
            </ul>
        </section>
    )
}

export default Footer;