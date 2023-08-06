import React from "react";
import "./Beneficios.modules.css"
export default function Beneficios({ imagem, titulo }) {

    return (

        <div id="DivBeneficio">

            <img src={imagem} alt="" id="ImgBeneficio" />
            <p>{titulo}</p>

 
        </div>
    )
}