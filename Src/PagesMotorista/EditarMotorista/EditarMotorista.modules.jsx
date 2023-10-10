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
        fontSize: 23,
        position: "relative",
        alignSelf: "center",
        fontFamily: "Montserrat_500Medium"
    },

    containerfoto: {
        width: "100%",
        height: 180,
        alignSelf: "center",
        display: "flex",
        alignItems: "center",
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
        color: "#F7770D",
        fontSize: 15
    },

    textofoto2: {
        fontFamily: "Montserrat_500Medium",
        fontSize: 24
    },

    tituloform: {
        fontSize: 18,
        marginLeft: "10%",
        fontFamily: "Montserrat_500Medium",
        color: "#F7770D"
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
        elevation: 5
    },

    textobotao: {
        fontSize: 17,
        color: "white",
        fontFamily: "Montserrat_600SemiBold"
    }

})

export default styles;