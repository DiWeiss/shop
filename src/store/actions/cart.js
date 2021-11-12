export const addFood=(foodObj)=>({
    type: 'ADD_FOOD_CART',
    payload: foodObj
});

export const claerCart=()=>({
    type: 'CLEAR_CART',
});

export const removeItem=(id)=>({
    type: 'REMOVE_ITEM',
    payload: id
});

export const incrementItem=(id)=>({
    type: 'INCREMENT_ITEM',
    payload: id
});

export const decrementItem=(id)=>({
    type: 'DECREMENT_ITEM',
    payload: id
});