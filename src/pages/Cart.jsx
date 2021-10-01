import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../CartItem/CartItem'
import {claerCart, removeItem, plusItem, minusItem} from '../redux/actions/cart'


function Cart() {


    const dispatch = useDispatch();
    const {items, totalPrice, totalCount}=useSelector(({cartReduser})=>cartReduser);
    
    const group=Object.keys(items).map(key=>{
        const obj={
            item: items[key][0],
            count: items[key].length
        } 
        return  obj;
    });
 const onClearCart=()=>{
     dispatch(claerCart());
 }
 const onRemoveItem=(id)=>{
    dispatch(removeItem(id));
 };

 const onPlusItem=(id)=>{
    dispatch(plusItem(id));
 };

 const onMinusItem=(id)=>{
    dispatch(minusItem(id));
 };
    return (
        <div>
            <div>
            {
                group.map((obj)=>{
                    const i=obj.item.price*obj.count;
                    return (
                        <div>  
                           
                            <CartItem
                                id={obj.item.id} 
                                name={obj.item.name} 
                                price={obj.item.price} 
                                count={obj.count} 
                                sum={i}
                                onRemove={onRemoveItem}
                                onMinus={onMinusItem}
                                onPlus={onPlusItem}
                            />
                        </div>
                      )
                }
        
                
                )
            }
            </div>
            <div className="total__wrapper">
                <div className=' total total--bold'>Всего в заказе: </div><div className="total">{totalCount}</div>
                <br/>
                <div className=' total total--bold'>Итого: </div><div className="total">{totalPrice} ₽</div>
            </div>
           
            <div className='button--clean' onClick={onClearCart}>Очистить</div>
        </div>
    )
}

export default Cart
