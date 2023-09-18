import './arrivals.scss'
import Card from "../card/Card";
import img1 from '../card/cat-01.jpg'
import img2 from '../card/cat-02.jpg';
import img3 from '../card/cat-03.jpg';
const  Arrivals = () =>{
    return(
        <section className='arrivals'>
            <div className='container'>
                <div className='arrivals__header'>
                    <h2 className='arrivals__title'>NEW ARRIVALS</h2>
                </div>
                <div className='arrivals__cards'>
                    <Card title='Hoodies & Sweetshirt' textSecond='Explore Now!' img={img1} />
                    <Card title='Coats & Parkas' textSecond='Explore Now!' img={img2}/>
                    <Card title='Tees & T-Shirt' textSecond='Explore Now!' img={img3}/>
                </div>

            </div>
        </section>
    )
}
export default Arrivals
