import React, { useState } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    };
  
    return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <HiOutlineAcademicCap className="qualification__icon" />
                    Education
                </div>
                <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <HiOutlineBriefcase className="qualification__icon" />
                    Certificates
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Computer Science and Engineering</h3>
                            <span className="qualification__subtitle">B.E</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2019-2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">XII(12th)</h3>
                            <span className="qualification__subtitle">PUC</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2017-2019
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">X(10th)</h3>
                            <span className="qualification__subtitle">SSLC</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2016-2017
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Google Cybersecurity</h3>
                            <span className="qualification__subtitle">Coursera</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Cybersecurity</h3>
                            <span className="qualification__subtitle">Academor</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2022
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section> 
  );
}

export default Qualification;