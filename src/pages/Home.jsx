import Categories from '../Categories/Categories';
import FoodBlock from '../FoodBlock/FoodBlock';

import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setCategory} from '../redux/actions/filters'
import {setFood} from '../redux/actions/food'
import {addFood} from '../redux/actions/cart'

const categoriesItems=['Салаты', 'Пицца', 'Паста', 'Десерты', 'Напитки'];

function Home() {
    const dispatch = useDispatch()
    const {items, category} = useSelector(({foodReduser, filtersReducer})=>{
        return{
          items: foodReduser.items,
          category: filtersReducer.category
        }
    });

    const onSelectCategory= React.useCallback((index)=>{
        dispatch(setCategory(index));
    }, []);

    React.useEffect(()=>{
        fetch(`/food?${category!=null ? `category=${category}` :''}`).then((response)=>response.json()).then(json=>{
         dispatch(setFood(json));
        });
        }, [category]);

        const addFoodToCart=(obj)=>{
            dispatch(addFood(obj));
}
    return (
        <div>
            <Categories 
                activeCategory={category}
                onClickCategories={onSelectCategory} 
                items={categoriesItems}>
            </Categories> 
        <div className="content">
            {
                items && items.map((obj)=>(
                    <FoodBlock onAddFood={addFoodToCart} key={obj.id} {...obj}/>
                ))
            } 

        </div> 
        </div>
    )
}

export default Home
