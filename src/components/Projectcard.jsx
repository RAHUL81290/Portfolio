import AOS from "aos";
import 'aos/dist/aos.css';
AOS.init();
function Projectcard(props) {
    return(
    <div className="project-container">
        <div data-aos="fade-right" data-aos-duration="1500" className="box1 box"><img src={props.img} alt="wow.png" /></div>
        <div data-aos="fade-up" data-aos-duration="1500" className="box2 box">
            <h1>{props.name}</h1>
            <a href={props.gitlink}>GitHub</a>
        </div>
        
    </div>
    )
}
export default Projectcard;