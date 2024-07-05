import { useNavigate } from "react-router-dom";

const Footer = (FooterProps) => {
    const logoFacebook = FooterProps.logoFacebook;
    const logoTwitter = FooterProps.logoTwitter;
    const logoTiktok = FooterProps.logoTiktok;
    const logoCyber = FooterProps.logoCyber;
    const logoInstagram = FooterProps.logoInstagram;

    const navigate = useNavigate();
    const faceClick = () => {
        navigate('/https://www.facebook.com/?locale=tr_TR')
    }

    return (
        <div className="footer commonWidth">
            <div className="info">
                <div className="logoText">
                    <img src={logoCyber} alt="" />
                    <p>We are a residential interior design firm located in Portland. Our <br /> boutique-studio offers more than</p>
                </div>
                <div className="section1">
                    <p className="commonColorWhite">Services</p>
                    <p>Bonus program</p>
                    <p>Gift cards</p>
                    <p>Credit and payment</p>
                    <p>Service contracts</p>
                    <p>Non-cash account</p>
                    <p>Payment</p>
                </div>
                <div className="section2">
                    <p className="commonColorWhite">Assistance to the buyer</p>
                    <p>Find and order</p>
                    <p>Terms of delivery</p>
                    <p>Exchange and return of goods</p>
                    <p>Guarantee</p>
                    <p>Frequently asked questions</p>
                    <p>Terms of use of the site</p>
                </div>
            </div>
            <div className="socialIcons">
                <img onClick={faceClick} src={logoFacebook} alt="" />
                <img src={logoInstagram} alt="" />
                <img src={logoTiktok} alt="" />
                <img src={logoTwitter} alt="" />
            </div>
        </div>
    );
}
export default Footer;