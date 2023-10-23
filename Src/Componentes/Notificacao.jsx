import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat";


export default function Notificacao({ fotouser, nomeuser, info, hora, clickImagem }) {

    const[fontsLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular
    })
    return (
        <View style={[styles.container, styles.shadow]}>

            <TouchableOpacity activeOpacity={0.8} style={styles.divimagem} onPress={clickImagem}>
                <Image source={fotouser} style={styles.imagem}></Image>
            </TouchableOpacity>

            <View style={styles.alinha}>
                <View style={styles.divsuperior}>
                    <Text style={styles.nomedouser}>{nomeuser}</Text>
                    <Text style={styles.horario}>{hora}</Text>
                </View>

                <View style={styles.divinferior}>
                    <Text style={styles.informacao}>{info}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '97%',
        height: 80,
        borderColor: '#F7770D',
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: 15,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: "white",
        fontStyle: "Montserrat_100Thin",     

    },
    
    divimagem: {
        height: "100%",
        width: "24%",
        marginLeft: 3,
        backgroundColor: "black",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0)"
    },
    
    imagem: {
        height: "80%",
        width: "80%",
        borderRadius: 20,
    },
    
    alinha: {
        height: 80,
        width: "75%"
    },

    divsuperior: {
        display: "flex",
        flexDirection: "row",
        height: "40%",
        alignItems: "center",
        justifyContent: "space-between"
    },
    
    divinferior: {
        display: "flex",
        flexDirection: "row",
        height: "55%",
        alignItems: "center",
        justifyContent: "flex-start"
    },

    nomedouser: {
        fontSize: 18,
        position: "relative",
        marginLeft: "2%",
        marginRight: "5%",
        marginTop: "3%",
        color: "#252525",
        fontFamily: "Montserrat_500Medium",
    },
    
    informacao: {
        fontSize: 14,
        position: "relative",
        marginLeft: "2%",
        marginBottom: "3%",
        fontFamily: "Montserrat_400Regular",
        justifyContent: "center"
    },

    horario: {
        fontSize: 14,
        display: "flex",
        position: "relative",
        marginLeft: "3%",
        marginRight: "8%",
        marginTop: "3%",
        fontFamily: "Montserrat_400Regular"
    },

    icon: {
        marginRight: "9%",
        marginBottom: "2%"
    },

    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 15,
    },
});
