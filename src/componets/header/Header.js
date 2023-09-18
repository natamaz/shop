import './header.scss'
import Logo from "../logo/Logo";
import NavHeader from "../nav/NavHeader";

function Header (){
    return(
        <header className='header'>
            <div className='container'>
                <div className='header__row'>
                 <Logo/>
                 <NavHeader/>

                </div>

            </div>

        </header>

    )
}
export default Header;
