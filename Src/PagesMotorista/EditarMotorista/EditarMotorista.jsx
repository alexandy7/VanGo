import React from "react";
import styles from "./EditarMotorista.modules";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import InputEdicao from "../../Componentes/InputEdicao";

export default function EditarMotorista() {

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular,
        Montserrat_600SemiBold
    });

    if (!fonteLoaded) {
        return null;
    }

    return(
        <View style={styles.main}>
            <View style={styles.header}>
                <View style={styles.divesquerda}>
                    <TouchableOpacity style={styles.seta} onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back-outline" size={30} />
                    </TouchableOpacity>
                </View>

                <View style={styles.divmeio}>
                    <Text style={styles.titulo}>Editar Perfil</Text>
                </View>

                <View style={styles.divdireita}>

                </View>
            </View>

            <View style={styles.containerfoto}>
                <TouchableOpacity style={styles.divfoto}>
                    <Image style={styles.foto} source={require("../../../assets/fazueli.jpg")}/>
                </TouchableOpacity>

                <Text style={styles.textofoto1}>Clique para alterar a foto</Text>
                
                <Text style={styles.textofoto2}>Tio Barnabé</Text>
            </View>

            <Text style={styles.tituloform}>Nome</Text>
                <InputEdicao
                    icone={"person-outline"}
                    valor={"nomeCliente"}
                    mudou={(text) => { setNomeCliente(text) }}
                />
                
                <Text style={styles.tituloform}>Cor</Text>
                <InputEdicao
                    icone={"ellipse-outline"}
                    valor={"nomeCliente"}
                    mudou={(text) => { setNomeCliente(text) }}
                />

                <Text style={styles.tituloform}>Cidade</Text>
                <InputEdicao
                    icone={"business-outline"}
                    valor={"nomeCliente"}
                    mudou={(text) => { setNomeCliente(text) }}
                />

                <Text style={styles.tituloform}>Horário</Text>
                <InputEdicao
                    icone={"time-outline"}
                    valor={"nomeCliente"}
                    mudou={(text) => { setNomeCliente(text) }}
                />

                <TouchableOpacity onPress={() => { setConfirmarEdicao(true) }}>
                    <View style={styles.botao}>
                        <Text style={styles.textobotao}>Salvar Alterações</Text>
                    </View>
                </TouchableOpacity>

        </View>
    )
}