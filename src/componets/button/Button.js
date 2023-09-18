import './button.scss';

const Button = ({link, titleBtn}) => {
    return(
        <a href={link} className='btn'>{titleBtn}</a>

    )
}
export default Button
