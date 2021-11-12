import React from 'react'
import './cartItem.scss'

function CartItem({name, count, sum, onRemove, id, onDecrement, onIncrement}) {

    const onHendlerRemoveClick=()=>{
        onRemove(id);
    }

    const onHendlerIncrementClick=()=>{
        onIncrement(id);
    }

    const onHendlerDecrementClick=()=>{
        onDecrement(id);
    }

    return (
        <div className="list-wrapper">
            <div className="list-item">
                <div>{name}  </div>        
            </div>
            
            <div className="button button--round" onClick={onHendlerIncrementClick}>
               <div>+</div> 
            </div>
              <div  className="list-item__main--count"> {count}</div> 
            <div className="button button--round" onClick={onHendlerDecrementClick}>
               <div>-</div> 
            </div>
                <div className="list-item__main">{sum} ₽</div>
            <div className="button button--square" onClick={onHendlerRemoveClick}>Х</div>
        </div>
    )
}

export default CartItem
