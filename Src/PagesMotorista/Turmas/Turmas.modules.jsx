import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: 'white',
    },

    scroll: {
        backgroundColor: "white"
    },

    header: {
        display: "flex",
        flexDirection: "row",
        height: 110,
        width: "100%",
        position: "relative",
        justifyContent: "center",
        marginBottom: 20,
        flexWrap: "wrap",
    },
    
    divesquerda: {
        height: 60,
        width: "15%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    
    divmeio: {
        height: 60,
        width: "70%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    
    divdireita: {
        height: 60,
        width: "15%",   
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    
    divbarra: {
        height: 50,
        width: "100%",   
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },

    titulo: {
        fontSize: 26,
        position: "relative",
        alignSelf: "center",
        fontFamily: "Montserrat_500Medium"
    },

    alinhabotoes: {
        width: "90%",
        height: 50,
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20
    },

    botao: {
        height: "100%",
        width: "28%",
        borderRadius: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
    },

    textobotao: {
        fontSize: 16,
        fontFamily: "Montserrat_500Medium"
    }

});

export default styles;