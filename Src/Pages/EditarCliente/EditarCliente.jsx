import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList, KeyboardAvoidingView, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import InputEdicao from "../../Componentes/InputEdicao";
import styles from "./EditarCliente.modules";
import { useFonts, Montserrat_500Medium, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import { RemoverToken, Token, UserData, GuardarToken } from "../../services/Contexts/Contexts";
import ApiCliente from "../../services/Api/ApiCiente";
import axios from "axios";
import { ActivityIndicator } from "react-native";
import InputPrompt from "../../Componentes/Modal";
import Restart from 'react-native-restart';
import ListEscolas from "../../Componentes/ListEscolas";
import RNRestart from 'react-native-restart';

export default function EditarCliente() {

    const navigation = useNavigation();

    const [user, setUser] = useState({});
    const [nomeCliente, setNomeCliente] = useState("");
    const [nomeSobrenome, setNomeSobrenome] = useState("");
    const [nomeResponsavel, setNomeResponsavel] = useState("");
    const [enderecoCliente, setEnderecoCliente] = useState("");
    const [enderecoReserva, setEnderecoReserva] = useState("");
    const [escolaCliente, setEscolaCliente] = useState("");

    const [confirmarEdicao, setConfirmarEdicao] = useState(false);
    const [senha, setSenha] = useState();
    const [erro, setErro] = useState(false);
    const [clicado, setClicado] = useState(false);

    useEffect(() => {
        BuscarUsuario();
    }, []);

    async function BuscarUsuario() {
        const response = await UserData();
        setUser(response);

        setNomeCliente(response.nome_cliente);
        setNomeResponsavel(response.responsavel_cliente);
        setEnderecoCliente(response.endereco_cliente);
        setEnderecoReserva(response.endereco_reserva);
        setEscolaCliente(response.escola_cliente);

        let nomeSeparado = response.nome_cliente.split(' ');
        setNomeSobrenome(nomeSeparado[0] + ' ' + nomeSeparado[1])
    };

    async function Editar() {

        try {
            const data = {
                Id_cliente: user.id_cliente,
                Nome_cliente: nomeCliente,
                Escola_cliente: escolaCliente,
                Endereco_cliente: enderecoCliente,
                Foto_cliente: user.foto_cliente,
                Endereco_reserva: enderecoReserva,
                Responsavel_cliente: nomeResponsavel,
                Senha_cliente: senha
            };

            const token = await Token();
            let response = await ApiCliente.put("AlterarCliente", data, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });

            if (response.status !== 200) {
                Console.log("Desculpe, houve um problema interno.", response.statusText)
                return;
            };
            AtualizarInformacoes();
        }
        catch (error) {
            console.log(error + ' (EditarCliente)');
            setClicado(false);
            setErro(true);
        };
    };

    async function AtualizarInformacoes() {
        try {

            await RemoverToken();

            const data = new URLSearchParams();
            data.append("Email", user.email_cliente);
            data.append("Senha", senha);

            let response = await axios.post("https://apivango.azurewebsites.net/api/Auth/Login", data.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });

            GuardarToken(response.data.token);
            setConfirmarEdicao(false);
            setSenha("");
            Alert.alert('Concluido', 'Agora basta reiniciar o app para atualizar as informações!');
            navigation.goBack();
        }

        catch (error) {

            if (error.response) {
                // Se for uma resposta de erro HTTP
                console.log('Erro HTTP:', error.response.status, error.response.data + ' (Erro ao atualizar info)');
            } else if (error.request) {
                // Se a solicitação não puder ser feita (por exemplo, problemas de rede)
                console.log('Erro na solicitação:', error.request + ' (Erro ao atualizar info)');
            } else {
                // Se for um erro de outra natureza
                console.log('Erro desconhecido:', error.message + ' (Erro ao atualizar info)');
            }
        }
    }

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_600SemiBold
    });

    if (!fonteLoaded) {
        return null;
    }

    return (

        <FlatList
            style={styles.scroll}
            data={' '}
            renderItem={() => {
                return (
                    <View style={styles.main}>
                        <InputPrompt
                            visible={confirmarEdicao}
                            titulo={'Digite sua senha para confirmar:'}
                            mensagemErro={'Senha incorreta'}
                            onCancel={() => setConfirmarEdicao(false)}
                            mudouu={(text) => {
                                setSenha(text);
                            }}
                            evento={() => {
                                Editar();
                                setClicado(true);
                            }}
                            clicou={clicado}
                            erro={erro}
                        />

                        <View style={styles.header}>
                            <View style={styles.divesquerda}>
                                <TouchableOpacity style={styles.seta} onPress={() => { navigation.goBack() }}>
                                    <Ionicons name="chevron-back-outline" size={30} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.divmeio}>
                                <Text style={styles.titulo}>Editar Perfil</Text>
                            </View>
                        </View>

                        <View style={styles.containerfoto}>
                            <TouchableOpacity style={styles.divfoto}>
                                <Image style={styles.foto} source={{ uri: user.foto_cliente }} />
                            </TouchableOpacity>

                            <Text style={styles.textofoto1}>Alterar a foto</Text>

                            <Text style={styles.textofoto2}>{nomeSobrenome}</Text>
                        </View>

                        <Text style={styles.tituloform}>Nome do Aluno</Text>
                        <InputEdicao
                            valor={nomeCliente}
                            mudou={(text) => { setNomeCliente(text) }}
                        />

                        <Text style={styles.tituloform}>Escola</Text>
                        <ListEscolas
                            escolaCliente={escolaCliente}
                            valorEscola={(text) => setEscolaCliente(text)}
                        />

                        <Text style={styles.tituloform}>Nome do Responsável</Text>
                        <InputEdicao
                            valor={nomeResponsavel}
                            mudou={(text) => { setNomeResponsavel(text) }}
                        />

                        <Text style={styles.tituloform}>Endereço</Text>
                        <InputEdicao
                            valor={enderecoCliente}
                            mudou={(text) => { setEnderecoCliente(text) }}
                        />

                        <Text style={styles.tituloform}>Endereço reserva</Text>
                        <InputEdicao
                            valor={enderecoReserva}
                            mudou={(text) => { setEnderecoReserva(text) }}
                        />

                        <TouchableOpacity onPress={() => { setConfirmarEdicao(true) }}>
                            <View style={styles.botao}>
                                <Text style={styles.texto}>Salvar Alterações</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }} />
    )
}