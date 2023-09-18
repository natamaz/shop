
import './navHeader.scss'
import Button from "../button/Button";
function NavHeader() {
    return(
        <div className='header__nav'>
            <ul>
                <li><a href='#!'>CATALOGUE</a></li>
                <li><a href='#!'>FASHION</a></li>
                <li><a href='#!'>FAVOURITE</a></li>
                <li><a href='#!'>LIFESTYLE</a></li>
            </ul>
            <Button link='#!' titleBtn='SIGN UP'/>

        </div>
    )
}
export default NavHeader;
