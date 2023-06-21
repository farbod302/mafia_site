import { faInstagram, faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="content container">
                <div className="logo">
                    Mafia Verse
                </div>
                <div className="media">
                    <div className="media-content">
                        <div>
                            <FontAwesomeIcon
                            icon={faTelegram}
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon
                            icon={faYoutube}
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon
                            icon={faInstagram}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;