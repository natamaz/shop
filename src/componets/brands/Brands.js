import './brands.scss';
import hm from './brandsImg/HM.png';
import amazon from'./brandsImg/Amazon.png';
import lacoste from'./brandsImg/Lacoste.png';
import levis from'./brandsImg/Levis.png';
import obey from'./brandsImg/Obey.png';
import shopify from'./brandsImg/Shopify.png';

const Brands = () =>{
    return(
        <section className='brands'>
            <div className='container'>
                <ul className='brands__list'>
                    <li><a href='#!'><img src={hm} alt='img'/></a></li>
                    <li><a href='#!'><img src={amazon} alt='img'/></a></li>
                    <li><a href='#!'><img src={lacoste} alt='img'/></a></li>
                    <li><a href='#!'><img src={levis} alt='img'/></a></li>
                    <li><a href='#!'><img src={obey} alt='img'/></a></li>
                    <li><a href='#!'><img src={shopify} alt='img'/></a></li>
                </ul>
            </div>
        </section>
    );
}
export default Brands;
