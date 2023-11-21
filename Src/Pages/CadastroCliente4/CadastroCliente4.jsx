import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import styles from "./CadastroCliente4.modules";
import InputEdicao from "../../Componentes/InputEdicao";
import { TextInput } from "react-native";
import BotaoGeral from "../../Componentes/BotaoGeral";
import { useNavigation } from "@react-navigation/native";
import showToast from "../../services/Toast/Toast";

const CadastroCliente4 = ({ route }) => {

    const { bairro1, nomeSobrenome1, bairro2, nomeSobrenome2, nomeCrianca, escolaCliente } = route.params;


    const [emailCliente, setEmailCliente] = useState('');
    const [senhaCliente, setSenhaCliente] = useState('');


    function validarEmail(email) {
        // Expressão regular para validar o formato do email
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

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
        <ScrollView style={styles.main}>
            <View style={styles.caixaheader}>
                <TouchableOpacity style={styles.divseta} onPress={() => { navigation.goBack() }}>
                    <Ionicons style={styles.seta} name={"chevron-back-outline"} size={40} color="#dbdbdb" />
                </TouchableOpacity>

                <View style={styles.divimagem}>
                    <Image style={styles.logo} source={require("../../../assets/Logo.png")} />
                </View>

                <View style={styles.divregua}>
                    <Text style={styles.numeropasso}>5/5</Text>
                </View>
            </View>

            <View style={styles.divtextos}>
                <Text style={styles.textosuperior}>Quase lá!</Text>
                <Text style={styles.textoinferior}>Insira seu E-mail e crie sua senha:</Text>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                <View style={[styles.divinputs, { height: 70 }, { marginBottom: 30 }]}>
                    <Text style={styles.tituloinput}>E-mail</Text>
                    <TextInput
                        style={[styles.inputs, { width: "100%" }]}
                        value={emailCliente}
                        onChangeText={(text) => { setEmailCliente(text) }}
                    />
                </View>

                <View style={[styles.divinputs, { height: 70 }, { marginBottom: "30%" }]}>
                    <Text style={styles.tituloinput}>Senha</Text>
                    <TextInput
                        style={[styles.inputs, { width: "100%" }]}
                        value={senhaCliente}
                        onChangeText={(text) => { setSenhaCliente(text) }}
                    />
                </View>
            </View>

            <View style={{ marginBottom: 70 }}>
                <BotaoGeral
                    texto={"Prosseguir"}
                    icone={"chevron-forward-outline"}
                    evento={() => {

                        if (emailCliente === '' || senhaCliente === '') {
                            showToast("error", "Escola", "Selecione sua escola!", 2000);
                            return;
                        };

                        if (!validarEmail(emailCliente)) {
                            showToast("error", "E-mail", "Insira um E-mail válido!", 2000);
                            return;
                        }

                        navigation.navigate('CadastroCliente5', {
                            bairro1: bairro1,
                            nomeSobrenome1: nomeSobrenome1,
                            bairro2: bairro2,
                            nomeSobrenome2: nomeSobrenome2,
                            nomeCrianca: nomeCrianca,
                            escolaCliente: escolaCliente,
                            emailCliente: emailCliente,
                            senhaCliente: senhaCliente
                        });
                    }
                    } />
            </View>

        </ScrollView>
    )
};

export default CadastroCliente4;