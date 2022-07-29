import { Link } from "react-router-dom";
import Projectcard from "./Projectcard";
import Collection from "./Collection";

function Project() {
    return (
        <div className="project-section">
            <h1 className="projecttext">Project</h1>
            {Collection.map((createcard)=>(
                <Projectcard
                  key={createcard.id}
                  name={createcard.name}
                  img={createcard.img}
                  gitlink={createcard.gitlink}
                />
            ))}




            <Link to="/Navskills"><svg className="arrowleft arrowleftproject" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g>
                    <polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" />
                    <polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" />
                </g>
            </svg></Link>
        </div>
    )
}
export default Project;