import React from 'react'; 
import caesar from '../img/Caesar.png';
import PropTypes from 'prop-types';

function FoodBlock({id, onAddFood, name, price, size}) {
    const linkOnAddFood=()=>{
        const obj={
            id,
            name,
            price,
        };
        onAddFood(obj) ;
    }
    return (
        <div className="block">
            <div className="block__conteiner">
                <img className="block__img" alt="caesar" src={caesar}></img>
                <div className="block__title">{name}</div>
                <div className="block__price">{price} ₽/{size} гр</div>
                <div  className="choice">  
                    <a onClick={linkOnAddFood}>+ Добавить</a>
                </div>
            </div>
        </div>
    )
}
 FoodBlock.propTypes={
    name: PropTypes.string,
    price: PropTypes.number,
    size: PropTypes.number,
    onAddFood: PropTypes.func
};
FoodBlock.defaultProps={
    name: '---',
    price: 0,
    size: 0,
}
export default FoodBlock;
