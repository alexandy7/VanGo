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
        display: "flex",
        flexDirection: "row",
        height: 80,
        width: "100%",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
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

    divdados: {
        width: "100%",
        height: 230,
    },

    divimagem: {
        height: 150,
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    imagem: {
        height: 150,
        width: "50%"
    },

    divtexto: {
        height: 80,
        width: "100%",
        alignItems: "center"
    },

    texto1: {
        fontSize: 25,
        fontFamily: "Montserrat_500Medium"
    },

    texto2: {
        fontSize: 17,
        fontFamily: "Montserrat_400Regular"
    },

    containerfoto: {
        height: 250,
        width: 250,
        borderRadius: 250,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#F7770D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "#e8e8e8"
    },

    foto:{
        height: 250,
        width: 250,
        borderRadius: 250,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#F7770D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "#e8e8e8"
    },

    botaoconcluir: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: "80%",
        alignSelf: "center",
        backgroundColor: "#F7770D",
        borderRadius: 15,
        marginTop: "20%",
        display: "flex",
        flexDirection: "row"
    },

    textoconcluir: {
        fontSize: 26,
        color: "white",
        fontFamily: "Montserrat_500Medium"
    },

    icon: {
        top: 0
    },

    alinhainicio: {
        width: "15%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    
    alinhameio: {
        width: "70%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    alinhafim: {
        width: "15%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-start"
    },

});

export default styles;