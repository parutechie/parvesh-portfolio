import React from 'react';
import "./footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Parvesh</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://twitter.com/parvesh_z?t=3EVdl8hO_RTU36WFifZLBA&s=09" className="home__social-icon" target="_blank" rel="noreferrer">
                    <i class = "bx bxl-twitter"></i>
                </a>
                <a href="https://github.com/parutechie" className="home__social-icon" target="_blank" rel="noreferrer">
                <i class = "bx bxl-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/parvesh-a-174871192/" className="home__social-icon" target="_blank" rel="noreferrer">
                <i class = "bx bxl-linkedin"></i>
                </a>    
            </div>
            <span className="footer__copy">&#169;{currentYear} Parvesh. All rights reserved</span>
        </div>
    </footer>
  );
}

export default Footer;
