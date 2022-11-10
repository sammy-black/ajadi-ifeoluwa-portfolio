
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const Partners = () => {


    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ];

    

    return (
        <div id="trusted-clients">
    <div className="container text-center mt-5">

      <h1>Trusted By</h1>

      <Slide slidesToScroll={1} slidesToShow={1} indicators={false}  responsive={responsiveSettings}>

            <div className="each-slide-effect">
                <div >
                <img style={{width: "174", height: "60px"}} src="/images/partners/bitnob.png" alt="bitnob"/>
                </div>
            </div>

            <div className="each-slide-effect">
                <div>
                <img style={{height: "100px"}} src="/images/partners/pz-cussons.png" alt="cussons"/>  
                </div>
            </div>

            <div className="each-slide-effect">
                <div >
                <img style={{width: "150", height: "100px"}} src="/images/partners/baptist-press.png" alt="baptist-press"/> 
                </div>
            </div>

            <div className="each-slide-effect">
                <div>
                <img style={{width: "194px", height: "50px"}} src="/images/partners/digiOats.png" alt="digioats"/>
                </div>
            </div>


            <div className="each-slide-effect">
                <div>
                <img style={{width: "150", height: "100px"}} src="/images/partners/thermcool.png" alt="thermcool"/>
                </div>
            </div>

            <div className="each-slide-effect">
                <div >

                <img style={{width: "150", height: "100px"}} src="/images/partners/bp-production.png" alt="bp-production"/>
                    
                </div>
            </div>

            {/* <div className="each-slide-effect">
                <div>
                <img src="/images/partners/frillxtra.png" alt="frillxtra"/>  
                </div>
            </div> */}
      


      </Slide>





    </div>

  </div>
    )
}

export default Partners;