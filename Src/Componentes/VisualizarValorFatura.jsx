import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat";


export default function VisualizarValorFatura({valor, vencimento}) {

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular,
    });

    if (!fonteLoaded) {
        return null;
    }

    return(
        <View style={styles.container}>
            <View style={styles.esquerda}>
                <Text style={styles.textosuperior}>R${"150,00"}</Text>
                <Text style={styles.textoinferior}>Vencimento: {"13/12/2023"}</Text>
            </View>

            <View style={styles.direita}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textobotao}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.seta}>
                    <Ionicons style={styles.seta} name={"chevron-forward-outline"} size={30} color="#dbdbdb" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {  
        width: "90%",
        height: 100,
        borderWidth: 1,
        borderColor: "#F7770D",
        alignSelf: "center",
        borderRadius: 25,
        elevation: 10,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row"
    },

    esquerda: {
        width: "60%",
        height: 100,
        display: "flex",
        justifyContent: "center",
        paddingLeft: "7%",
    },

    textosuperior: {
        color: "#00B383",
        fontFamily: "Montserrat_500Medium",
        fontSize: 18,
        marginBottom: "6%"
    },

    textoinferior: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 13
    },

    direita: {
        width: "40%",
        height: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    botao: {
        backgroundColor: "#F7770D",
        width: "65%",
        height: 40,
        borderRadius: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    textobotao: {
        color: "white",
        fontFamily: "Montserrat_500Medium",
        fontSize: 15
    },

    seta: {
        marginLeft: "4%"
    }
});
