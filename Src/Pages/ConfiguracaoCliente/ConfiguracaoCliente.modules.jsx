import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#EFEFEF',
    },

    header: {
        display: "flex",
        flexDirection: "row",
        height: 80,
        width: "100%",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        marginBottom: 50
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
        fontSize: 26,
        position:"relative",
        alignSelf: "center",
    },

    card: {
        width: "90%",
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: "10%",
        display: 'flex',
        backgroundColor: 'white',
        position: "relative",
        marginBottom: 50
    },

    titulocard: {
        fontSize: 17,
        position: "relative",
        bottom: "2%",
        left: "10%"
    }
});

export default styles;