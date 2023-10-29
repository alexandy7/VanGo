import { Montserrat_400Regular, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#EFEFEF',
    },

    scroll: {
        backgroundColor: "white"
    },

    header: {
        flexDirection: "row",
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
        justifyContent: "flex-end",
        alignItems: "flex-start",
    },

    seta: {
        position: "relative",
        top: "3%"
    },

    titulo: {
        fontSize: 18,
        position: "relative",
        fontFamily: "Montserrat_500Medium",
        bottom: 6,
        color: "#F7770D",
        fontWeight: 600
    },

    numerostitulo: {
        fontSize: 16,
        position: "relative",
        fontFamily: "Montserrat_500Medium",
        bottom: 7,
        color: "#F7770D",
        fontWeight: 600
    },

    divtextosup: {
        width: "100%",
        height: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    },

    textosup1: {
        fontSize: 23,
        fontFamily: "Montserrat_500Medium"
    },

    textosup2: {
        fontSize: 14,
        fontFamily: "Montserrat_400Regular"
    },

    containerfoto: {
        height: 150,
        width: 150,
        borderRadius: 250,
        alignSelf: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "gray"
    },

    foto:{
        height: 150,
        width: 150,
        borderRadius: 250,
        alignSelf: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e8e8e8"
    },

    nomecliente: {
        alignSelf: "center",
        textAlign: "center",
        fontSize: 22,
        paddingLeft: "7%",
        paddingRight: "7%",
        fontFamily: "Montserrat_500Medium",
        marginTop: 5,
        marginBottom: 30,
        color: "#F7770D"
    },

    tituloform: {
        fontSize: 16,
        marginLeft: "10%",
        fontFamily: "Montserrat_500Medium",
        color: "#F7770D",
        marginBottom: "1%"
    },



})

export default styles;