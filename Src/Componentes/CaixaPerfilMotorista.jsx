import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import PincelEditar from "./PincelEditar";
import { TouchableOpacity } from "react-native";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"

export default function CaixaPerfilMotorista({veiculo, cor, endereco, periodo, evento, icone}) {

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
                        <Ionicons name="hourglass-outline" size={30}  style={styles.iconesup}/>
                    </View>

                    <View style={styles.divtexto}>
                        <Text style={styles.texto1sup}>{veiculo}</Text>
                        <Text style={styles.texto2sup}>Tempo</Text>
                    </View>

                </View>

                <View style={styles.ladodireito}>

                    <View style={styles.divicone}>
                        <Ionicons name="ellipse" size={30} color='gray' style={styles.iconesup}/>
                    </View>
                    
                    <View style={styles.divtexto}>
                        <Text style={styles.texto1sup}>{cor}</Text>
                        <Text style={styles.texto2sup}>Cor</Text>
                    </View>

                </View>
            </View>

            <View style={styles.divinferior}>
                <View style={styles.ladoesquerdo}>
                    <View style={styles.divicone}>
                        <Ionicons name="business-outline" size={30}  style={styles.iconeinf}/>
                    </View>

                    <View style={styles.divtexto}>
                        <Text style={styles.texto1inf}>{endereco}</Text>
                        <Text style={styles.texto2inf}>Endereço</Text>
                    </View>

                </View>

                <View style={styles.ladodireito}>

                    <View style={styles.divicone}>
                        <Ionicons name="time-outline" size={30}  style={styles.iconeinf}/>
                    </View>
                    
                    <View style={styles.divtexto}>
                        <Text style={styles.texto1inf}>{periodo}</Text>
                        <Text style={styles.texto2inf}>Periodo</Text>
                    </View>
                </View>
            </View>

            <View style={styles.divpincel}>
                <TouchableOpacity onPress={evento}>
                    <Ionicons name={icone} size={20} color='#F7770D' style={styles.iconepincel}/>
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
        flexDirection: "column"
    },

    divsuperior: {
        height: 100,
        width: "100%",
        // backgroundColor: "yellow",
        display: "flex",
        flexDirection: "row",
    },

    ladoesquerdo: {
        height: "100%",
        width: "50%",
        // backgroundColor: "lightblue",
        display: "flex",
        flexDirection: "row",
        paddingLeft: "1%"
    },

    ladodireito: {
        height: "100%",
        width: "50%",
        // backgroundColor: "pink",
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
        fontFamily: "Montserrat_500Medium"
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
        // backgroundColor: "yellow",
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
        fontFamily: "Montserrat_500Medium"
    },

    texto2inf: {
        fontSize: 12,
        color: "darkgray",
        marginLeft: "10%",
        position: "relative",
        bottom: 5,
        fontFamily: "Montserrat_400Regular"
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

