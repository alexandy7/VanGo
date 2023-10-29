import { Montserrat_400Regular_Italic, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    main: {
        display: "flex",
        flex: 1,
        backgroundColor: "white"
    },

    caixaheader: {
        width: "100%",
        height: 200,
        display: "flex",
        flexDirection: "row"
    },
    
    divseta: {
        width: "15%",
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },

    seta: {
        marginTop: 20
    },

    divimagem: {
        width: "70%",
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },

    divregua: {
        width: "15%",
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },

    logo: {
        width: 190,
        height: 140
    },

    divtextos: {
        width: "100%",
        height: 100,
        alignItems: "center"
    },

    textosuperior: {
        fontSize: 27,
        fontFamily: "Montserrat_600SemiBold"
    },

    textoinferior: {
        fontSize: 17,
        color: "#252525",
        fontFamily: "Montserrat_400Regular"
    },

    reguaopcoes: {
        alignSelf: "center",
        width: "90%",
        height: 280,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30
    },

    caixaopcao: {
        height: 280,
        width: "49%",
        borderWidth: 1,
        borderRadius: 25,
        borderColor: "#F99A4C"
    },

    imagem: {
        marginTop: 25,
        alignSelf: "center",
        height: 130,
        width: "90%",
        resizeMode: "contain"
    },

    botao: {
        alignSelf: "center",
        width: "80%",
        height: 45,
        backgroundColor: "#F99A4C",
        marginTop: 45,
        borderRadius: 15,
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },

    textobotao: {
        fontSize: 16,
        color: "white",
        fontFamily: "Montserrat_500Medium"
    }

})

export default styles;