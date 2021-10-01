import React from 'react'


function CartItem({name, count, sum, onRemove, id, onMinus, onPlus}) {

    const RemoveClick=()=>{
        onRemove(id);
    }

    const PlusClick=()=>{
        onPlus(id);
    }

    const MinusClick=()=>{
        onMinus(id);
    }

    return (
        <div className="list-wrapper">
            <div className="list-item">
                <div>{name}  </div>        
            </div>
            
            <div className="button button--round" onClick={PlusClick}>
               <div>+</div> 
            </div>
              <div  className="list-item__main--count"> {count}</div> 
            <div className="button button--round" onClick={MinusClick}>
               <div>-</div> 
            </div>
                <div className="list-item__main">{sum} ₽</div>
            <div className="button button--square" onClick={RemoveClick}>Х</div>
        </div>
    )
}

export default CartItem
