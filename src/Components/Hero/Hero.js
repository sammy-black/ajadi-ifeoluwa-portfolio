import "./Hero.css"
import ajadi from "../../assets/images/Group.png"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const Hero = () =>{


    return (

        <div id="header-hero">

        <div className="text-center entry-title">
          <h1 className="dark-text mt-5"> I am</h1>
          <div className="image-box">

             <img className="ajadi-img" src={ajadi} alt="ajadi ifeoluwa"/>
              
          </div>
           
          <p className="text-muted desc-text">
              Over the years I i have worked on several projects with various Brands, Organizations including NGOs and individuals to attract potential cutomers/client/users to the brand and also retain older ones to generate more sale and revenue
          </p>
    
          <div className="spacer">
    
          </div>
          <div className="lead">
              <a href="/#"  className="MuiButtonBase-root">  
                Download CV   <ArrowOutwardIcon />
              </a>
              <a href="#portfolio"  className="MuiButtonBase-root">  
                View Portfolio  <ArrowDownwardIcon />
              </a>
    
          </div>
        </div>
    
      </div>


    );
}

export default Hero;