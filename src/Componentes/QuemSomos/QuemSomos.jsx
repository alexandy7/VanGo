import React from "react";
import "./Quemsomos.modules.css"

export default function QuemSomos({direcao, foto, descricao}) {

    return (
        <div  >
            <div id="Pessoa" style={{display: "flex", flexDirection:direcao}}>
                <img src={foto} alt="" id="ImagemPessoa"/>
                <div id="DescricaoPessoa"><p>{descricao}</p></div>
            </div>      
        </div>
    )
}