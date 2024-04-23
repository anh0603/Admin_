
import './cardItem.css';
function CardItem(props) {
    const {title, style} = props
    return (
        <>
            <div className="card-item" style={style}>
                <div className='card-icon'>
                    {title && <h4>{title} </h4>}
                </div> 
            </div>
        </>
    )
}
export default CardItem;