const initialState={
    items:{},
    totalPrice: 0,
    totalCount: 0
};

const cart=(state=initialState, action)=>{
    if (action.type === 'ADD_FOOD_CART') {
   
    const newObj={
    ...state.items,
    [action.payload.id]: !state.items[action.payload.id]
    ? [action.payload]
    : [...state.items[action.payload.id], action.payload,],
};

const totalCount = [].concat.apply([], Object.values(newObj)).length;
const totalPrice = [].concat.apply([], Object.values(newObj)).reduce((sum, obj)=>obj.price+sum, 0)

      return {
        ...state,
        items: newObj,
        totalCount,
        totalPrice
      };
    }
    if (action.type === 'CLEAR_CART'){
      return {
        totalPrice: 0,
        totalCount: 0,
        items: {},
      };
    };

    if (action.type === 'PLUS_ITEM'){
      
      const newObjItems = [
        ...state.items[action.payload],
        state.items[action.payload][0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: newObjItems,
        
      };
      const totalCount = [].concat.apply([], Object.values(newItems)).length;
      const totalPrice = [].concat.apply([], Object.values(newItems)).reduce((sum, obj)=>obj.price+sum, 0)
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    };

    if (action.type === 'MINUS_ITEM'){
      const oldItems = state.items[action.payload];
      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: newObjItems,
      };
      const totalCount = [].concat.apply([], Object.values(newItems)).length;
      const totalPrice = [].concat.apply([], Object.values(newItems)).reduce((sum, obj)=>obj.price+sum, 0)
      return {
        ...state,
        items: newItems,
totalPrice,
totalCount,
      };
    };

    if (action.type === 'REMOVE_ITEM'){
    
      const newItems={
        ...state.items
      }

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalCount:[].concat.apply([], Object.values(newItems)).length,
        totalPrice: [].concat.apply([], Object.values(newItems)).reduce((sum, obj)=>obj.price+sum, 0),
      };
    };

    return state;
  };

export default cart;