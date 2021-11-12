const initialState={
    items: [],
};

const food=(state=initialState, action)=>{
  switch(action.type){
    case('SET_FOOD'):
    return {
      ...state,
      items: action.payload,
    };
  
  }
      
      return state;
    };

export default food;