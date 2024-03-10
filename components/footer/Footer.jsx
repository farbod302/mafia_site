import { faInstagram, faTelegram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="content container">
                <div className="logo">
                    Age of Mafia
                </div>
                <div className="media">
                    <div className="media-content">
                        <a target="_blank" href="https://t.me/greenverseco">
                            <FontAwesomeIcon
                                icon={faTelegram}
                            />
                        </a>
                        <a target="_blank" href="https://twitter.com/greenverseco">
                            <FontAwesomeIcon
                                icon={faTwitter}
                            />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/age_of_mafia">
                            <FontAwesomeIcon
                                icon={faInstagram}
                            />
                        </a>
                    </div>
                </div>
                <div className="e-nemad">
                    <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=467890&Code=sB7m3nSUdWF3rfsS5w27akVljRzx5os4'> <img referrerPolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=467890&Code=sB7m3nSUdWF3rfsS5w27akVljRzx5os4' alt=''  Code='sB7m3nSUdWF3rfsS5w27akVljRzx5os4'/></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;