import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import styles from "./VisualizarMotorista.modules";
import { UserData } from "../../services/Contexts/Contexts";
import CaixaVisualizacaoMotorista from "../../Componentes/CaixaVisualizacaoMotorista";
import PerfilVisualizacao from "../../Componentes/PerfilVisualizacao";


export default function VisualizarMotorista() {

    const navigation = useNavigation()

    return (
        <ScrollView style={styles.geral}>

            <View>

                <PerfilVisualizacao
                    
                    fotoUser={require("../../../assets/fazueli.jpg")}
                    nomeUser={"Tio Barnabé"}>
                </PerfilVisualizacao>


                <View style={styles.regua}>
                    <CaixaVisualizacaoMotorista veiculo={"Perua sla"}
                        cor={"Cinza"}
                        cidade={"Vila dirce"}
                        horario={"08:00-12:00"}
                        ></CaixaVisualizacaoMotorista>
                </View>

            </View>
        </ScrollView>
    )
}
