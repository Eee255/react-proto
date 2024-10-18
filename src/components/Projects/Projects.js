import React from 'react'
import {AiFillCalendar} from 'react-icons/ai'
import youtube from '../../assets/youtube.png'
import biryani from '../../assets/biryani.jpeg'
import spotify from '../../assets/Spotify Icon.jpeg'
import hotstar from '../../assets/Disney+ hotstar.jpeg'
import ecommerce from '../../assets/التسوق عبر الإنترنت ناقلات التوضيح معزولة من الهاتف الذكي مع عربة التسوق على خلفية بيضاء, أيقونات الإنترنت, أيقونات الهواتف الذكية, أيقونات سلة التسوق PNG والمتجهات للتحميل مجانا.jpeg'
import './Projects.css'
import ThemeProvider from '../../ThemeProvider';
import { useSelector } from 'react-redux';


const Projects = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider>
    <section className="projects section" id="projects">
        <div className='container'>
          <div className="section-title padd-15">
            <h2 style={{color : theme === 'light' ? '#302e4d' : '#fff'}} >My Recent Work</h2>
          </div>
          <div className='timeline'>
      <div className='container1 left-container'>
        <img src={spotify} alt='' />
        <div className='text-box'>
            <div className='title'>
              <h2 style={{color : theme === 'light' ? '#333' : "#302e4d"}}>Static Spotify Website</h2>
              <p style={{color : theme === 'light' ? '#333' : "#302e4d"}}><AiFillCalendar /> 10hrs</p>
            </div>
            <p style={{color : theme === 'light' ? '#333' : "#302e4d"}}>Created a static Spotify clone using HTML and CSS, focusing on replicating the visual design of the Spotify platform. The project showcases a clean, modern layout with sections for playlists, albums, and artists. The code is structured to be maintainable and easy to understand, following best practices in CSS for styling and layout, utilizing Flexbox and Grid.</p>
            <div className='technologies'>
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <a href='https://eee255.github.io/static-spotify-clone/'>VISIT</a>
            <span className='left-container-arrow'></span>
        </div>
      </div>
      <div className='container1 right-container'>
      <img src={hotstar} alt='' />
        <div className='text-box'>
            <div className='title'>
              <h2 style={{color : theme === 'light' ? '#333' : "#302e4d"}}>Responsive Hotstar Website</h2>
              <p style={{color : theme === 'light' ? '#333' : "#302e4d"}}><AiFillCalendar /> 8hrs</p>
            </div>
            <p style={{color : theme === 'light' ? '#333' : "#302e4d"}}>Created a static Spotify clone using HTML and CSS, focusing on replicating the visual design of the Spotify platform. The project showcases a clean, modern layout with sections for playlists, albums, and artists. The code is structured to be maintainable and easy to understand, following best practices in CSS for styling and layout, utilizing Flexbox and Grid.</p>
            <div className='technologies'>
              <p>HTML</p>
              <p>CSS</p>
              <p>Responsive</p>
            </div>
            <a href='https://helpful-pika-331190.netlify.app/'>VISIT</a>
            <span className='right-container-arrow'></span>
        </div>
      </div>
      <div className='container1 left-container'>
      <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png' alt='' />
        <div className='text-box'>
            <div className='title'>
              <h2 style={{color : theme === 'light' ? '#333' : "#302e4d"}}>Web search application</h2>
              <p style={{color : theme === 'light' ? '#333' : "#302e4d"}}><AiFillCalendar /> 10hrs</p>
            </div>
            <p style={{color : theme === 'light' ? '#333' : "#302e4d"}}>Discover a custom Wikipedia search application designed to enhance information access with ease. Featuring a user-friendly interface, it delivers intuitive search results using HTML list elements styled with CSS, Bootstrap, and responsive design for a smooth experience across devices. Asynchronous fetch GET HTTP API calls ensure fast, relevant results, allowing users to quickly expand their knowledge. For added convenience, results can be opened in a new tab for further exploration. Whether for learning or quick reference, this application simplifies the search process, providing a seamless and efficient way to access desired information.</p>
            <div className='technologies'>
              <p>HTML</p>
              <p>CSS</p>
              <p>Responsive Design</p>
              <p>JavaScript</p>
              <p>Rest API calls</p>
              <p>Bootstrap</p>
            </div>
            <a href='bhanuwikipedia2.ccbp.tech'>VISIT</a>
            <span className='left-container-arrow'></span>
        </div>
      </div>
      <div className='container1 right-container'>
      <img src={ecommerce} alt='' />
        <div className='text-box'>
            <div className='title'>
              <h2 style={{color : theme === 'light' ? '#333' : "#302e4d"}}>Nxt Trendz - eCommerce Clone</h2>
              <p style={{color : theme === 'light' ? '#333' : "#302e4d"}}><AiFillCalendar /> 18hrs</p>
            </div>
            <p style={{color : theme === 'light' ? '#333' : "#302e4d"}}>Built Nxt Trendz, an innovative eCommerce platform modeled after Amazon and Flipkart, using React and RESTful API architecture. The application provides a secure, user-friendly shopping experience with features such as product browsing, filtering, and advanced search. Ensured user security and authentication through JWT tokens, secure REST API calls, and cookie-based session storage. The platform is designed with a responsive UI, offering seamless navigation across devices. It also includes user login, secure checkout processes, and data management, replicating the core functionalities of major e-commerce giants. </p>
            <div className='technologies'>
              <p>React</p>
              <p>CSS</p>
              <p>JWT authentication</p>
              <p>REST API</p>
              <p>cookies</p>
              <p>Responsive Design</p>
              <p>JavaScript</p>
              <p>API integration</p>
            </div>
            <a href='https://paracommerce.ccbp.tech'>VISIT</a>
            <span className='right-container-arrow'></span>
        </div>

      </div>
      <div className='container1 left-container'>
      <img src={youtube} alt='' />
        <div className='text-box'>
            <div className='title'>
              <h2 style={{color : theme === 'light' ? '#333' : "#302e4d"}}>Youtube Clone</h2>
              <p style={{color : theme === 'light' ? '#333' : "#302e4d"}}><AiFillCalendar /> 12hrs</p>
            </div>
            <p style={{color : theme === 'light' ? '#333' : "#302e4d"}}> Developed a fully responsive YouTube clone web application using the React library, featuring clean, maintainable, and modular code. The app integrates YouTube Data API for fetching real-time video data such as video suggestions, Comments, and channel information. It includes key functionalities like video playback, channel subscriptions, and trending videos. The UI is optimized for different devices, ensuring seamless responsiveness across desktops, tablets, and mobile devices. The project is designed with performance and scalability, employing best practices for code structure, state management, and API handling. </p>
            <div className='technologies'>
              <p>React</p>
              <p>YouTube Data API</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>fetch (for API requests)</p>
              <p>Responsive Design</p>
            </div>
            <a href='https://spiffy-liger-7509c6.netlify.app/'>VISIT</a>
            <span className='left-container-arrow'></span>
        </div>
      </div>
      <div className='container1 right-container'>
      <img src={ecommerce} alt='' />
        <div className='text-box'>
            <div className='title'>
              <h2 style={{color : theme === 'light' ? '#333' : "#302e4d"}}>Filtering eCommerce products</h2>
              <p style={{color : theme === 'light' ? '#333' : "#302e4d"}}><AiFillCalendar /> 8hrs</p>
            </div>
            <p style={{color : theme === 'light' ? '#333' : "#302e4d"}}>The eCommerce application, built with ReactJS, delivers a seamless user experience by effectively
