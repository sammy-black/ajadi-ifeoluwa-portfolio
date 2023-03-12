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
              {/* <img className="my-4 text-logo" src="images/ajadi-ifeoluwa.png" alt="Ajadi Ifeoluwa"/>
                <img className="circle-img-lg ajadi-1" src="images/ajadi/ajadi1.png" alt="ajadi"/>
                <img className="circle-img ajadi-2" src="images/ajadi/ajadi2.png" alt="ajadi"/>
                <img className="circle-img ajadi-3" src="images/ajadi/ajadi3.png" alt="ajadi"/>
                <img className="circle-img ajadi-4" src="images/ajadi/ajadi4.png" alt="ajadi"/>
                <img className="circle-img ajadi-5" src="images/ajadi/ajadi5.png" alt="ajadi"/> */}
          </div>
    
          {/* <!-- <h2 class="dark-text">a designer based in Nigeria with
            Vast knowledge on Print and Digital design</h2> --> */}
    
          <div className="spacer">
    
          </div>
          <div className="lead">
              <a href="/#"  className="MuiButtonBase-root">  
                Download Cv   <ArrowOutwardIcon />
              </a>
              <a href="#portfolio"  className="MuiButtonBase-root">  
                View Portfolio  <ArrowDownwardIcon />
              </a>

            {/* <a href="/#"   className="btn btn-lg btn-secondary fw-bold border-white bg-white text-dark" rel="noreferrer">
              Download Cv <span style={{marginLeft: "15px" }} className="btn-label"> <img src="images/arrowup.png" alt=""/></span> </a>
            <a href="#portfolio" className="btn btn-lg btn-secondary fw-bold border-white bg-white text-dark">
              View Portfolio <span style={{marginLeft: "15px" }} className="btn-label"> <img src="images/arrowdown.png" alt=""/></span>
            </a> */}
    
          </div>
        </div>
    
      </div>


    );
}

export default Hero;