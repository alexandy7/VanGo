import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
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

    circleContainer: {
        position: 'absolute',
        backgroundColor: 'red', // Cor do círculo
        width: 20, // Largura do círculo
        height: 20, // Altura do círculo
        borderRadius: 10, // Metade da largura para fazer um círculo
        justifyContent: 'center',
        alignItems: 'center',
        right: -10, // Posicionamento em relação à borda direita da View pai
        top: -10, // Posicionamento em relação à borda superior da View pai
      },
      circleText: {
        color: 'white', // Cor do texto dentro do círculo
        fontWeight: 'bold',
      },

});

export default styles;