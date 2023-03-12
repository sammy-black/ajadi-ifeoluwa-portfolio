
import { Link } from "react-router-dom"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import behance from "../../assets/images/behance.png"
import "./Navbar.css"

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
    
                  <WhatsAppIcon />
                </Link>
                <Link className="nav-link" to="#">
                  <TwitterIcon />
                </Link>
                <Link className="nav-link" to="#">
                  <InstagramIcon />
                </Link>
    
                <Link className="nav-link" to="#">
                  <img className="behance"  src={behance} alt="behance"/>
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