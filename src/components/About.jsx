import { Link } from "react-router-dom";
import images from "./images/1655984454929-modified.png"
import file from "./images/ResumeRahul.pdf";
import 'animate.css';
function About() {
  return (
    <div className="about-section">
      <h1 className="abouttext">About me</h1>
      <div className="about-container">
        <img className="myimg" src={images} alt="Logo" />
        <div>
          <p className="mytext animate__animated animate__fadeInDown">Hello! My name is Rahul Kumar I am currently percuing my B.Tech(CSE)👨‍💻degree from Lovely Professional University. I am intrusted in developing new things related to the current technology. Recently I have created couple of projects related to Argument reality and games using Unity gaming engine, and currently I am working on my web development skills.😁</p>
          <a className="btndiv" href={file} download="ResumeRahul">
            <button className="btn">Download CV</button>
          </a>
        </div>
      </div>
      <div className="wave-section">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>
      <Link to="/"><svg className="arrowleft" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g>
          <polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" />
          <polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" />
        </g>
      </svg></Link>
      <Link to="/Navskills"><svg className="arrowright" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g>
          <polygon points="11.707 3.293 10.293 4.707 17.586 12 10.293 19.293 11.707 20.707 20.414 12 11.707 3.293" />
          <polygon points="5.707 3.293 4.293 4.707 11.586 12 4.293 19.293 5.707 20.707 14.414 12 5.707 3.293" />
        </g>
      </svg></Link>
    </div>

  )
}
export default About;