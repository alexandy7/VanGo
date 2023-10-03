import React, { useEffect, useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import styles from "./PerfilMotorista.modules";
import { UserData } from "../../services/Contexts/Contexts";
import CaixaPerfil from "../../Componentes/CaixaPerfil";
import CaixaPerfilMotorista from "../../Componentes/CaixaPerfilMotorista";


export default function PerfilMotorista() {

    const navigation = useNavigation()

    return (
        <ScrollView style={styles.geral}>

            <View>

                <Perfil
                    
                    fotoUser={require("../../../assets/fazueli.jpg")}
                    nomeUser={"Barnabé"}>
                </Perfil>


                <View style={styles.regua}>
                    <CaixaPerfilMotorista veiculo={"Perua sla"}
                        cor={"Cinza"}
                        cidade={"Vila dirce"}
                        horario={"08:00-12:00"}
                        ></CaixaPerfilMotorista>
                </View>

            </View>
        </ScrollView>
    )
}
