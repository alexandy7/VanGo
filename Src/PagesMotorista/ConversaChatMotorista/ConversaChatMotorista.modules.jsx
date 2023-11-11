import { Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    main: {
        display: "flex",
        flex: 1,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between"
    },

    header: {
        width: "100%",
        height: 120,
        backgroundColor: "#F99A4C",
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        display: "flex",
        flexDirection: "row",
    },

    divsetaheader: {
        height: "100%",
        width: "15%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
    },

    divimagemheader: {
        height: "100%",
        width: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    imagemheader: {
        height: "50%",
        width: "80%",
        borderRadius: 50,
        resizeMode: "contain",
    },

    divtextoheader: {
        width: "65%",
        height: "100%",
        paddingLeft: 5,
        justifyContent: "center"
    },

    texto1header: {
        fontSize: 22,
        color: "white",
        fontFamily: "Montserrat_500Medium"
    },

    texto2header: {
        fontSize: 17,
        color: "white",
        fontFamily: "Montserrat_300Light"
    },

    rolagemchat: {
        backgroundColor: "white"
    },

    divcaixatexto: {
        height: 80,
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    caixademensagem: {
        height: 50,
        width: "90%",
        elevation: 10,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    divreguainput: {
        width: "85%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
    },

    divreguaicon: {
        width: "15%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    
    input: {
        width: "100%",
        paddingLeft: 15
    }


})

export default styles;