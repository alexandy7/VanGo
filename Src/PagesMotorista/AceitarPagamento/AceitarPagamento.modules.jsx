import { Montserrat_400Regular, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
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

    divanexo: {
        width: "75%",
        height: 340,
        alignSelf: "center",
        marginTop: "5%",
        marginBottom: "10%"
    },

    comprovante:{
        width: "100%",
        height: "100%",
        resizeMode: 'contain', 
        borderRadius: 20,
    },

    textodestacado: {
        fontSize: 16,
        fontFamily: "Montserrat_400Regular",
        color: "#F7770D"
    },

    textoanexo: {
        fontSize: 16,
        fontFamily: "Montserrat_400Regular"
    },

    botaoaceitar: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: "75%",
        alignSelf: "center",
        backgroundColor: "#F7770D",
        borderRadius: 15,
        marginTop: 30
    },

    textobotaoaceitar: {
        fontSize: 18,
        color: "white",
        fontFamily: "Montserrat_500Medium"
    },

    botaorecusar: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: "75%",
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 15,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#F7770D"
    },

    textobotaorecusar: {
        fontSize: 18,
        color: "#F7770D",
        fontFamily: "Montserrat_500Medium"
    }

});

export default styles;