import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
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
export default function EditarCliente() {

    const navigation = useNavigation();

    const [user, setUser] = useState({});
    const [nomeCliente, setNomeCliente] = useState("")
    const [nomeResponsavel, setNomeResponsavel] = useState("")
    const [enderecoCliente, setEnderecoCliente] = useState("")
    const [enderecoReserva, setEnderecoReserva] = useState("")
    const [escolaCliente, setEscolaCliente] = useState("")
    const [hora, setHora] = useState("")

    const [confirmarEdicao, setConfirmarEdicao] = useState(false)
    const [senha, setSenha] = useState("")


    useEffect(() => {
        BuscarUsuario();
    }, [])

    async function BuscarUsuario() {
        const response = await UserData();
        setUser(response);

        setNomeCliente(response.nome_cliente)
        setNomeResponsavel(response.responsavel_cliente)
        setEnderecoCliente(response.endereco_cliente)
        setEnderecoReserva(response.endereco_reserva)
        setEscolaCliente(response.escola_cliente)
        setHora('12h00')
    }

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_600SemiBold
    });

    if (!fonteLoaded) {
        return null;
    }


    async function Editar() {

        try {

            const data = {
                Id_cliente: user.id_cliente,
                Nome_cliente: nomeCliente,
                Escola_cliente: escolaCliente,
                Endereco_cliente: enderecoCliente,
                Endereco_reserva: enderecoReserva,
                Responsavel_cliente: nomeResponsavel
            }

            const token = await Token();

            let response = await ApiCliente.put("AlterarCliente", data, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            })

            if (!response.status) {
                Console.log("Desculpe, houve um problema interno.", response.statusText)
                return;
            }
        }
        catch (error) {
            console.log(error)
        }

        finally {
            AtualizarInformacoes()
        }
    }

    async function AtualizarInformacoes() {
        try {

            await RemoverToken();

            const data = new URLSearchParams();
            data.append("Email", user.email_cliente);
            data.append("Senha", senha);

            console.log(user.email_cliente, senha)
            let response = await axios.post("https://apivango.azurewebsites.net/api/Auth/Login", data.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });

            GuardarToken(response.data.token);
            setConfirmarEdicao(false);
            setSenha("");
            navigation.goBack();
        }

        catch (error) {
            
            if (error.response) {
              // Se for uma resposta de erro HTTP
              console.log('Erro HTTP:', error.response.status, error.response.data);
          } else if (error.request) {
              // Se a solicitação não puder ser feita (por exemplo, problemas de rede)
              console.log('Erro na solicitação:', error.request);
          } else {
              // Se for um erro de outra natureza
              console.log('Erro desconhecido:', error.message);
          }
        }
    }

    return (
        <ScrollView style={styles.scroll}>

            <View style={styles.main}>

                <InputPrompt
                    visible={confirmarEdicao}
                    onConfirm={() => Editar()}
                    onCancel={() => setConfirmarEdicao(false)}
                    change={(text) => setSenha(text)}
                    valor={senha}
                    
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

                    <View style={styles.divdireita}>

                    </View>

                </View>

                <View style={styles.containerfoto}>
                <TouchableOpacity style={styles.divfoto}>
                    <Image style={styles.foto} source={require("../../../assets/Ana.jpeg")}/>
                </TouchableOpacity>

                <Text style={styles.textofoto1}>Clique para alterar a foto</Text>
                
                <Text style={styles.textofoto2}>Magnólia do Corsa</Text>
                </View>

                <Text style={styles.tituloform}>Nome do Aluno</Text>
                <InputEdicao
                    icone={"body-outline"}
                    valor={nomeCliente}
                    mudou={(text) => { setNomeCliente(text) }}
                />

                <Text style={styles.tituloform}>Nome do Responsável</Text>
                <InputEdicao
                    icone={"person-outline"}
                    valor={nomeResponsavel}
                    mudou={(text) => { setNomeResponsavel(text) }}
                />

                <Text style={styles.tituloform}>Endereço</Text>
                <InputEdicao
                    icone={"home-outline"}
                    valor={enderecoCliente}
                    mudou={(text) => { setEnderecoCliente(text) }}
                />

                <Text style={styles.tituloform}>Endereço reserva</Text>
                <InputEdicao
                    icone={"business-outline"}
                    valor={enderecoReserva}
                    mudou={(text) => { setEnderecoReserva(text) }}
                />

                <Text style={styles.tituloform}>Escola</Text>
                <InputEdicao icone={"book-outline"} valor={escolaCliente} mudou={(text) => setEscolaCliente(text)} />

                <Text style={styles.tituloform}>Horário</Text>
                <InputEdicao icone={"time-outline"} valor={hora} />

                <TouchableOpacity onPress={() => { setConfirmarEdicao(true) }}>
                    <View style={styles.botao}>
                        <Text style={styles.texto}>Salvar Alterações</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )

}