import { Animation } from "../animation";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Behance from "../assets/images/behance.png";

const Footer = () => {
  const iconLists = [
    {
      icon: WhatsAppIcon,
      url: "https://api.whatsapp.com/send?phone=+2349071682492&amp;text=Hi, Ajadi Ife",
    },

    {
      icon: TwitterIcon,
      url: "https://www.twitter.com/",
    },

    {
      icon: InstagramIcon,
      url: "https://www.instagram.com",
    },

    // {
    //   icon: Behance,
    //   url: "https://www.behance.com/",
    // },
  ];

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Animation type="fade">
              <img src="images/ajadi-david.png" alt="ajadi david" />
            </Animation>
          </div>

          <div className="col-lg-6 footer-logo-box">
            <div className="icon-email-footer">
              <nav className="nav nav-masthead footer-icon">
                {iconLists.map((item) => {
                  return (
                    <a key={item.url}
                      className="nav-link"
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <item.icon />
                    </a>
                  );
                })}

                <a className="nav-link" href="https://www.behance.com/">
                   <img className="social-icon" src={Behance} alt="behance"/>
                </a>
              </nav>

              <div className="footer-email">
                <a className="email" href="mailto:Ajadiifeoluwa@yahoo.com">
                  Ajadiifeoluwa@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
