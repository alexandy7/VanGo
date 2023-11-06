import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    main: {
        display: "flex",
        flex: 1,
        backgroundColor: "white"
    },

    caixaheader: {
        width: "100%",
        height: 180,
        display: "flex",
        flexDirection: "row"
    },
    
    divseta: {
        width: "15%",
        height: 180,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },

    seta: {
        marginTop: 20
    },

    divimagem: {
        width: "70%",
        height: 180,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },

    logo: {
        width: 180,
        height: 140,
        resizeMode: "contain"
    },

    divregua: {
        width: "15%",
        height: 180,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },

    numeropasso: {
        fontFamily: "Montserrat_400Regular",
        color: "#F7770D",
        marginTop: 30
    },

    divtextos: {
        width: "100%",
        height: 80,
        alignItems: "center",
    },

    textosuperior: {
        fontSize: 23,
        fontFamily: "Montserrat_600SemiBold"
    },

    textoinferior: {
        fontSize: 17,
        color: "#252525",
        fontFamily: "Montserrat_400Regular"
    },

    divinputs: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        width: "90%",
        alignSelf: "center",
        marginBottom: 3,
    },

    tituloinput: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 17,
        color: "#F7770D",
    },

    textocep: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 13,
        color: "#F7770D",
    },

    inputs: {
        borderRadius: 10,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 17,
        height: 40,
        borderWidth: 1, 
        borderColor: "#F7770D",
        fontFamily: "Montserrat_400Regular",
        marginRight: "5%"
    }

})

export default styles;