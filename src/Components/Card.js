



const Card = (props ) => {

    return (
        <div  className="card bg-transparent col-lg-4 portfolio-card ">

       <img src={props.img} className="card-img-top" width="375" height="236" alt={props.alt}/>

        <div className="card-body">
        <h5 className="card-title">{props.jobTitle}</h5>

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