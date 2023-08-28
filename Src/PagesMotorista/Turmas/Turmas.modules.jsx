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
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        marginBottom: 10,
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

    alinhabotoes: {
        width: "90%",
        height: 50,
        alignSelf: "center",
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20
    },

    botao: {
        height: "100%",
        width: "28%",
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#e0e0e0",
        borderRadius: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
    },

    textobotao: {
        color: "#e0e0e0",
        fontSize: 17
    }

    

});

export default styles;