import styled from "styled-components";
import "./About.scss"
import {Texts} from "../../common/texts"
import Sprite from '../../images/Sprite.png';

const About = () => {
    return (
        <section className="about" id="about-me">
            <h2 className="about-h2">About me:</h2>
            <aside className="left box">
                {Texts.aboutMe}
                <br/>---<br/>
                {Texts.aboutMeExtended}
            </aside>
            <aside className="right box">
                <img src={String(Sprite)}/>
            </aside>
        </section>
    )
}

export default About;