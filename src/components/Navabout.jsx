import About from "./About";
import Navbar from "./Navbar";
function Navabout()
{
    return(
        <>
           <div className="navbarSection">
              <Navbar/>
              <About/>
           </div>
        </>
    )
}
export default Navabout;