import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./AdicionarFoto.modules";
import NotFound from "../../Componentes/NotFound";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import ApiCliente from "../../services/Api/ApiCiente";
import { ActivityIndicator } from "react-native";
import SemWifi from "../../Componentes/SemWifi";
import NetInfo from '@react-native-community/netinfo';

const AdicionarFoto = ({ route }) => {
    
    const { email_cliente, senha_cliente, nome_cliente, cpf_responsavel, endereco_cliente, responsavel_cliente, escolaCliente } = route.params;
    
    const navigation = useNavigation();
    
    const [_base64, setBase64] = useState("");
    const [exibirFoto, setExibirFoto] = useState(false);
    const [foto, setFoto] = useState(null);
    const [clicado, setClicado] = useState(false);
    const [internet, setInternet] = useState(true);
    
    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular
    });
    
        useEffect(() => {
            checkInternetConnection();
        }, [internet]);

    if (!fonteLoaded) {
        return null;
    };
    
    async function checkInternetConnection() {
        const state = await NetInfo.fetch();
        
        if (!state.isConnected) {
            console.log('O dispositivo está conectado à internet.');
            return;
        };

        setInternet(true);
    };


    async function selecionarImagem() {
        try {

            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
                aspect: [4, 4],
                allowsEditing: true,
                base64: true
            });

            if (result.canceled) {
                return;
            };
            setBase64(result.assets[0].base64);
            setFoto(result.assets[0].uri);
            setExibirFoto(true);

        }
        catch (error) {
            console.log(error)
        };
    };

    async function CadastrarCliente() {
        const data = {
            Email_cliente: email_cliente,
            Senha_cliente: senha_cliente,
            Nome_cliente: nome_cliente,
            Base64: _base64,
            Cpf_responsavel: cpf_responsavel,
            Endereco_cliente: endereco_cliente,
            Endereco_reserva: 'endereco teste',
            Responsavel_cliente: responsavel_cliente,
            Escola_cliente: escolaCliente
        };

        try {

            const resposta = await axios.post('https://apivango.azurewebsites.net/api/Auth/CadastrarCliente', data);

            if (resposta != null) {
                navigation.navigate('Login');
            } else {
                console.log('Usuário não encontrado');
            };
        }

        catch (error) {
            console.error('Erro na consulta:', error);
            setClicado(false);
        };
    };
    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <View style={styles.divesquerda}>
                    <TouchableOpacity style={styles.seta} onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back-outline" size={35} color={"gray"} />
                    </TouchableOpacity>
                </View>

                <View style={styles.divmeio}>

                </View>

                <View style={styles.divdireita}>

                </View>

            </View>

            <View style={styles.divdados}>
                <View style={styles.divimagem}>
                    <Image style={styles.imagem} source={require("../../../assets/Logo.png")} />
                </View>

                <View style={styles.divtexto}>
                    <Text style={styles.texto1}>Adicione sua foto de perfil</Text>
                    <Text style={styles.texto2}>Insira as informações abaixo</Text>
                </View>
            </View>
            {
                //Se tiver internet renderiza a tela
                internet ? (

                    <View>
                        {
                            //Exibe a foto selecionada
                            exibirFoto ? (
                                <TouchableOpacity onPress={() => {
                                    selecionarImagem();
                                }}>
                                    <Image source={{ uri: foto }} style={styles.foto} />
                                </TouchableOpacity>
                            )
                                :
                                (
                                    <TouchableOpacity style={styles.containerfoto} onPress={() => selecionarImagem()}>
                                        <Ionicons name="camera-outline" size={55} color={"#F7770D"} />
                                    </TouchableOpacity>
                                )
                        }
                        {
                            // Quando clicado, aparece a animação do ActivityIndicator
                            clicado ? (
                                <TouchableOpacity disabled={true} style={styles.botaoconcluir} onPress={() => { CadastrarCliente() }}>
                                    <View style={styles.alinhainicio}>
                                        <Text></Text>
                                    </View>
                                    <View style={styles.alinhameio}>
                                        <ActivityIndicator color={'white'} />
                                    </View>
                                    <View style={styles.alinhafim}>
                                        <Ionicons style={styles.icon} name={"chevron-forward-outline"} size={30} color="white" />
                                    </View>
                                </TouchableOpacity>
                            )
                                :
                                (
                                    <TouchableOpacity style={styles.botaoconcluir}
                                        onPress={() => {
                                            CadastrarCliente();
                                            setClicado(true);
                                        }}>
                                        <View style={styles.alinhainicio}>
                                            <Text></Text>
                                        </View>
                                        <View style={styles.alinhameio}>
                                            <Text style={styles.textoconcluir}>Concluir</Text>
                                        </View>
                                        <View style={styles.alinhafim}>
                                            <Ionicons style={styles.icon} name={"chevron-forward-outline"} size={30} color="white" />
                                        </View>
                                    </TouchableOpacity>
                                )
                        }
                    </View>

                )
                    :
                    (
                        <SemWifi />
                    )
            }
        </View>
    )

}

export default AdicionarFoto;