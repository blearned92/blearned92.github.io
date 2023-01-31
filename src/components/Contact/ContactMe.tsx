import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import "./ContactMe.scss";
import emailjs from '@emailjs/browser';


const ContactMe = () => {

    const [messageSent, setMessageSent] = useState(false);
    const [name, setName] = useState("");

    const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        emailjs.sendForm('service_t8uyhyg', 'template_7ypjuqn', e.currentTarget, 'RxWCwwnLs7E8k3LnF')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          handleSubmit();
          e.currentTarget.reset();
      };

    const handleSubmit = () => {
        if(messageSent){
            setName("");
            setMessageSent(false);
        } else {
            setMessageSent(true);
        }
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        console.log(name);
    }

    const handleReturnForm = () => {
        if(messageSent){
            return(
                <>
                    <h2>Thank you, {name}!</h2>
                    <p>Your email has been successfully submitted. I will respond as soon as possible.</p>
                    <Button onClick={handleSubmit}>Return</Button>
                </>
                
            )
        } else {
            return(
                    <form onSubmit={sendEmail}>
                        <section className="form-section">
                            <div className="form-left">
                                <label>Name</label>
                                <input type='text' value={name} name="name" onChange={handleChange} placeholder="Input Name Here" required/>
                                <label>Email Address</label>
                                <input type='email' name="email" placeholder="Input Email Address Here" required/>
                            </div>
                            <div className="form-right">
                                <label>Message</label>
                                <textarea name="message" placeholder="Input Message Here" required/>
                            </div>  
                        </section>
                        <Button type="submit">Submit</Button>
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