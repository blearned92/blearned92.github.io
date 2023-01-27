import React from "react";
import "./Header.scss";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="breakpoint"/>

            <div className="main-info">
                <h1>Web Development</h1>
                <Typed
                    className="typed-text"
                    strings={["Brandon Learned", "Web Developer"]}   
                    typeSpeed={150}
                    backSpeed={30}
                    loop

                />
            </div>
        </div>
    )
    
}

export default Header;