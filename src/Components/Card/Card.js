import arrow from "../../assets/images/Vector.png"
import "./Card.css"



 




const Card = (props ) => {

  let attachedClasses = ["card", "col-lg-4", "portfolio-card", props.bg];
     
  

   

    return (
        <div  className={attachedClasses.join(' ')}>

        <hr/>

        <h1>{props.companyName}</h1>

        <p>{props.jobDesc}</p>

        <div style={{textAlign: "end", position: "relative"}} >

          <button className="card-btn"> <img  style={{width:"18px",height: "18px"}} src={arrow} alt=""/></button>

        </div>
         

       

        </div>
    )
}


const TestimonialCard = ( props) => {

    return (

        <div className="col-12 testimonial-card">
              <div className="card text-dark mb-4">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-3 d-flex justify-content-center mb-4 mb-lg-0">
                      <img src={props.img} className="rounded-circle img-fluid shadow-1" alt={props.alt} width="80" height="80" />
                    </div>
                    <div className="col-lg-9">
                      <h4 className="testimonial-name"><strong>{props.name}</strong></h4>

                      <p className="text-muted fw-light testimonial-text">
                        {props.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

    )
}


export default Card;
export {TestimonialCard};