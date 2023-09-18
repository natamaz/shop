import './card.scss'

import arrow from './arrow.svg';
function Card(props) {
    return (
        <div className='card'>
            <a href='!#' className='card__link'></a>
                <img className='card__img' src={props.img} alt='img'/>
                <div className='card__body'>
                    <div className='card__text'>
                        <div className='card__title'>{props.title}</div>
                        <div className='card__text-second'>{props.textSecond}</div>
                    </div>
                    <div className='card__icon'>
                        <img src={arrow} alt='img'/>
                    </div>
                </div>


        </div>
    );
}

export default Card;
