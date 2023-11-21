import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import styles from "./Cadastrocliente1.modules";
import InputEdicao from "../../Componentes/InputEdicao";
import { TextInput } from "react-native";
import BotaoGeral from "../../Componentes/BotaoGeral";
import { useNavigation } from "@react-navigation/native";
import showToast from "../../services/Toast/Toast";

export default function CadastroCliente1() {

    const [nomeOuHr, setNomeOuHr] = useState('default');

    const [nomeCliente, setNomeCliente] = useState('');
    const [sobreNomeCliente, setSobreNomeCliente] = useState('');
    const [cepCliente, setCepCliente] = useState();
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState();
    const [emailCliente, setEmailCliente] = useState('');
    const [senha, setSenha] = useState('');
    const [escolaCliente, setEscolaCliente] = useState('');
    const [base64, setBase64] = useState(null)

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
                <TextInput 
                style={[styles.inputs, {width: "40%"}]} 
                value={nomeCliente} 
                onChangeText={(text)=> setNomeCliente(text)}
                />

                <Text style={styles.tituloinput}>Sobrenome</Text>
                <TextInput 
                style={[styles.inputs, {width: "55%"}]}
                value={sobreNomeCliente}
                onChangeText={(text)=> setSobreNomeCliente(text)}
                />
            </View>

            <View style={[styles.divinputs, {height: 80}]}>
                <Text style={styles.tituloinput}>CEP</Text>
                <TextInput 
                style={[styles.inputs, {width: "60%"}]}
                onChangeText={(text)=> {
                    if(cepCliente.length === 5){
                        setCepCliente('-' + text);
                        return;
                    };

                    setCepCliente(text);
                }}
                />
                <Text style={styles.textocep}>Clique aqui para saber seu CEP</Text>
            </View>

            <View style={[styles.divinputs, {height: 70}]}>
                <Text style={styles.tituloinput}>Logradouro</Text>
                <TextInput style={[styles.inputs, {width: "47.5%"}]}/>

                <Text style={styles.tituloinput}>Bairro</Text>
                <TextInput 
                style={[styles.inputs, {width: "47.5%"}]}
                value={bairro}
                onChangeText={(text)=> setBairro(text)}
                />
            </View>

            <View style={[styles.divinputs, {height: 70}]}>
                <Text style={styles.tituloinput}>Complemento</Text>
                <TextInput style={[styles.inputs, {width: "45%"}]}/>

                <Text style={styles.tituloinput}>Número</Text>
                <TextInput 
                style={[styles.inputs, {width: "20%"}]}
                value={numero}
                onChangeText={(text)=> setNumero(text)}
                />
            </View>

            <View style={[styles.divinputs, {height: 70}]}>
                <Text style={styles.tituloinput}>Estado</Text>
                <TextInput style={[styles.inputs, {width: "45%"}]}/>
            </View>

            <BotaoGeral 
            texto={"Prosseguir"} 
            icone={"chevron-forward-outline"} 
            evento={() => {
                // if(nomeCliente === "" || sobreNomeCliente === "" || bairro === "" || numero === ""){
                //     showToast("error", "Campo vazio!", "Preencha todos os campos.", 2000 );
                //     return;
                // }
                navigation.navigate('CadastroCliente2', {
                nomeSobrenome1: nomeCliente + ' ' + sobreNomeCliente,
                bairro1: bairro + ' ' +  numero,
            })
            }}/>

        </ScrollView>
    )
}