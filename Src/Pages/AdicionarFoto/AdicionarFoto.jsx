import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./AdicionarFoto.modules";
import NotFound from "../../Componentes/NotFound";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"

export default function AdcionarFoto() {

    const navigation = useNavigation();

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }

    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <View style={styles.divesquerda}>
                    <TouchableOpacity style={styles.seta} onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back-outline" size={35} color={"gray"}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.divmeio}>
            
                </View>

                <View style={styles.divdireita}>

                </View>

            </View>

            <View style={styles.divdados}>
                <View style={styles.divimagem}>
                    <Image style={styles.imagem} source={require("../../../assets/Logo.png")}/>
                </View>

                <View style={styles.divtexto}>
                    <Text style={styles.texto1}>Adicione sua foto de perfil</Text>
                    <Text style={styles.texto2}>Insira as informações abaixo</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.containerfoto}>
                <Ionicons name="camera-outline" size={55} color={"#F7770D"}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoconcluir}>
                <View style={styles.alinhainicio}>
                    <Text></Text>
                </View>

                <View style={styles.alinhameio}>
                    <Text style={styles.textoconcluir}>Concluir</Text>
                </View>

                <View style={styles.alinhafim}>
                    <Ionicons style={styles.icon} name={"chevron-forward-outline"} size={30} color="white"/>
                </View>
            </TouchableOpacity>
            
        </View>
    )

}