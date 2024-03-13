import './footer.css';
import footerLogo from '../assets/footer-logo.svg';
import fb from '../assets/footer-fb.svg';
import insta from '../assets/footer-insta.svg';
import twitter from '../assets/footer-twitter.svg';
import github from '../assets/footer-github.svg';
import web from '../assets/footer-web.svg';

const Footer = () => {
    return(
        <div className='footer'>
            <img className='footer-logo' src={footerLogo}></img>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
            <div className='footer-nav'>
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>History</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='logos'>
                <img src={fb}></img>
                <img src={insta}></img>
                <img src={twitter}></img>
                <img src={github}></img>
                <img src={web}></img>
            </div>
        </div>
    )
}



export default Footer;