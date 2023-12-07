import { StyleSheet } from "react-native";

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: "white",

    },

    titulo: {
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "40%"
    },

    textoTitulo: {
        fontSize: 32,
        textAlign: "center",
        marginBottom: "20%"

    },

    imagem: {
        top: 15,
        alignSelf: 'center',
        width: 130,
        height: 100,
        marginBottom: "5%"
    },

    input: {
        alignSelf: "center",
        backgroundColor: 'rgba(196, 196, 196, 0.20)',
        height: 60,
        width: "80%",
        borderRadius: 10,
        borderColor: "#F7770D",
        borderWidth: 0.5,
        paddingLeft: 15,
    
    },

    botao: {
        marginTop: "35%",
        marginBottom: "10%"
    },

    MsgAguardando: {
        alignSelf: "center",
        backgroundColor: "#F7770D",
        width: '100%',
        justifyContent: 'center',
        height: 45,
        flex: 1,
        marginTop: "30%"
    },

    viewGif: {
        alignSelf: "center",
        top: 50
    },

    gif:{
        resizeMode: 'contain',
        height: 350
    },

    SolicitacaoEnviada: {
        alignSelf: "center",
        flexDirection: "column",
    }
})

export default styles;