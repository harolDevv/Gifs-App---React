import React, { useState } from 'react'

import {GiftGrid,  AddCategory} from './components'





const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory  = (newCategory) => {
        //si la ctegoria ya existe salte
        if (categories.includes(newCategory)) return 

        setCategories([ newCategory, ...categories  ])
    }
    console.log(categories);
  return (
    <>
    <h1>GifExpertApp</h1>

    <AddCategory 
        onNewValue={event => onAddCategory(event)}
    />

   
        {
            categories.map( (category) => (
                <GiftGrid 
                category={category} 
                key={category}/>
            ))
        }
    
    </>
  )
}

export default GifExpertApp