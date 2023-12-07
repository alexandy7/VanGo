import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import styles from "./CadastroCliente2.modules";
import InputEdicao from "../../Componentes/InputEdicao";
import { TextInput } from "react-native";
import BotaoGeral from "../../Componentes/BotaoGeral";
import { useNavigation } from "@react-navigation/native";

const CadastroCliente2 = ({ route }) => {

    const { nomeSobrenome1, bairro1 } = route.params


    const navigation = useNavigation();

    const [nomeCliente2, setNomeCliente2] = useState('');
    const [sobreNomeCliente2, setSobreNomeCliente2] = useState('');
    const [cepCliente2, setCepCliente2] = useState();
    const [bairro2, setBairro2] = useState('');
    const [numero2, setNumero2] = useState();

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular,
        Montserrat_600SemiBold
    });

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
                    <Text style={styles.numeropasso}>02/04</Text>
                </View>
            </View>

            <View style={styles.divtextos}>
                <Text style={styles.textosuperior}>Endereço para emergências</Text>
                <Text style={styles.textoinferior}>Insira suas informações abaixo:</Text>
            </View>

            <View style={[styles.divinputs, { height: 70 }]}>
                <Text style={styles.tituloinput}>Nome</Text>
                <TextInput
                    style={[styles.inputs, { width: "40%" }]}
                    value={nomeCliente2}
                    onChangeText={(text) => setNomeCliente2(text)}
                />

                <Text style={styles.tituloinput}>Sobrenome</Text>
                <TextInput
                    style={[styles.inputs, { width: "55%" }]}
                    value={sobreNomeCliente2}
                    onChangeText={(text) => setSobreNomeCliente2(text)}
                />
            </View>

            <View style={[styles.divinputs, { height: 70 }]}>
                <Text style={styles.tituloinput}>Logradouro</Text>
                <TextInput style={[styles.inputs, { width: "47.5%" }]} />

                <Text style={styles.tituloinput}>Bairro</Text>
                <TextInput
                    style={[styles.inputs, { width: "47.5%" }]}
                    value={bairro2}
                    onChangeText={(text) => setBairro2(text)}
                />
            </View>

            <View style={[styles.divinputs, { height: 70 }]}>
                <Text style={styles.tituloinput}>Complemento</Text>
                <TextInput style={[styles.inputs, { width: "45%" }]} />

                <Text style={styles.tituloinput}>Número</Text>
                <TextInput
                    style={[styles.inputs, { width: "20%" }]}
                    value={numero2}
                    onChangeText={(text) => setNumero2(text)}
                />
            </View>

            <View style={[styles.divinputs, { height: 70 }]}>
                <Text style={styles.tituloinput}>Estado</Text>
                <TextInput style={[styles.inputs, { width: "45%" }]} />
            </View>

            <BotaoGeral
                texto={"Prosseguir"}
                icone={"chevron-forward-outline"}
                evento={() => {
                    // if (nomeCliente2 === "" || sobreNomeCliente2 === "" || bairro2 === "" || numero2 === "") {
                    //     showToast("error", "Campo vazio!", "Preencha todos os campos.", 2000);
                    //     return;
                    // }

                    navigation.navigate('CadastroCliente3', {
                        bairro1: bairro1,
                        nomeSobrenome1: nomeSobrenome1,
                        bairro2: bairro2 + ' ' + numero2,
                        nomeSobrenome2: nomeCliente2 + ' ' + sobreNomeCliente2
                    })
                }
                }
            />

        </ScrollView>
    )
}

export default CadastroCliente2;