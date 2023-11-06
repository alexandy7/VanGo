import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import styles from "./CadastroMotorista1.modules";
import InputEdicao from "../../Componentes/InputEdicao";
import { TextInput } from "react-native";
import BotaoGeral from "../../Componentes/BotaoGeral";
import VisualizarValorFatura from "../../Componentes/VisualizarValorFatura";

export default function CadastroMotorista1() {


    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular,
        Montserrat_600SemiBold
    });

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
                </View>
            </View>

            <View style={styles.divtextos}>
                <Text style={styles.textosuperior}>Faça seu cadastro</Text>
                <Text style={styles.textoinferior}>Insira suas informações abaixo:</Text>
            </View>

            <View style={[styles.divinputs, {height: 70}]}>
                <Text style={styles.tituloinput}>Nome</Text>
                <TextInput style={[styles.inputs, {width: "40%"}]}/>

                <Text style={styles.tituloinput}>Sobrenome</Text>
                <TextInput style={[styles.inputs, {width: "55%"}]}/>
            </View>

            <View style={[styles.divinputs, {height: 70}]}>
                <Text style={styles.tituloinput}>Quantos anos você atua na área?</Text>
                <TextInput style={[styles.inputs, {width: "25%"}]}/>
            </View>

            <View style={[styles.divinputs, {height: 70}]}>
                <Text style={styles.tituloinput}>Horário de atuação</Text>
                <TextInput style={[styles.inputs, {width: "50%"}]}/>
            </View>

            <View style={[styles.divinputs, {height: 70}]}>
                <Text style={styles.tituloinput}>Cidade de atuação</Text>
                <TextInput style={[styles.inputs, {width: "50%"}]}/>
            </View>

            <View style={[styles.divinputs, {height: 70}]}>
                {/* espaçamento */}
            </View>

            <BotaoGeral texto={"Prosseguir"} icone={"chevron-forward-outline"}/>

        </View>
    )
}