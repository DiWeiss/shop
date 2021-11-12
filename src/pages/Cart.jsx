import React, {useEffect, useState}from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import {
  claerCart,
  removeItem,
  incrementItem,
  decrementItem,
} from "../store/actions/cart";

function Cart({count}) {
  const dispatch = useDispatch();
  const group = useSelector(({ cartReduser }) => cartReduser);

const [price, setPrice]=useState(0);

useEffect(()=>{
  let temp=0
   if (group.length>0){temp=group.reduce((acc, curr)=>{
return acc+curr.price*curr.count;
   },0)
 }
setPrice(temp);})
  
  
  const onClearCart = () => {
    dispatch(claerCart());
  };
  const onHendlerRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const onHendlerIncrementItem = (id) => {
    dispatch(incrementItem(id));
  };

  const onHendlerDecrementItem = (id) => {
    dispatch(decrementItem(id));
  };
 
  return (
    
    <div>
      <div>
        {group.map((obj) => {
          const i = obj.price*obj.count;
          return (
            <div>
              <CartItem
                id={obj.id}
                name={obj.name}
                price={obj.price}
                count={obj.count}
                sum={i}
                onRemove={onHendlerRemoveItem}
                onDecrement={onHendlerDecrementItem}
                onIncrement={onHendlerIncrementItem}
              />
            </div>
          );
        })}
      </div>
      <div className="total__wrapper">
        <div className=" total total--bold">Всего в заказе: </div>
        <div className="total">{count}</div>
        <br />
        <div className=" total total--bold">Итого: </div>
        <div className="total">{price} ₽</div>
      </div>

      <div className="button--clean" onClick={onClearCart}>
        Очистить
      </div>
    </div>
  );
}

export default Cart;
