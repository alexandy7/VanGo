import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"

export default function CardPagamento({ imagem, nome, valor, icon, color, status, vencimento, evento, seta, clickImagem }) {

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular,
    });

    if (!fonteLoaded) {
        return null;
    };

    return (
        <View style={[styles.container, Platform.OS === 'android' && styles.shadow]}>
            <TouchableOpacity activeOpacity={0.8} style={styles.divimagem} onPress={clickImagem}>
                <Image source={imagem} style={styles.imagem} />
            </TouchableOpacity>


            <View style={styles.containertexto}>

                <View style={styles.divsuperior}>
                    <View style={styles.reguanome}>
                        <Text style={styles.nome}>{nome}</Text>
                    </View>

                    <View style={styles.reguafatura}>
                        <Text style={[styles.fatura, { color }]}>{"R$" + valor}</Text>
                    </View>
                    {
                        seta ? (

                            <View style={styles.reguaicone}>
                                <TouchableOpacity style={styles.seta} onPress={evento}>
                                    <Ionicons name="chevron-forward-outline" size={27} color={"black"} />
                                </TouchableOpacity>
                            </View>
                        )
                            :
                            (
                                <View>

                                </View>
                            )
                    }
                </View>

                <View style={styles.divinferior}>

                    <View style={styles.reguastatus}>
                        <Ionicons style={styles.warning} name={icon} size={20} color={color} />
                        <Text style={[styles.situacao, { color }]}>{status}</Text>
                    </View>

                    <View style={styles.reguavencimento}>
                        <Text style={styles.vencimento}>{"Vencimento: " + vencimento}</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        borderColor: 'grey',
        borderRadius: 40,
        alignSelf: 'center',
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white', // Adicione um fundo branco
    },

    shadow: {
        elevation: 5, // Esta propriedade adiciona sombra no Android
    },

    divimagem: {
        width: "25%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    imagem: {
        height: "80%",
        width: "80%",
        borderRadius: 40,
    },

    containertexto: {
        display: "flex",
        flexDirection: "column",
        width: "75%",
    },

    divsuperior: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 35,
        position: "relative",

    },

    reguanome: {
        width: "58%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end"
    },

    reguafatura: {
        width: "30%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },

    reguaicone: {
        width: "15%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
    },

    nome: {
        fontSize: 17,
        marginLeft: "5%",
        fontFamily: "Montserrat_500Medium"
    },

    fatura: {
        fontSize: 16,
        color: "black",
        fontFamily: "Montserrat_400Regular"
    },

    seta: {
        marginTop: 8
    },

    divinferior: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 45,
        position: "relative",
    },

    reguastatus: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "40%",
        alignItems: "flex-start"
    },

    warning: {
        position: "relative",
        marginLeft: "5%",
        marginBottom: 5
    },

    situacao: {
        position: "relative",
        fontSize: 15,
        marginBottom: 5,
        marginLeft: 3,
        fontFamily: "Montserrat_400Regular",
    },

    reguavencimento: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "60%",
        alignItems: "center",
        justifyContent: "flex-end",
    },

    vencimento: {
        position: "relative",
        fontSize: 11,
        marginBottom: 5,
        fontFamily: "Montserrat_400Regular",
        width: "100%",
        textAlign: "center"
    },

})