import { Montserrat_100Thin, Montserrat_500Medium, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    scroll: {
        flex: 1,
        backgroundColor: 'white',
    },

    main: {
        flex: 1,
        backgroundColor: 'white',
    },
    
    header: {
        display: "flex",
        flexDirection: "row",
        height: 80,
        width: "100%",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        marginBottom: 30,
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
    
    },

    titulo: {
        fontSize: 26,
        fontFamily: "Montserrat_500Medium"
    },

    containerfoto: {
        width: "100%",
        height: 180,
        alignSelf: "center",
        display: "flex",
        alignItems: "center",
        marginBottom: "10%"
    },

    divfoto: {
        width: 120,
        height: 120,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30
    },

    foto: {
        height: "100%",
        width: "100%",
        borderRadius: 30
    },

    textofoto1: {
        fontFamily: "Montserrat_400Regular",
        color: "#F99A4C",
        fontSize: 15
    },

    textofoto2: {
        fontFamily: "Montserrat_500Medium",
        fontSize: 24,
        fontWeight: "bold",
        color: "#F99A4C"
    },

    tituloform: {
        fontSize: 18,
        marginLeft: "10%",
        fontFamily: "Montserrat_500Medium",
        color: "#F7770D",
        marginBottom: "3%"
    },

    botao: {
        height: 40,
        width: "55%",
        alignSelf: "center",
        backgroundColor: "#F7770D",
        marginTop: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        elevation: 5,
        marginBottom: 40
    },

    texto: {
        fontSize: 17,
        color: "white",
        fontFamily: "Montserrat_600SemiBold"
    }
})

export default styles;