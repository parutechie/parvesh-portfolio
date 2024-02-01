import React from "react";
import { FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social"> 
            <a href="https://www.linkedin.com/in/parvesh-a-174871192/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
            <a href="https://github.com/parutechie" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://twitter.com/parvesh_z?t=3EVdl8hO_RTU36WFifZLBA&s=09" className="home__social-icon" target="_blank">
                <FiTwitter />
            </a>
        </div> 
    ); 
}

export default Social;