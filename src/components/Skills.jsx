import images1 from "./images/c.png"
import imgaes2 from "./images/cpp.png"
import images3 from "./images/html5.png"
import images4 from "./images/css3.png"
import images5 from "./images/js.png"
import images6 from "./images/react.png"
import images7 from "./images/nodejs.png"
import images8 from "./images/mongodb.png"
import { useState } from "react"
import { Link } from "react-router-dom"

function Skills() {
  const [ishovering, sethovering] = useState("hover Icon");
  const [ispercent, setpercent] = useState("");
  function handlemouseoverC() {
    sethovering("C");
    setpercent("70%");
  }
  function handlemouseoverCPP() {
    sethovering("C++");
    setpercent("80%");
  }
  function handlemouseoverHTML() {
    sethovering("HTML");
    setpercent("90%");
  }
  function handlemouseoverCSS() {
    sethovering("CSS");
    setpercent("80%");
  }
  function handlemouseoverJS() {
    sethovering("JS");
    setpercent("60%");
  }
  function handlemouseoverREACT() {
    sethovering("React.js");
    setpercent("50%");
  }
  function handlemouseoverNODEJS() {
    sethovering("Node.js");
    setpercent("60%");
  }
  function handlemouseoverMONGODB() {
    sethovering("Mongodb");
    setpercent("70%");
  }

  return (
    <div className="skills-section">
      <div className="skillsside">
        <div className="skillstext">
          <h1 className="skillstext2">SKILLS</h1>
        </div>
        <div className="img-section">
          <div className="img">
            <img onMouseOver={handlemouseoverC} className="c" src={images1} alt="r.img" />
            <img onMouseOver={handlemouseoverCPP} className="cpp" src={imgaes2} alt="" />
            <img onMouseOver={handlemouseoverHTML} className="html" src={images3} alt="" />
            <img onMouseOver={handlemouseoverCSS} className="css" src={images4} alt="" />
            <img onMouseOver={handlemouseoverJS} className="js" src={images5} alt="" />
            <img onMouseOver={handlemouseoverREACT} className="react" src={images6} alt="" />
            <img onMouseOver={handlemouseoverNODEJS} className="nodejs" src={images7} alt="" />
            <img onMouseOver={handlemouseoverMONGODB} className="mongodb" src={images8} alt="" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5"><defs><clipPath id="a"><path d="M0 38h38V0H0v38Z" /></clipPath></defs><g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)"><path fill="#dd2e44" d="M36 19c0-9.389-7.611-17-17-17S2 9.611 2 19s7.611 17 17 17 17-7.611 17-17" /></g></svg>
            <div className="textcontent">
              <h1 className="textskills">{ishovering}</h1>
              <h2 className="percentage">{ispercent}</h2>
            </div>
          </div>
          <Link to="/Navabout"><svg className="arrowleft" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g>
              <polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" />
              <polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" />
            </g>
          </svg></Link>
          <Link to="/Navproject"><svg className="arrowright" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g>
              <polygon points="11.707 3.293 10.293 4.707 17.586 12 10.293 19.293 11.707 20.707 20.414 12 11.707 3.293" />
              <polygon points="5.707 3.293 4.293 4.707 11.586 12 4.293 19.293 5.707 20.707 14.414 12 5.707 3.293" />
            </g>
          </svg></Link>
        </div>

      </div>
    </div>
  )
}
export default Skills;