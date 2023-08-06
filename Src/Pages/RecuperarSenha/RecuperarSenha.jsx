import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import MeuText from "../../Componentes/Common/MeuText";
import Touchable from "../../Componentes/Common/Touchable";
export default function RecuperarSenha() {
    return (
        <View style={styles.geral}>
            <View style={styles.info}>

                <Image source={require('../../../assets/Logo.png')} style={styles.imagem} />
                <Text style={styles.titulo}>Recuperar senha</Text>
                <Text style={styles.msg}>Insira seu email para recuperar a senha</Text>



                <MeuText imagem={require('../../../assets/email.png')} nomePlaceholder={'Digite seu E-mail'} tipoInput='email-address'></MeuText>
                

            </View>

            <View style={styles.botao}>
                <Touchable texto={'Continuar'}></Touchable>
            </View>
        </View>
    )
}

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