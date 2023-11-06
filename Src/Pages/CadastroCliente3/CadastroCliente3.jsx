import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import styles from "./CadastroCliente3.modules";
import InputEdicao from "../../Componentes/InputEdicao";
import { TextInput } from "react-native";
import BotaoGeral from "../../Componentes/BotaoGeral";

export default function CadastroCliente3() {


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
            <View style={styles.caixacima}>
                {/* essa caixa serve para manter o botão fixo em relação a tela, sempre estando embaixo */}
                {/* alinhar com porcentagem não funciona nesse caso */}
                <View style={styles.caixaheader}>
                    <TouchableOpacity style={styles.divseta} onPress={()=>{navigation.goBack()}}>
                        <Ionicons style={styles.seta} name={"chevron-back-outline"} size={40} color="#dbdbdb" />
                    </TouchableOpacity>

                    <View style={styles.divimagem}>
                        <Image style={styles.logo} source={require("../../../assets/Logo.png")} />
                    </View>

                    <View style={styles.divregua}>
                        <Text style={styles.numeropasso}>03/04</Text>
                    </View>
                </View>

                <View style={styles.divtextos}>
                    <Text style={styles.textosuperior}>Adicione outro endereço</Text>
                    <Text style={styles.textoinferior}>Insira suas informações abaixo:</Text>
                </View>

                <View style={[styles.divinputs, {height: 70}]}>
                    <Text style={styles.tituloinput}>Nome</Text>
                    <TextInput style={[styles.inputs, {width: "100%"}]}/>
                </View>
            </View>

            <BotaoGeral texto={"Prosseguir"} icone={"chevron-forward-outline"}/>

        </View>
    )
}