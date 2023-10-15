import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./RecusarSolicitacao.modules";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"

export default function RecusarSolicitacao({nome, turma}) {

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
    });

    if (!fonteLoaded) {
        return null;
    }
    
    return (
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
            <View style={styles.divcontainer}>
                <View style={styles.container}>
                    <View style={styles.divsuperiorcontainer}>
                        <Text style={styles.textocontainer}>Deseja recusar {"Barnabé"} para entrar na {"Turma da madrugada"}?</Text>
                    </View>

                    <View style={styles.divinferiorcontainer}>
                        <TouchableOpacity style={styles.botao1}>
                            <Text style={styles.textobotao1}>Recusar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botao2}>
                            <Text style={styles.textobotao2}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        
        </View>
    )

}