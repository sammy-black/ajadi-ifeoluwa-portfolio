
import { Link } from "react-router-dom"


const Navbar  = () => {


    return (
        <div >

   

          <div id="header">
          
            <Link to="/" className="float-md-start text-white text-decoration-none">
              <img src="/images/ajadi-logo.png" width="120" height="120" alt="Ajadi Ifeoluwa"/>
            </Link>
            <div className="container nav-container">
    
    
              <nav className="nav">
                <Link className="nav-link" to="//api.whatsapp.com/send?phone=+2349071682492&amp;text=Hi, Ajadi Ife" target="_blank">
    
                  <i className="social-icons fab fa-whatsapp"></i>
                </Link>
                <Link className="nav-link" to="#">
                  <i className="social-icons fab fa-twitter"></i>
                </Link>
                <Link className="nav-link" to="#">
                  <i className="social-icons fab fa-instagram"></i>
                </Link>
    
                <Link className="nav-link" to="#">
                  <i className="social-icons fab fa-behance"></i>
                </Link>
    
              </nav>
            </div>
          
    
    
      </div>

        <hr/>
  <div className="container email-box">
    <a className="email" href="mailto:Ajadiifeoluwa@yahoo.com">Ajadiifeoluwa@yahoo.com</a>
  </div>

  <hr></hr>

 </div>
    
    )
}

export default Navbar;