import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        backgroundColor: "white"
    },

    titulo: {
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontFamily: "Montserrat_500Medium"
    },

    pagamentoAtual: {
        flexDirection: 'row'
    },

    ultimospagamentos: {
        fontSize: 20,
        position: "relative",
        left: 42,
        bottom: 5,
        marginTop: "5%",
        fontFamily: "Montserrat_500Medium"
    },

})

export default styles;