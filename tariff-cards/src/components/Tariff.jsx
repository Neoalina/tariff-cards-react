import '../styles/tariff.css'

function Tariff(props) {
    let className = 'card-body';
    if (props.price) {
        className += 'card-body-bigger';
    }
    return (
        <div className="card-body">
            <h3 className="card-title">Безлимитный {props.price}</h3>
            <div className="card-price">
                <div className='money'>руб</div>
                <div className='price'>{props.price}</div>
                <div className='month'>/мес</div>
            </div>
            <div className="speed">
                до <span>{props.speed}</span>Мбит/сек
            </div>
            <div className="card-footer">Объем включенного трафика не ограничен</div>
        </div>)
}

export default Tariff;