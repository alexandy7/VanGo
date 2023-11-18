import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#EFEFEF',
    },

    scroll: {
        backgroundColor: "white",
        flex: 1
    },

    header: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F7770D",
        width: "100%",
        height: 80,
    },

    divesquerda: {
        width: "15%",
        height: "100%",
        alignItems: "flex-end",
        justifyContent: "center",
    },

    divmeio: {
        width: "70%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    divdireita: {
        width: "15%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    titulo: {
        fontSize: 26,
        color: "white",
        fontFamily: "Montserrat_500Medium"
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