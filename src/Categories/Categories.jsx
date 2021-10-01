import React from 'react';
import {useState} from 'react'

const Categories=React.memo(function Categories({activeCategory, items, onClickCategories}) {
    
 /*    const [activeCategory, setActiveCategory] = useState(null) */
    const onSelectCategory=(index)=>{
        /* setActiveCategory(index); */
        onClickCategories(index);
     };

    return (
        <div className="categories">
            <section className="categories__conteiner">
            <div onClick={()=>onSelectCategory(null)} className={activeCategory==null ? 'categories--active' : ''}>Все</div>
               {items.map((name, index)=>(
                <div 
                    onClick={()=>onSelectCategory(index)} 
                    className={activeCategory==index ? 'categories--active' : ''}
                    key={`${name}_${index}`}>{name}
                </div>
               ))} 
                
            </section>
        </div>
    )
});

export default Categories
