import './navbar.css';
import navlogo from '../assets/navlogo.svg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={navlogo} alt='image'></img>
                <h1>GeekFoods</h1>
            </div>
            <div className='navbar-items'>
                <ul className='ul-items'>
                    <li><a className='first-li' href='#'>Home</a></li>
                    <li><a href='#'>Quote</a></li>
                    <li><a href='#'>Resturants</a></li>
                    <li><a href='#'>Foods</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
            <div className='nav-btn'>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Navbar;
