import react, { useState } from 'react';
import '../styles/tariff.css'

function Tariff(props) {
    // let className = 'card-body';
    // if (props.price) {
    //     className += 'card-body-bigger';
    // }
    // const [checked, setChecked] = useState(false);

    // handleChange = () => {
    //     setChecked: !checked;
    // }
    return (
        <div className={'card-body' + (props.isSelected ? "selected" : "")} >
            <h3 className={props.theme.bg}>Безлимитный {props.price}</h3>
            <div className="card-price">
                <div className='money'>руб</div>
                <div className='price'>{props.price}</div>
                <div className='month'>/мес</div>
            </div>
            <div className="speed">
                до <span>{props.speed}</span>Мбит/сек
            </div>
            <div className="card-footer">Объем включенного трафика не ограничен</div>
        </div >)
}

export default Tariff;