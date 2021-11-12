const initialState = [];

const cart = (state = initialState, action) => {
  let newArr=[];
  let newItem={};
  switch (action.type) {

    case "ADD_FOOD_CART":
      newItem = state.filter((item) => {
        return item.id === action.payload.id;
      });
      if (newItem.length === 0) {
        if (state.length === 0) {
          newArr = [action.payload];
        } else {
          newArr = state.slice();
          newArr.push(action.payload);
        }
      } else {
        newArr = state.slice();
        newArr.map((item) => {
          if (item.id === action.payload.id) item.count++;
        });
      }
      return newArr;

    case "CLEAR_CART":
      return [];

    case "INCREMENT_ITEM":
      newArr = state.slice();
      newArr.map((item) => {
        if (item.id === action.payload) item.count++;
      });

      return newArr;

    case "DECREMENT_ITEM":
      newArr = state.slice();
      newArr.map((item) => {
        if (item.id === action.payload && item.count > 1) item.count--;
      });
      return newArr;

    case "REMOVE_ITEM":
      newArr= state.slice();
      newItem = newArr.filter((item) => {
        return item.id !== action.payload;
      });
      return newItem;
  }
  return state;
};

export default cart;
