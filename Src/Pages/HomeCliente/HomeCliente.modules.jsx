import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#EFEFEF',
    },

    header: {
        height: "25%",
        backgroundColor: "#F7770D",
        display: "flex",
        flexDirection: "row"
    },

    alinhanomefoto: {
        position: "relative",
        width: "60%",
        height: "100%",
        display: "flex"
    },

    divfoto: {
        position: "relative",
        height: "60%",
        justifyContent: "center"
    },

    foto: {
        position: "relative",
        width: "40%",
        height: "70%",
        marginLeft: "10%",
        marginTop: "7%",
        borderRadius: 30
    },

    divnome:{
        height: "40%",
        display: "flex",
        position: "relative",
    },

    nome: {
        fontSize: 23,
        marginLeft: "5%",
        color: "white",
    },

    divicones: {
        width: "40%",
        height: "100%",
        display: "flex",
        flexDirection: "row"
    },
    
    alinhaicone: {
        height: "50%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    divbotoes: {
        width:"90%",
        height: "15%",
        alignSelf: "center",
        marginTop: "5%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    alinhabotao: {
        display: "flex",
        flexDirection: "row",
        width: "23%",
        height: "100%",
    },



})

export default styles;