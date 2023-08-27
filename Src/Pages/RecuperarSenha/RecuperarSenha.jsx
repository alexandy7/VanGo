import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import MeuText from "../../Componentes/MeuText";
import Touchable from "../../Componentes/Touchable";
import styles from "./RecuperarSenha.modules";

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