import "./Partners.css";
import "react-slideshow-image/dist/styles.css";
import { Animation } from "../../animation";

const Partners = () => {
  return (
    <div className="trusted-clients">
      <div className="container text-center mt-5">
        <h1>Trusted By</h1>

        <div className="partner-container">
          <Animation type="fade-up">
            <img
              className="bitnob"
              src="/images/partners/bitnob.png"
              alt="bitnob"
            />
            <img
              className="cussons"
              src="/images/partners/pz-cussons.png"
              alt="cussons"
            />
            <img
              className="baptist-press"
              src="/images/partners/baptist-press.png"
              alt="baptist-press"
            />
            <img
              className="digi-oats"
              src="/images/partners/digiOats.png"
              alt="digioats"
            />
            <img
              className="thermcool"
              src="/images/partners/thermcool.png"
              alt="thermcool"
            />
            <img
              className="bp-production"
              src="/images/partners/bp-production.png"
              alt="bp-production"
            />
          </Animation>
        </div>
      </div>
    </div>
  );
};

export default Partners;
