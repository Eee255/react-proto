import React from "react";
import './Home.css'
import bhanu from '../../assets/IMG_4085-01.jpg'
import ThemeProvider from '../../ThemeProvider';
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Home = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <ThemeProvider>
        <section className="home section" style={{color : theme === 'light' ? '#504e70' : '#fff'}} id="home">
                <div className="container2">
                    <div className="row1 small">
                        <div className="home-info .padd-15">
                            <h3 className="hello-container">Hello </h3>
                            <h3 className="hello" >my name is <span class="name">Bhanu Prakash</span></h3>
                            <div className="change-text">
                                <h3 className="text-animation">And I am <span className={theme === 'light' ? 'spandar' : 'spanligh' }></span></h3>
                            </div>
                            <div className="icons">
                                <a href="https://github.com/Eee255" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                <a href="https://www.instagram.com/bhanu_prakash_71/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram /></a>
                                <a href="https://www.linkedin.com/in/bhanu-prakash-2b3610259/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            </div>
                            <div className="btn-box padd-15">
                                <a href="https://drive.google.com/file/d/13WE06DsaasI5AeKtblubS521vHN9s_Ah/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn">Download cv</a>
                                <a href="https://drive.google.com/file/d/13WE06DsaasI5AeKtblubS521vHN9s_Ah/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn">Hire me Now!</a>
                            </div>
                        </div>
                        <div className="home-img .padd-15">
                            <img src={bhanu} alt="" />
                        </div>
                    </div>
                </div>
        </section>
        </ThemeProvider>
    )
}

export default Home;