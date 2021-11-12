const initialState={
    items:{},
    totalPrice: 0,
    totalCount: 0
};
let newObj={};
let totalCount=0;
let totalPrice=0;
let newObjItems={};
let newItems={};
const cart=(state=initialState, action)=>{
  switch (action.type){
    case('ADD_FOOD_CART'):
    newObj={
      ...state.items,
      [action.payload.id]: !state.items[action.payload.id]
      ? [action.payload]
      : [...state.items[action.payload.id], action.payload,],
  };
  
   totalCount = [].concat.apply([], Object.values(newObj)).length;
   totalPrice = [].concat.apply([], Object.values(newObj)).reduce((sum, obj)=>obj.price+sum, 0)
  
        return {
          ...state,
          items: newObj,
          totalCount,
          totalPrice
        };
        case('CLEAR_CART'):
        return {
          totalPrice: 0,
          totalCount: 0,
          items: {},
        };
        case('PLUS_ITEM'):
         newObjItems = [
          ...state.items[action.payload],
          state.items[action.payload][0],
        ];
         newItems = {
          ...state.items,
          [action.payload]: newObjItems,
          
        };
        totalCount = [].concat.apply([], Object.values(newItems)).length;
        totalPrice = [].concat.apply([], Object.values(newItems)).reduce((sum, obj)=>obj.price+sum, 0)
        return {
          ...state,
          items: newItems,
          totalCount,
          totalPrice,
        };
        case('MINUS_ITEM'):
        const oldItems = state.items[action.payload];
         newObjItems =
          oldItems.length > 1 ? state.items[action.payload].slice(1) : oldItems;
        newItems = {
          ...state.items,
          [action.payload]: newObjItems,
        };
        totalCount = [].concat.apply([], Object.values(newItems)).length;
        totalPrice = [].concat.apply([], Object.values(newItems)).reduce((sum, obj)=>obj.price+sum, 0)
        return {
          ...state,
          items: newItems,
  totalPrice,
  totalCount,
        };

case('REMOVE_ITEM'):
 newItems={
  ...state.items
}

delete newItems[action.payload];

return {
  ...state,
  items: newItems,
  totalCount:[].concat.apply([], Object.values(newItems)).length,
  totalPrice: [].concat.apply([], Object.values(newItems)).reduce((sum, obj)=>obj.price+sum, 0),
};
  }
    
   

   

    

    

    return state;
  };

export default cart;