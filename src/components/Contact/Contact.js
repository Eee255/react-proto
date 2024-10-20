import React, { useRef }from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'
import ThemeProvider from '../../ThemeProvider';
import { useSelector } from 'react-redux';

const Contact = () => {
    const form =  useRef();
    const theme = useSelector((state) => state.theme);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_y35v1uq', 'template_t0oorj7', form.current, {
            publicKey: '6cjdVl5mCA-gS5vbk',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };

  return (
    <ThemeProvider>
    <section className="contact section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2 style={{color : theme === 'light' ? '#302e4d' : '#fff'}}>Contact Me</h2>
                        </div>
                    </div>
                    <h3 className="contact-title padd-15" >
                        Have you Any Questions ?
                    </h3>
                    <h4 className="contact-sub-title padd-15" style={{color : theme === 'light' ? '#302e4d' : '#fff'}}>I'M AT YOUR SERVICES</h4>
                    <div className="row">
                        <div className="contact-info-item padd-15">
                            <div className="icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <h4 style={{color : theme === 'light' ? '#302e4d' : 'blue'}}>Call Us On</h4>
                            <p style={{color : theme === 'light' ? '#302e4d' : '#fff'}}>+91 7675861351</p>
                        </div>
                        <div className="contact-info-item padd-15">
                            <div className="icon">
                                <i className="fa fa-map-marker-alt"></i>
                            </div>
                            <h4 style={{color : theme === 'light' ? '#302e4d' : 'blue'}}>Home</h4>
                            <p style={{color : theme === 'light' ? '#302e4d' : '#fff'}}>Kadapa</p>
                        </div>
                        <div className="contact-info-item padd-15">
                            <div className="icon">
                                <i class="fa fa-envelope"></i>
                            </div>
                            <h4 style={{color : theme === 'light' ? '#302e4d' : 'blue'}}>Email</h4>
                            <p style={{color : theme === 'light' ? '#302e4d' : '#fff'}}>sigebhanuprakash171@gmail.com</p>
                        </div>
                        <div className="contact-info-item padd-15">
                            <div className="icon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <h4 style={{color : theme === 'light' ? '#302e4d' : 'blue'}}>Whatsapp</h4>
                            <p style={{color : theme === 'light' ? '#302e4d' : '#fff'}}>+91 7675861351</p>
                        </div>
                    </div>
                    <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
                    <h4 className="contact-sub-title padd-15" style={{color : theme === 'light' ? '#302e4d' : 'blue'}}>I'M VERY RESPONSIVE TO MESSAGE</h4>
                    <div className="row">
                        <form className="contact-form padd-15" id="contact-form" ref={form} onSubmit={sendEmail}>
                            <div className="row">
                                <div className="form-item col-6 padd-15">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="user_name"
                                            id="name"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                </div>
                                <div class="form-item col-6 padd-15">
                                    <div class="form-group">
                                        <input type="email" className="form-control" name="user_email" id="name" placeholder="Email" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-12 padd-15">
                                    <div className="form-group">
                                        <textarea name="user_message" className="form-control" cols="30" rows="10" id="" placeholder="message" ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="forn-item col-12 padd-15">
                                    <button type="submit" className="btn">Send Message</button>
                                    <p className="contact-message" id="contact-message"></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
    </ThemeProvider>
  )
}

export default Contact
