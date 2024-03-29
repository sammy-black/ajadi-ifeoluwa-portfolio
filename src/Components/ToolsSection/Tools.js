import { Animation } from "../../animation";
import "./Tools.css"


const Tools = () => {

    return (
        <div id="tools">
        <div className="container text-center mt-5">
        <Animation type="fade">
            <h1>Tools</h1>
            </Animation>
        <div className="tools-list">
          <Animation type="fade-up">
          <img src="/images/tools-img/ps.png" alt="photoshop"/>
          <img src="/images/tools-img/figma.png" alt="figma"/>
          <img src="/images/tools-img/adobe-illustrator.png" alt="adobe-illustrator"/>
          <img src="/images/tools-img/adobe-indesign.png" alt="adobe-indesign"/>
          <img className="corel" src="/images/tools-img/img-remove.png" alt="img-remove"/>
          <img src="/images/tools-img/facebook.png" alt="facebook"/>
          <img src="/images/tools-img/adobe.png" alt="adobe"/>
          </Animation>
        </div>
        </div>
        </div>
    )
}


export default Tools;