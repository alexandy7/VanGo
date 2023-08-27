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
        marginBottom: 50,
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

});

export default styles;