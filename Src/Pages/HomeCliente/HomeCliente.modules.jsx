import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: 'white',
    },

    header: {
        height: 200,
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
        height: "50%",
        display: "flex",
        position: "relative",
        marginLeft: "5%",
        width: "100%"
    },

    nome: {
        fontSize: 20,
        color: "white",
        fontFamily: "Montserrat_500Medium"
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
        width:"100%",
        height: 150,
        alignSelf: "center",
        marginTop: "5%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    alinhabotao: {
        display: "flex",
        flexDirection: "row",
        width: "25%",
        height: "100%",
    },

    seta: {
        alignSelf: "center"
    },

    viewCalendario: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        borderWidth: 3,
        borderColor: '#F7770D',
        margin: 20,
        borderRadius: 15,
    },

    calendario: {
        borderRadius: 15,
        textDayFontWeight: '600',
        arrowColor: 'red',
        monthTextColor: 'black',
        selected: true,
        selectedColor: 'red',
    },

    botaoAusencia: {

        borderRadius: 10,
        margin: 5,
        padding: 10,
        width: "90%",
        display: 'flex',
        alignItems: "center",
    },

    botaoFalta: {
        borderRadius: 10,
        margin: 5,
        padding: 10,
        width: "90%",
        display: 'flex',
        alignItems: "center",
    },

    botoesCalendario: {
        display: "flex",
        alignItems: "center",
        margin: 20,

    },

    modalCalendario: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: 'rgba(128, 128, 128, 0.60)',
        height: "100%"
    }


})

export default styles;