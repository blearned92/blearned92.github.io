import Button from "react-bootstrap/esm/Button";
import "./About.scss";
import Technologies from "./Technologies/Technologies";

const About = () => {
    return (
        <section className="about-wrapper" id="about-me">
            <aside className="background-left">
            </aside>
            <aside className="background-right">
            </aside>
            <section className="about-info">
                <h1>About Me</h1>
                <div className="underline-decoration"></div>
                <div className="content-box">
                    <div className="about-left">
                        <p>
                            My name is Brandon and I am a <strong>Full-stack Web Developer </strong> based out 
                            of the <strong>Northern Colorado Area</strong>. My passions are creating 
                            and assisting others to meet their needs!
                        </p>
                    </div>
                    <div className="about-right">
                        <Technologies/>
                    </div>   
                </div>
                <Button className="about-contact-me" href="#contact-me">Contact Me</Button>
            </section>
        </section>
    )
}

export default About;