import React from "react";
import { View, StyleSheet } from "react-native";
import TituloCadastro from '../../Componentes/Common/Titulocadastros'
import MeuText from '../../Componentes/Common/MeuText'
import Touchable from "../../Componentes/Common/Touchable";

export default function CadastroVeiculo(){

    return(
        <View style={styles.geral}>
            <TituloCadastro textoh1={'Cadastre seu veículo'} textoh2={'Insira as informações abaixo:'}></TituloCadastro>

        <View style={styles.inputes}> 
            <MeuText nomePlaceholder={'Modelo do seu veículo'} imagem={require('../../../assets/profile.png')}></MeuText>
            <MeuText nomePlaceholder={'Cor'} imagem={require('../../../assets/cor.png')}></MeuText>
            <MeuText nomePlaceholder={'Número da placa'} imagem={require('../../../assets/cartao.png')}></MeuText>
        </View>
            <View style={styles.botao}>
            <Touchable texto={'Concluir'}></Touchable>
        </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        geral: {
            flex: 1,
        },
        
        botao:{
            flex: 1,
            marginTop: 265,
        },

    }
)