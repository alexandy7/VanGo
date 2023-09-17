import { Montserrat_100Thin, Montserrat_500Medium, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

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

    tituloform: {
        fontSize: 18,
        marginLeft: "10%",
        fontFamily: "Montserrat_500Medium"
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

    texto: {
        fontSize: 17,
        color: "white",
        fontFamily: "Montserrat_600SemiBold"
    }
})

export default styles;