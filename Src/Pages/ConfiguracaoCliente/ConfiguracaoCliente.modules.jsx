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

    card: {
        width: "90%",
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: "10%",
        display: 'flex',
        backgroundColor: 'white',
        position: "relative",
        marginBottom: "15%"
    },

    titulocard: {
        fontSize: 17,
        position: "relative",
        bottom: "2%",
        left: "10%"
    }
});

export default styles;