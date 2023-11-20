import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import styles from "./CadastroTelaInicial.modules";
import InputEdicao from "../../Componentes/InputEdicao";
import { TextInput } from "react-native";
import BotaoGeral from "../../Componentes/BotaoGeral";
import { useNavigation } from "@react-navigation/native";

export default function CadastroTelaInicial() {

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular,
        Montserrat_600SemiBold
    });

    const navigation = useNavigation();

    if (!fonteLoaded) {
        return null;
    }

    return (
        <View style={styles.main}>
            <View style={styles.caixaheader}>
                <TouchableOpacity style={styles.divseta} onPress={()=>{navigation.goBack()}}>
                    <Ionicons style={styles.seta} name={"chevron-back-outline"} size={40} color="#dbdbdb" />
                </TouchableOpacity>

                <View style={styles.divimagem}>
                    <Image style={styles.logo} source={require("../../../assets/Logo.png")} />
                </View>

                <View style={styles.divregua}>
                    <Text style={styles.numeropasso}></Text>
                </View>
            </View>

            <View style={styles.divtextos}>
                <Text style={styles.textosuperior}>Vamos começar!</Text>
                <Text style={styles.textoinferior}>Insira seu login e crie sua senha:</Text>
            </View>

            <View style={[styles.divinputs, {height: 70}, {marginBottom: 3}]}>
                <Text style={styles.tituloinput}>Login</Text>
                <TextInput 
                style={[styles.inputs, {width: "100%"}]} 
                />
            </View>

            <View style={[styles.divinputs, {height: 70}, {marginBottom: "60%"}]}>
                <Text style={styles.tituloinput}>Senha</Text>
                <TextInput 
                style={[styles.inputs, {width: "100%"}]} 
                />
            </View>

            <BotaoGeral 
                texto={"Prosseguir"} 
                icone={"chevron-forward-outline"} 
                evento={() => navigation.navigate('CadastroCliente2', {
                nomeSobrenome: nomeCliente + sobreNomeCliente,
                bairro: bairro + ' ' +  numero,
            })}/>

        </View>
    )
}