import React from "react";
import '../styles/Contador.css'

export function Contador({ numClick }) {
   return(
    <div className="contador">
      {numClick}
    </div>
   )
}