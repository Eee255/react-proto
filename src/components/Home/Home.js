import React from "react";
import './Home.css'
import bhanu from '../../assets/IMG_4085-01.jpg'
import ThemeProvider from '../../ThemeProvider';
import { useSelector } from 'react-redux';

const Home = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <ThemeProvider>
        <section className="home section" style={{color : theme === 'light' ? '#504e70' : '#fff'}} id="home">
                <div className="container2">
                    <div className="row1 small">
                        <div className="home-info .padd-15">
                            <h3 className="hello" >Hello, my name is <span class="name">Bhanu Prakash</span></h3>
                            <div className="change-text">
                                <h3 className="text-animation">And I am <span className={theme === 'light' ? 'spandar' : 'spanligh' }></span></h3>
                            </div>
                            <div className="btn-box padd-15">
                                <a href="#cv" className="btn">Download cv</a>
                                <a href="#contact" className="btn">Hire me Now!</a>
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