import { Montserrat_400Regular, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "white"
    },

    caixaheader: {
        width: "100%",
        height: 200,
        display: "flex",
        flexDirection: "row"
    },
    
    divseta: {
        width: "15%",
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    seta: {
        marginTop: 0
    },

    divimagem: {
        width: "70%",
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },

    divregua: {
        width: "15%",
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },

    logo: {
        width: 190,
        height: 140
    },

    divtextos: {
        width: "100%",
        height: 100,
        alignItems: "center"
    },

    textosuperior: {
        fontSize: 27,
        fontFamily: "Montserrat_600SemiBold"
    },

    textoinferior: {
        fontSize: 17,
        color: "#252525",
        fontFamily: "Montserrat_400Regular"
    },

    divinputs: {
        height: 120,
        width: "100%"
    },

    divbotoes: {
        height: 270,
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
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
        marginTop: 20,
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
    
    alinhameio: {
        width: "70%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },

    alinhafim: {
        width: "15%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-start"
    },

    botaovoltar: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: "80%",
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 15,
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "orange"
    },

    textovoltar: {
        fontSize: 26,
        color: "orange"
    },

})

export default styles;