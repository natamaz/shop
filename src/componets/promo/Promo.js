
import './promo.scss';
import promoImg from '../../img/images/header-img.jpg'
import Button from "../button/Button";
const Promo = () => {
    return (
        <section className='promo'>
            <div className='container'>
                <div className='promo__content'>
                    <div className='promo__text'>
                        <h1 className='promo__title'>
                            <span className='highlight'><span>LET’S</span></span><br/>
                            EXPLORE<br/>
                            <span className='highlight  yellow'><span>UNIQUE</span></span><br/>
                            CLOTHES.</h1>

                        <div className='promo__desc'>Live for Influential and Innovative fashion!</div>
                        <div className='promo__btn-wrapper'>
                            <Button link='#!' titleBtn='Shop Now'/>
                        </div>

                    </div>
                    <div className='promo__img'>
                        <img src={promoImg} alt='img'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promo;
