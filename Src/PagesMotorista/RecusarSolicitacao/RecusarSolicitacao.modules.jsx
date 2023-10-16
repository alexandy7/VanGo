import { Montserrat_400Regular, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: "white"
    },

    header: {
        display: "flex",
        flexDirection: "row",
        height: 80,
        width: "100%",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        marginBottom: 30
    },

    divesquerda: {
        height: 80,
        width: "15%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },

    divmeio: {
        height: 80,
        width: "70%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },

    divdireita: {
        height: 80,
        width: "15%",   
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    seta: {
        position: "relative",
        top: "3%"
    },

    titulo: {
        fontSize: 26,
        position: "relative",
        alignSelf: "center",
        fontFamily: "Montserrat_500Medium"
    },

    divcontainer: {
        // backgroundColor: "yellow",
        height: 300,
        width: "100%",
        position: "absolute",
        top: "50%",  // Centraliza verticalmente
        transform: [{ translateY: -150 }], // Metade da altura para centralizar verticalmente,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    
    container: {
        height: 150,
        width: "90%",
        borderWidth: 1,
        borderColor: "#F7770D",
        borderRadius: 15
    },

    divsuperiorcontainer: {
        height: "50%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    textocontainer: {
        fontSize: 18,
        fontFamily: "Montserrat_500Medium",
        textAlign: "center",
        position: "relative",
        top: 10
    },

    divinferiorcontainer: {
        height: "50%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

     botao1: {
        backgroundColor: "#F7770D",
        height: 40,
        width: "35%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        bottom: 5
     },

     textobotao1: {
        color: "white",
        fontSize: 18,
        fontFamily: "Montserrat_500Medium",
     },

     botao2: {
        backgroundColor: "white",
        height: 40,
        width: "35%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#F7770D",
        bottom: 5
     },

     textobotao2: {
        color: "#F7770D",
        fontSize: 18,
        fontFamily: "Montserrat_500Medium",

     }

});

export default styles;