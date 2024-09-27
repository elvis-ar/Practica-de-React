const num = [ 1,2,3,4,5,6 ]
const dato = { nombre: 'elvis' }
const Saludo = ( nombre ) => { return `hola ${ nombre }` }

import PropTypes from 'prop-types'


export const Saludar = ( { title, subTitle } ) => {
  
    return (
        <>
            <h1>titulo </h1>
            <p>{ num }</p>
            {/* con el JSON mandamos todo como string el obj */}
            <p>{ JSON.stringify( dato ) }</p>
            <p>{ Saludo( 'elvis' ) }</p>
            <p>{ title }</p>
            <p>{ subTitle }</p>
        </>
    )
}

/* aca al metodo saludar le decimos las prop (parametros)
que tienen que ser obligatorios y con su tipo de dato */
Saludar.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

/* le agregagos por defecto los valores de los props
pero dice que se tienen que usar desde el parametro 
title = "valor por defecto" */
Saludar.defaultProps = {
    title: 'no hay titulo',
    subTitle: 'no hay subtitulo'
}
