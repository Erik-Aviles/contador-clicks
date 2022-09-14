import React from 'react';
import '../styles/Boton.css'

export function Botton({texto, esBotonDeClick, manejarClick}) {
    return(
        <button 
            className={esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
            onClick={manejarClick}>
           {texto} 
        </button>
    )
}