managing product data. It features an intuitive search function that allows users to easily find products by
filtering items based on keywords and categories, ensuring a smooth and responsive shopping experience.</p>
            <div className='technologies'>
              <p>React</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>React Hooks</p>
            </div>
            <a href='https://66e7fdcf0c4251fc8300b092--loquacious-druid-b94727.netlify.app/'>VISIT</a>
            <span className='right-container-arrow'></span>
        </div>
      </div>
      <div className='container1 left-container'>
      <img src={biryani} alt='' />
        <div className='text-box'>
            <div className='title'>
              <h2 style={{color : theme === 'light' ? '#333' : "#302e4d"}}>The Hungry Box</h2>
              <p style={{color : theme === 'light' ? '#333' : "#302e4d"}}><AiFillCalendar /> 6hrs</p>
            </div>
            <p style={{color : theme === 'light' ? '#333' : "#302e4d"}}>The Hungry Box restaurant website is a fully responsive front-end built using HTML and Tailwind CSS for modern, clean design and efficient development. Tailwind’s utility-first approach ensures streamlined, maintainable code, making it easy to customize and style. The website features a mobile-first layout, optimized for both desktop and mobile devices with smooth transitions and responsiveness. Key elements include a visually appealing homepage, menu section, and contact form, all designed with clarity and user experience in mind. With its clean, modular codebase, the site offers fast load times and delivers a seamless, professional browsing experience.</p>
            <div className='technologies'>
              <p>HTML</p>
              <p>Tailwind CSS</p>
              <p>JavaScript</p>
              <p>Responsive</p>
            </div>
            <a href='https://eee255.github.io/hungrybox/'>VISIT</a>
            <span className='left-container-arrow'></span>
        </div>
      </div>
      <div className='container1 right-container'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVd-PTRgeQuyEPOVOcfr1QmyH2BnvOkkxkw&s' alt='' />
        <div className='text-box'>
            <div className='title'>
              <h2 style={{color : theme === 'light' ? '#333' : "#302e4d"}}>Netflix</h2>
              <p style={{color : theme === 'light' ? '#333' : "#302e4d"}}><AiFillCalendar /> 8hrs</p>
            </div>
            <p style={{color : theme === 'light' ? '#333' : "#302e4d"}}>The Netflix Clone project is a responsive front-end application built using HTML, CSS. It replicates Netflix's homepage design, offering a clean, intuitive interface. Key features include a responsive layout with Flexbox and Grid, ensuring seamless viewing across devices, and a sticky navbar for easy navigation. The site is optimized with media queries for fast loading and smooth performance on both desktop and mobile, delivering a modern, Netflix-like experience with clean, maintainable code.</p>
            <div className='technologies'>
              <p>HTML</p>
              <p>CSS</p>
              <p>Responsive</p>
            </div>
            <a href='netflixbhanu.ccbp.tech'>VISIT</a>
            <span className='right-container-arrow'></span>
        </div>
      </div>
          </div>
        </div>
    </section>
    </ThemeProvider>
  )
}

export default Projects
