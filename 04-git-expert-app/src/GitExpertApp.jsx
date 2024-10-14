import React, { useState } from 'react'
import { AddCategory } from "./components/addCategory";

export const GitExportApp = () => {

        const [categories, setCategories] = useState([ 'One Prunch', 'dragon ball z' ])

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
                categories.map( (category) => (
                    <gifGrid key={category} category={category} />
                ) )
            }

            {/* <ol>
                {
                    categories.map( ( category )  => ( 
                        <div key={ category }>
                            <h3>{ category }</h3>
                            <li>{ category }</li>
                        </div>
                    ) )
                }
            </ol> */}
        </>
    )
}