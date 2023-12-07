import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import styles from "./CadastroMotorista1.modules";
import InputEdicao from "../../Componentes/InputEdicao";
import { TextInput } from "react-native";
import BotaoGeral from "../../Componentes/BotaoGeral";
import VisualizarValorFatura from "../../Componentes/VisualizarValorFatura";
import { useNavigation } from "@react-navigation/native";
import showToast from "../../services/Toast/Toast";

export default function CadastroMotorista1() {

    const navigation = useNavigation();


    const [nomeMotorista, setNomeMotorista] = useState("");
    const [sobrenomeMotorista, setSobrenomeMotorista] = useState("");
    const [anosAtuacao, setAnosAtuacao] = useState("");
    const [periodoMotorista, setPeriodoMotorista] = useState("");
    const [cidadeMotorista, setCidadeMotorista] = useState("");


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
                    <View style={styles.divregua}>
                        <Text style={styles.numeropasso}>1/3</Text>
                    </View>
                <TouchableOpacity style={styles.divseta} onPress={() => { navigation.goBack() }}>
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


            <View style={[styles.divinputs, { height: 70 }]}>
                <Text style={styles.tituloinput}>Nome</Text>
                <TextInput
                    style={[styles.inputs, { width: "40%" }]}
                    value={nomeMotorista}
                    onChangeText={(text) => setNomeMotorista(text)}
                />

                <Text style={styles.tituloinput}>Sobrenome</Text>
                <TextInput
                    style={[styles.inputs, { width: "55%" }]}
                    value={sobrenomeMotorista}
                    onChangeText={(text) => setSobrenomeMotorista(text)}
                />
            </View>

            <View style={[styles.divinputs, { height: 70 }]}>
                <Text style={styles.tituloinput}>Quantos anos você atua na área?</Text>
                <TextInput
                    style={[styles.inputs, { width: "25%" }]}
                    value={anosAtuacao}
                    onChangeText={(text) => setAnosAtuacao(text)}
                    keyboardType="numeric"
                />
            </View>

            <View style={[styles.divinputs, { height: 70 }]}>
                <Text style={styles.tituloinput}>Periodo de atuação</Text>
                <TextInput
                    style={[styles.inputs, { width: "40%" }]}
                    value={periodoMotorista}
                    onChangeText={(text) => setPeriodoMotorista(text)}
                    placeholder="Manhã/tarde/integral"
                    placeholderTextColor="#D3D3D3"
                />
            </View>

            <View style={[styles.divinputs, { height: 70 }]}>
                <Text style={styles.tituloinput}>Cidade de atuação</Text>
                <TextInput
                    style={[styles.inputs, { width: "60%" }]}
                    value={cidadeMotorista}
                    onChangeText={(text) => setCidadeMotorista(text)}
                />
            </View>

            <View style={[styles.divinputs, { height: 70 }]}>
                {/* espaçamento */}
            </View>

            <BotaoGeral
                texto={"Prosseguir"}
                icone={"chevron-forward-outline"}
                evento={() => {
                    if(periodoMotorista === "" || nomeMotorista === "" || sobrenomeMotorista === "" || cidadeMotorista === "" || anosAtuacao === ""){
                        showToast("error", "Campo vazio", "Preencha todos os campos!", 2000);
                        return;
                    }
                    navigation.navigate("CadastroMotorista2", {
                        nomeSobrenome: nomeMotorista.trim() + ' ' + sobrenomeMotorista.trim(),
                        anosAtuacao: anosAtuacao,
                        periodoMotorista: periodoMotorista,
                        cidadeMotorista: cidadeMotorista
                    });
                }}
            />

        </View>
    )
}