import { Montserrat_100Thin, Montserrat_500Medium, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    scroll: {
        backgroundColor: 'white',
    },

    main: {
        flex: 1,
        backgroundColor: 'white',
    },
    
    header: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 20,
        marginTop: "5%"
    },

    divesquerda: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        position: "absolute",
        left: 30
    },

    divmeio: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        alignSelf: "center",
    },

    titulo: {
        fontSize: 26,
        fontFamily: "Montserrat_500Medium",
    },

    containerfoto: {
        width: "100%",
        height: 180,
        alignSelf: "center",
        display: "flex",
        alignItems: "center",
        marginBottom: "5%"
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
        marginBottom: "1%"
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