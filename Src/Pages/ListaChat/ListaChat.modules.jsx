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
        backgroundColor: "#F7770D",
        width: "100%",
        height: 80,
    },

    alinhaseta: {
        width: "33%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    alinhatexto: {
        width: "67%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    titulo: {
        fontSize: 26,
        color: "white"
    },

    alinhabarra: {
        width: "100%",
        height: 60,
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F7770D",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        marginBottom: 20
    }

});

export default styles;