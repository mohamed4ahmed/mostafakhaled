import React, { useState, useEffect } from "react";
import avatar from "../../assets/img/chan-dung-edit.png";
import avatarIcon from "../../assets/img/avatar.webp";
import "./styles.css";
import { Link } from "react-router-dom";
import Greeting from "../../components/greeting";
import { FaArrowCircleUp } from "react-icons/fa";
import Spinner from "../../components/Spinner";

const Information = () => {
  const [visible, setVisible] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <div className="app">
      {spinner ? (
        <Spinner />
      ) : (
        <>
          <div className="scrollToTop">
            <FaArrowCircleUp
              onClick={scrollToTop}
              style={{ display: visible ? "inline" : "none" }}
            />
          </div>

          <div className="intro-wrapper1">
            <div className="nav-wrapper">
              <div className="nav-wrapper-left__dots-wrapper">
                <div className="browser-dot dot-1"></div>
                <div className="browser-dot dot-2"></div>
                <div className="browser-dot dot-3"></div>
              </div>
            </div>

            <div className="information">
              <img src={avatar} alt="avatar" />
              <h2>Mostafa Khaled</h2>

              <div className="social">
                <Link to="/portfolio">
                  <div className="icon">
                    <img src={avatarIcon} alt="website" />
                  </div>
                  <p>My Profile</p>
                  <div className=""></div>
                </Link>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="mailto:mostafa5646@yahoo.com"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/gmail-new.png"
                      alt="email"
                    />
                  </div>
                  <p>Email</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="tel:+966544705012"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/ios/50/000000/apple-phone.png"
                      alt="phone-saudi"
                    />
                    <img
                      src="https://img.icons8.com/color/48/000000/saudi-arabia.png"
                      alt="phone-saudi"
                    />
                  </div>
                  <p>Phone</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="tel:+201281682027"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/egypt-circular.png"
                      alt="phone-egypt"
                    />
                    <img
                      src="https://img.icons8.com/clouds/100/000000/apple-phone.png"
                      alt="phone"
                    />
                  </div>
                  <p>Phone</p>
                  <div className=""></div>
                </a>
              </div>

              {/* <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://twitter.com/RaqyahSteel"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/twitter.png"
                      alt="twitter"
                    />
                  </div>
                  <p>Twitter</p>
                  <div className=""></div>
                </a>
              </div> */}

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.facebook.com/mostafa.mohammed.khaled"
                  aria-label="Facebook"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/dusk/64/000000/facebook-new--v2.png"
                      alt="facebook"
                    />
                  </div>
                  <p>Facebook</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noreferrer"
                  target="__blank"
                  href="https://www.messenger.com/t/mostafa.mohammed.khaled/?messaging_source%3Apages%message_shortlink"
                  // href="https://www.facebook.com/messages/t/mostafa.mohammed.khaled"
                  aria-label="Messenger"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/fluency/50/000000/facebook-messenger--v2.png"
                      alt="messenger"
                    />
                  </div>
                  <p>Messenger</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  // href="https://www.instagram.com/mostafamekhaled/"
                  href="https://instagram.com/mostafamekhaled/?utm_medium=copy_link"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/instagram-new--v3.png"
                      alt="instagram"
                    />
                  </div>
                  <p>Instagram</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.linkedin.com/in/mostafa-khaled-10606566"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/linkedin.png"
                      alt="linkedin"
                    />
                  </div>
                  <p>Linkedin</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.linkedin.com/messaging/thread/2-NDdjMDE5YzctY2U2YS00MGJmLThiMjQtOWE5MzI2MjEzZjhjXzAxMg==/"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/linkedin.png"
                      alt="linkedin-message"
                    />
                  </div>
                  <p>Linkedin Chat</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a href="whatsapp://send?text=welcome-let-your-messange&phone=+966544705012">
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/whatsapp.png"
                      alt="whatsapp"
                    />
                  </div>
                  <p>WhatsApp</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a href="whatsapp://send?text=welcome&phone=+201281682027">
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/whatsapp.png"
                      alt="whatsapp2"
                    />
                  </div>
                  <p>WhatsApp 2</p>
                  <div className=""></div>
                </a>
              </div>

              <Greeting />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Information;
