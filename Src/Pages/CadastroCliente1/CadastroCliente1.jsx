import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import styles from "./Cadastrocliente1.modules";
import InputEdicao from "../../Componentes/InputEdicao";
import { TextInput } from "react-native";
import BotaoGeral from "../../Componentes/BotaoGeral";

export default function CadastroCliente1() {


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
                    <Text style={styles.numeropasso}>01/04</Text>
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

            <View style={[styles.divinputs, {height: 80}]}>
                <Text style={styles.tituloinput}>CEP</Text>
                <TextInput style={[styles.inputs, {width: "60%"}]}/>
                <Text style={styles.textocep}>Clique aqui para saber seu CEP</Text>
            </View>

            <View style={[styles.divinputs, {height: 70}]}>
                <Text style={styles.tituloinput}>Logradouro</Text>
                <TextInput style={[styles.inputs, {width: "47.5%"}]}/>

                <Text style={styles.tituloinput}>Bairro</Text>
                <TextInput style={[styles.inputs, {width: "47.5%"}]}/>
            </View>

            <View style={[styles.divinputs, {height: 70}]}>
                <Text style={styles.tituloinput}>Complemento</Text>
                <TextInput style={[styles.inputs, {width: "45%"}]}/>

                <Text style={styles.tituloinput}>Número</Text>
                <TextInput style={[styles.inputs, {width: "20%"}]}/>
            </View>

            <View style={[styles.divinputs, {height: 70}]}>
                <Text style={styles.tituloinput}>Estado</Text>
                <TextInput style={[styles.inputs, {width: "45%"}]}/>
            </View>

            <BotaoGeral texto={"Prosseguir"} icone={"chevron-forward-outline"}/>

        </View>
    )
}