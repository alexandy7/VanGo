import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    principal: {
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
        marginBottom: 10
    },

    divesquerda: {
        height: 80,
        width: "15%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end"
    },

    divmeio: {
        height: 80,
        width: "70%",
        display: "flex",
        justifyContent: "center",
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

    divopcoes: {
        alignSelf: "center",
        width: "90%",
        height: 90,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        bottom: 20
    },

    divtexto: {
        width: "100%",
        height: "40%",
        display: "flex",
        alignItems: "center",
        marginTop: 50
    },

    texto: {
        fontSize: 20,
        fontFamily: "Montserrat_500Medium"
    },

    divbotoes: {
        width: "100%",
        height: "60%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    botao: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75%",
        width: "40%",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "orange",
        borderRadius: 15
    },
    
    textobotao: {
        fontSize: 16,
        color: "orange",
        fontFamily: "Montserrat_500Medium"
    },

    divanexo: {
        width: "70%",
        height: 250,
        backgroundColor: "#e8e8e8",
        alignSelf: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 5,
        borderColor: "darkgray",
        marginTop: 40
    },

    botaoanexar: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: "60%",
        alignSelf: "center",
        backgroundColor: "orange",
        borderRadius: 15,
        marginTop: 30
    },

    textoanexar: {
        fontSize: 18,
        color: "white",
        fontFamily: "Montserrat_500Medium"
    }

});

export default styles;