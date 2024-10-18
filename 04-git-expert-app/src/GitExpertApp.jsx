import React, { useState } from 'react'
import { AddCategory } from "./components/addCategory"
import { GifGrid } from './components/GifGrid'

export const GitExportApp = () => {

        const [categories, setCategories] = useState([ 'One Punch'])

        const onAddCategory = ( newCategory) => {

            if ( categories.includes(newCategory) ) return;
            setCategories( [newCategory, ...categories ] )
        } 

    return (
        <>
            <h1>GitExpertApp</h1>
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            
                {
                    categories.map( ( category )  => ( 
                        <GifGrid key={category} category={category} />
                    ) )
                }
        </>
    )
}