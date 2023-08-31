import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import InserirTurma from "../../Componentes/InserirTurma";
import ApiMotorista from "../../services/ApiMotorista";
export default function SolicitarTurma() {

    const[codigo, setCodigo] = useState('');

    const data = {
        id_turma: codigo,
        
    }

    async function EnviarSolicitacao(){

        let response = await ApiMotorista.post("VerificarTurmaAndSolicitar", )
    }

    return (
        <View style={styles.container}>

            <Text style={{fontSize: 30, alignSelf: "center", marginTop: "20%" }}>Solicitação</Text>

            <View style={styles.ViewGif}>
            <Image source={require("../../../assets/gifSolicitacao.gif")} style={styles.gif}></Image>
            </View>

            <View style={styles.inserirTurma}>
                <InserirTurma
                valor={codigo}
                evento={EnviarSolicitacao()}></InserirTurma>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
       
    },


    ViewGif:{
        marginTop: "10%",
        marginBottom: "10%",
        borderBottomWidth: 10,
        borderTopWidth: 10,
        borderColor: 'beige',
        elevation: 10
    },

    gif:{
        height: 150,
        width: "100%",
        alignSelf: 'center'
    }
})