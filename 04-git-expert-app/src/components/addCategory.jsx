import { useState } from 'react' 

export const AddCategory = ({ onNewCategory }) => {

    const [imputValue, setInputValue] = useState('')

    const onInputValue = ( {target} ) => {
        setInputValue(target.value)
        console.log(imputValue);
    }

    const onSubmit = event => {
        event.preventDefault();
        if(imputValue.trim().length <= 1) return;

        onNewCategory(imputValue.trim())
        setInputValue('');
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
            type="text"
            placeholder="Buscar gifs"
            value={ imputValue }
            onChange={ onInputValue } />

        </form>
        
    )
} 