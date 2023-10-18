import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import styles from "./VisualizarMotorista.modules";
import { UserData } from "../../services/Contexts/Contexts";
import PerfilVisualizacao from "../../Componentes/PerfilVisualizacao";
import CaixaPerfil from "../../Componentes/CaixaPerfil";


const VisualizarMotorista = ({ route }) => {

    // const { nome_motorista, foto_motorista, periodo_atuacao_motorista, endereco_motorista } = route.params;
    const navigation = useNavigation()

    return (
        <ScrollView style={styles.geral}>

            <View>

                <PerfilVisualizacao
                    fotoUser={require("../../../assets/fazueli.jpg")}
                    nomeUser={"Tio Barnabé"}
                    evento={()=> navigation.goBack()}
                    />
                        
             


                <View style={styles.regua}>
                    <CaixaPerfil 
                        texto1={"5 Anos"}
                        titulotexto1={"Tempo"}
                        icontexto1={"hourglass-outline"}
                        texto2={"69"}
                        titulotexto2={"Alunos"}
                        icontexto2={"person-outline"}
                        texto3={"Santana"}
                        titulotexto3={"Cidade"}
                        icontexto3={"business-outline"}
                        texto4={"08:00-12:00"}
                        titulotexto4={"Horário"}
                        icontexto4={"time-outline"}
                        brushOrChat={"chatbubbles"}
                        evento={() => { navigation.navigate("EditarCliente") }}
                    ></CaixaPerfil>
                </View>

            </View>
        </ScrollView>
    )
};

export default VisualizarMotorista;