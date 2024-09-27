import { useState } from 'react'
import PropTypes from 'prop-types'



export const CounterApp = ({ value }) => {

    /* el valor del useState se guarda en counter
    y con el setCounter se modifica ese valor */
    const [ counter, setCounter ] = useState( value );

    const sumarUno = () => setCounter ( counter + 1 )
    const restarUno = () => setCounter ( counter - 1 )
    const reset = () => setCounter ( value )

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ sumarUno }> +1 </button>
            <button onClick={ restarUno }> -1 </button>
            <button onClick={ reset }> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}