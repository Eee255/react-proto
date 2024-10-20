import React from 'react'
import './About.css'
import ThemeProvider from '../../ThemeProvider';
import { useSelector } from 'react-redux';

const About = () => {
    const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider>
    <section className="about section" id="about">
        <div className='container'>
        <div className="section-title padd-15">
            <h2 style={{color : theme === 'light' ? '#302e4d' : '#fff'}} >About Me</h2>
        </div>
        <div className="about-text padd-15">
            <h3 style={{color : theme === 'light' ? '#302e4d' : '#fff'}}>A Passionate <span>Developer</span></h3>
            <h3 style={{color : theme === 'light' ? '#302e4d' : '#fff'}}>Who Loves to <span>Code</span></h3>
            <p style={{color : theme === 'light' ? '#504e70' : '#fff'}}>Hi everyone, I'm Bhanu Prakash, a passionate coder with strong expertise in web development technologies like HTML, CSS, JavaScript, React, Node.js, SQL, and Python. I hold certifications in Python programming, responsive design, HTML, SQL, and dynamic web applications. I'm constantly honing my skills to ensure continuous growth and stay at the top of my game. I’m deeply committed to delivering my best and am excited to contribute 100% to any company that hires me. Thank you for visiting my website!</p>
        </div>
        <div className="about-content padd-15">
            <div className='row'>
            <div className="education padd-15">
                <h3 className="title" style={{color : theme === 'light' ? '#302e4d' : '#fff'}}>Education</h3>
                <div className='row'>
                    <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                                <i className="fa fa-calender"></i> 2021 - 2024
                            </h3>
                            <h4 className="timeline-title">Btech</h4>
                            <p className="timeline-text">Sree Vidyanikethan Engineering College, Tirupati, Andhra Pradesh, 
                                Bachelor of Technology_Electrical and Electronics Engineering (8.12 CGPA)
                            </p>                 
                        </div>
                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                                <i class="fa fa-calender"></i> 2018 - 2021
                            </h3>
                            <h4 className="timeline-title">Diploma</h4>
                            <p className="timeline-text">Sree Venkateswara Government Polytechnic College, Tirupati, Andhra Pradesh 
                                Diploma_Electrical and Electronics Engineering (DEEE) (81.63%)
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                                <i class="fa fa-calender"></i> 2017 - 2018
                            </h3>
                            <h4 className="timeline-title">Secondary Education</h4>
                            <p className="timeline-text">Jawahar Navodaya Vidyalaya, Rajampeta, Kadapa, Central Board of Secondary Education (7.8 CGPA)</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="experience padd-15">
                <h3 className="title" style={{color : theme === 'light' ? '#302e4d' : '#fff'}}>My Skills</h3>
                <div className="timeline shadow-dark">
                    <div className="skill-item padd-15">
                        <h5>HTML</h5>
                        <div className="progress">
                            <div className="progress-in" style={{width: '90%'}}></div>
                            <div className="skill-percent">90%</div>
                        </div>
                    </div>
                    <div className="skill-item padd-15">
                        <h5>CSS</h5>
                        <div className="progress">
                            <div className="progress-in" style={{width: '80%'}}></div>
                            <div className="skill-percent">80%</div>
                        </div>
                    </div>                        
                    <div className="skill-item padd-15">
                        <h5>SQL</h5>
                        <div className="progress">
                            <div className="progress-in" style={{width: '90%'}}></div>
                            <div className="skill-percent">90%</div>
                        </div>
                    </div>
                    <div className="skill-item padd-15">
                        <h5>JS</h5>
                        <div className="progress">
                            <div className="progress-in" style={{width: '80%'}}></div>
                            <div className="skill-percent">80%</div>
                        </div>
                    </div>
                    <div className="skill-item padd-15">
                        <h5>Python</h5>
                        <div className="progress">
                            <div className="progress-in" style={{width: '85%'}}></div>
                            <div class="skill-percent">85%</div>
                        </div>
                    </div>
                    <div className="skill-item padd-15">
                        <h5>Nodejs</h5>
                        <div className="progress">
                            <div className="progress-in" style={{width: '75%'}}></div>
                            <div className="skill-percent">75%</div>
                        </div>
                    </div>
                    <div className="skill-item padd-15">
                        <h5>Reactjs</h5>
                        <div className="progress">
                            <div className="progress-in" style={{width: '75%'}}></div>
                            <div className="skill-percent">75%</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

        </div>
    </section>
    </ThemeProvider>
  )
}

export default About
