import React from 'react'
import ReactDom from 'react-dom/client'

/* aca importamos el app de HelloWorldApp
el punto de entrada es ese */
/* import App from './HelloWorldApp' */
import { Saludar } from './FirstApp'
import { CounterApp } from './CounterApp'
/* asi importamos los estilos  */
import './style.css'

ReactDom.createRoot( document.getElementById( 'root' ) ).render(
    <React.StrictMode>
        {/* <Saludar title="hola soy goku"></Saludar> */}
        <CounterApp value={ 20 }></CounterApp>
    </React.StrictMode>
)



