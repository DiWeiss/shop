export function countTotalCount(obj){
    return [].concat.apply([], Object.values(obj)).length;
  }
  
 export  function countTotalPrice(obj){
    return [].concat.apply([], Object.values(obj)).reduce((sum, obj)=>obj.price+sum, 0);
  }

  /////////////////////////////////////////////
/* function totalCount(arr){
  const reducer=(prev, curr)=>{prev+curr.count};
arr.reduce(reducer);
}
function totalPrice(arr){
  const reducer=(prev, curr)=>{prev+curr.price*curr.count};
arr.reduce(reducer);
} */
/////////////////////////////////////////////