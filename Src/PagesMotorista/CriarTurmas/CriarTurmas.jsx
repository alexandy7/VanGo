import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./CriarTurmas.modules";
import NotFound from "../../Componentes/NotFound";
import { TextInput } from "react-native";
import InputCriacao from "../../Componentes/InputCriacao";

export default function CriarTurmas() {

    const navigation = useNavigation();

    const irPerfil = () => {
        navigation.navigate('TabBarScreen')
    }

    return (
        <View style={styles.container}>

            <View style={styles.caixaheader}>
                <View style={styles.divseta}>
                    <Ionicons style={styles.seta} name={"chevron-back-outline"} size={50} color="orange"/>
                </View>

                <View style={styles.divimagem}>
                    <Image style={styles.logo} source={require("../../../assets/Logo.png")}/>
                </View>
            

                {/* essa div é criada para manter a seta no mesmo nível do icone
                sem empurrar a logo */}

                <View style={styles.divregua}>
                    <Text></Text>
                </View>

            </View>

            <View style={styles.divtextos}>
                <Text style={styles.textosuperior}>Crie a sua nova turma</Text>
                <Text style={styles.textoinferior}>Insira as informações abaixo:</Text>
            </View>

            <View style={styles.divinputs}>
                <InputCriacao icone={"grid"} dado={"Nome da Turma"}/>
                <InputCriacao icone={"time-outline"} dado={"Horário"}/>
            </View>

            <View style={styles.divbotoes}>

            <TouchableOpacity style={styles.botaoconcluir}>
                {/* esse espaço vazio é usado para alinhar texto do botão ao meio */}
                <View style={styles.alinhainicio}>
                    <Text></Text>
                </View>

                <View style={styles.alinhameio}>
                    <Text style={styles.textoconcluir}>Enviar Anexo</Text>
                </View>

                <View style={styles.alinhafim}>
                    <Ionicons style={styles.icon} name={"chevron-forward-outline"} size={30} color="white"/>
                </View>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.botaovoltar}>
                <View style={styles.alinhainicio}>
                    <Ionicons style={styles.icon} name={"chevron-back-outline"} size={30} color="orange"/>
                </View>

                <View style={styles.alinhameio}>
                    <Text style={styles.textovoltar}>Voltar</Text>
                </View>

                <View style={styles.alinhafim}>
                    <Text></Text>
                </View>
            </TouchableOpacity> */}

            </View>
        </View>
    )

}