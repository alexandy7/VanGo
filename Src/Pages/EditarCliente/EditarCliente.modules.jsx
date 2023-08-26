import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    main: {
        flex: 0,
        backgroundColor: '#EFEFEF',
    },
    
    header: {
        display: "flex",
        flexDirection: "row",
        height: 80,
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        marginBottom: 50
    },

    seta: {
        position: "relative",
        right: "80%",
        top: "5%"
    },

    titulo: {
        fontSize: 26,
        position:"relative",
        alignSelf: "center",
        top: "5%"
    },

    tituloform: {
        fontSize: 18,
        marginLeft: "10%"
    },

    botao: {
        height: 50,
        width: "85%",
        alignSelf: "center",
        backgroundColor: "orange",
        marginTop: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        elevation: 5
    },

    texto: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    }
})

export default styles;