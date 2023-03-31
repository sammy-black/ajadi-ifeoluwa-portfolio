import { TestimonialCard } from "./Card/Card";
import testimonialData from "../testimonialData";
import { Animation } from "../animation";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <div className="row align-items-center testimonial-container">
      
        <div className="col-lg-6 left-testimonial-container">
        <Animation type="fade-right">
          <h1 className="text-start mb-4 ">What they say</h1>
          <p className="text-muted text-start desc-text">
            Syntaxes are rules a programming language must adhere to. Every
            programming language has it's own syntax in which everything in the
            language revolves around. Below is a function syntax in JavaScript
          </p>
          </Animation>
        </div>
      
        
        <div className="col-lg-6 testimonial-scroll">
        <Animation type="fade-left">
          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <div className="row d-flex justify-content-center w-100 test-row">
              {testimonialData.map((testimonial) => {
                return (
                  <TestimonialCard
                    key={testimonial.id}
                    alt={testimonial.name}
                    img={testimonial.userImg}
                    desc={testimonial.description}
                  />
                );
              })}
            </div>
          </div>
          </Animation>
        </div>
      
      </div>
    </div>
  );
};

export default Testimonial;
