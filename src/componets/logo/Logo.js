import './logo.scss';
import logo from './logo.svg';
function Logo() {
    return(
        <div className='header__logo'>
            <img src={logo} about='logo'/>
            <span>FASHION</span>
        </div>
    )
}
export default Logo;
