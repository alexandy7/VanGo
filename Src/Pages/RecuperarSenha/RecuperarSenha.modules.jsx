import { StyleSheet } from "react-native"

const styles = StyleSheet.create(
    {
        botao: {
            bottom: 50
        },

        info: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            bottom: 50
        },

        geral: {
            flex: 1
        },

        titulo: {
            textAlign: 'center',
            fontSize: 25,
            marginTop: 20
        },

        imagem: {
            alignSelf: 'center',
            width: 130,
            height: 120,
        },

        msg: {
            textAlign: 'center',
            fontSize: 13,
            color: 'rgb(145, 138, 138)'
        },
    }
)

export default styles;