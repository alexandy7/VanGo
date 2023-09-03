import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    principal: {
        flex: 1,
        backgroundColor: "white"
    },

    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 50,
    },

    seta: {
        position: "absolute",
        left: 30
    },

    titulo: {
        fontSize: 26,
        position: "relative",
        alignSelf: "center",
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
        alignItems: "center"
    },

    texto: {
        fontSize: 20,
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
        color: "orange"
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
        borderColor: "darkgray"
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
        color: "white"
    }

});

export default styles;