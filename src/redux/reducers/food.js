const initialState={
    items: [],
};

const food=(state=initialState, action)=>{
      if (action.type === 'SET_FOOD') {
        return {
          ...state,
          items: action.payload,
        };
      }
      return state;
    };

export default food;