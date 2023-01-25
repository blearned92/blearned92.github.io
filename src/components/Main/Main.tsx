import React from 'react';
import About from "../About/About";
import Technologies from '../Technologies/Technologies';
import "../Main/Main.scss";
import Projects from '../Projects/Portfolio';


const Main = () => {

    return (
        <div className='main'>
            {/* <h2>Intro Hook</h2> */}
            <aside className='main-left'>
                <About/>
            </aside>
            <aside className='main-right'>
                <Technologies/>
            </aside>
            <aside className='main-left'>
                <Projects/>
            </aside>
            <aside className='main-right'>
                Contact
            </aside>
            Footer (github, linkedin, resume)
        </div>
    )
}

export default Main;