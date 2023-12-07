import { Montserrat_400Regular, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        backgroundColor: "black",
        
    },

    divanexo: {
        width: "100%",
        height: "100%",
        borderColor: "black",
        borderWidth: 0.5,
        alignSelf: "center",
        justifyContent: "center"
    },

    imagem:{
        height: "100%",
        width: "100%",
        resizeMode: 'contain', //Faz para a foto ser exibida por completo dentro do Touchable
    },

});

export default styles;