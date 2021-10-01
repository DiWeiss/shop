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

export const plusItem=(id)=>({
    type: 'PLUS_ITEM',
    payload: id
});

export const minusItem=(id)=>({
    type: 'MINUS_ITEM',
    payload: id
});