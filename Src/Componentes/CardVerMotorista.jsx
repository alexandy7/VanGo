import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"

export default function CardVerMotorista({ imagem, nome, id_turma }) {

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.divimagem}>
                <Image style={styles.imagem} source={require("../../assets/fazueli.jpg")} />
            </View>

            <View style={styles.divinfos}>
                <Text style={styles.nome}>{"Tio Barnabé"}</Text>
                <Text style={styles.chave}>{"#214125"}</Text>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textobotao}>Exibir Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        height: 100,
        width: "80%",
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 30,
        borderColor: "#d4d4d4",
        display: "flex",
        flexDirection: "row"
    },

    divimagem: {
        height: "100%",
        width: "35%",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    imagem: {
        height: "80%",
        width: "80%",
        borderRadius: 10
    },

    divinfos: {
        height: "100%",
        width: "65%",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
    },

    nome: {
        fontSize: 20,
        fontFamily: "Montserrat_500Medium"
    },

    chave: {
        fontSize: 15,
        color: "#878787",
        fontFamily: "Montserrat_400Regular"
    },

    botao: {
        height: 30,
        backgroundColor: "#F7770D",
        width: 140,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 5
    },

    textobotao: {
        fontSize: 18,
        fontFamily: "Montserrat_500Medium",
        color: "white"
    }



})