import { useState } from "react";
import { Button } from "react-bootstrap";
import "./ContactMe.scss";

const ContactMe = () => {

    const [messageSent, setMessageSent] = useState(false);
    const [name, setName] = useState("");

    const handleSubmit = () => {
        if(messageSent){
            setMessageSent(false);
        } else {
            setMessageSent(true);
        }
    }

    const handleReturnForm = () => {
        if(messageSent){
            return(
                <>
                    <h2>Your email has been successfully submitted!</h2>
                    <Button onClick={handleSubmit}>Return</Button>
                </>
                
            )
        } else {
            return(
                    <form action="https://formsubmit.co/blearned92@gmail.com" method="POST">
                        <section className="form-section">
                            <div className="form-left">
                                <label>Name</label>
                                <input type='text' name="name" placeholder="Input Name Here" />
                                <label>Email Address</label>
                                <input type='email' name="email" placeholder="Input Email Address Here" />
                            </div>
                            <div className="form-right">
                                <label>Message</label>
                                <textarea name="message" placeholder="Input Message Here" />
                            </div>  
                        </section>
                        <Button type="submit" onClick={handleSubmit}>Submit</Button>
                    </form>
            )
        }
    }

    return(
        <section className="contact-me-wrapper" id="contact-me">
            <aside className="background-left">
            </aside>
            <aside className="background-right">
            </aside>
            <section className="contact-me-info">
                <h1>Contact Me</h1>
                <div className="underline-decoration"></div>
                {/* <div className="content-box"> */}
                {
                    handleReturnForm()
                }
                {/* </div> */}
            </section>
        </section>
    )
}

export default ContactMe;