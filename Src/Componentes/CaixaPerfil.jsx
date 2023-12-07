import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import PincelEditar from "./PincelEditar";
import { TouchableOpacity } from "react-native";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"

export default function CaixaPerfil({texto1, titulotexto1, icontexto1, texto2, titulotexto2, icontexto2, texto3, titulotexto3, icontexto3, texto4, titulotexto4, icontexto4, brushOrChat, evento, signal}) {

        const [fonteLoaded] = useFonts({
            Montserrat_500Medium,
            Montserrat_400Regular
        });
    
        if (!fonteLoaded) {
            return null;
        }

    return (
        <View style={styles.container}>

            <View style={styles.divsuperior}>
                <View style={styles.ladoesquerdo}>
                    <View style={styles.divicone}>
                        <Ionicons name={icontexto1} size={30} color='#F7770D' style={styles.iconesup}/>
                    </View>

                    <View style={styles.divtexto}>
                        <Text style={styles.texto1sup}>{texto1}</Text>
                        <Text style={styles.texto2sup}>{titulotexto1}</Text>
                    </View>

                </View>

                <View style={styles.ladodireito}>

                    <View style={styles.divicone}>
                        <Ionicons name={icontexto2} size={30} color='#F7770D' style={styles.iconesup}/>
                    </View>
                    {
                    //TouchableOpacity temporal apenas para a apresentação
                    }
                    <TouchableOpacity onPress={signal} style={styles.divtexto}>
                        <Text style={styles.texto1sup}>{texto2}</Text>
                        <Text style={styles.texto2sup}>{titulotexto2}</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.divinferior}>
                <View style={styles.ladoesquerdo}>
                    <View style={styles.divicone}>
                        <Ionicons name={icontexto3} size={30} color='#F7770D' style={styles.iconeinf}/>
                    </View>

                    <View style={styles.divtexto}>
                        <Text style={styles.texto1inf}>{texto3}</Text>
                        <Text style={styles.texto2inf}>{titulotexto3}</Text>
                    </View>

                </View>

                <View style={styles.ladodireito}>

                    <View style={styles.divicone}>
                        <Ionicons name={icontexto4} size={30} color='#F7770D' style={styles.iconeinf}/>
                    </View>
                    
                    <View style={styles.divtexto}>
                        <Text style={[styles.texto1inf, {height: texto4 === "Integral" ?  25 : 40}]}>{texto4}</Text>
                        <Text style={styles.texto2inf}>{titulotexto4} </Text>
                    </View>
                </View>
            </View>

            <View style={styles.divpincel}>
                <TouchableOpacity onPress={evento}>
                    <Ionicons name={brushOrChat} size={20} color='#F7770D' style={styles.iconepincel}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}
    
const styles = StyleSheet.create({

    container: {
        height: 220,
        width: "80%",
        backgroundColor: "white",
        elevation: 10,
        alignSelf: "center",
        borderRadius: 20,
        flexDirection: "column",
        shadowColor: "black",
        shadowRadius: 5
    },

    divsuperior: {
        height: 100,
        width: "100%",
        display: "flex",
        flexDirection: "row",
    },

    ladoesquerdo: {
        height: "100%",
        width: "50%",
        display: "flex",
        flexDirection: "row",
        paddingLeft: "1%"
    },

    ladodireito: {
        height: "100%",
        width: "50%",
        display: "flex",
        flexDirection: "row",
        paddingRight: "1%"
    },

    divicone: {
        height: "100%",
        width: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
    },

    divtexto: {
        height: "100%",
        width: "70%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
    },

    iconesup: {
        position: "relative",
        top: 5
    },

    texto1sup: {
        fontSize: 14,
        marginLeft: "10%",
        position: "relative",
        top: 5,
        fontFamily: "Montserrat_500Medium",
        textAlign: "justify",
    },

    texto2sup: {
        fontSize: 12,
        color: "darkgray",
        marginLeft: "10%",
        position: "relative",
        top: 5,
        fontFamily: "Montserrat_400Regular"
    },

    divinferior: {
        height: 100,
        width: "100%",
        display: "flex",
        flexDirection: "row",
    },

    iconeinf: {
        position: "relative",
        bottom: 5
    },

    texto1inf: {
        fontSize: 14,
        marginLeft: "10%",
        position: "relative",
        bottom: 5,
        fontFamily: "Montserrat_500Medium",
        textAlign: "justify",
        height: 40
    },

    texto2inf: {
        fontSize: 12,
        color: "darkgray",
        marginLeft: "10%",
        position: "relative",
        bottom: 5,
        fontFamily: "Montserrat_400Regular",
        
    },

    divpincel: {
        width: "100%",
        height: 20,
        display: "flex",
        alignItems: "flex-end"
    },

    iconepincel: {
        position: "relative",
        bottom: 15,
        right: 15
    }

})

