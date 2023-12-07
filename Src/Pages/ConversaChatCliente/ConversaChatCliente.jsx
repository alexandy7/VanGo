import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_300Light } from "@expo-google-fonts/montserrat"
import styles from "./ConversaChatCliente.modules";
import BalaoChatEu from "../../Componentes/BalaoChatEu";
import BalaoChatVoce from "../../Componentes/BalaoChatVoce";
import { TextInput } from "react-native";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { Token, UserData } from "../../services/Contexts/Contexts"
import { string } from "yup";
import { useNavigation } from "@react-navigation/native";
import ApiCliente from "../../services/Api/ApiCiente";
import FormatadorData from "../../services/Formatadores/FormatadorData/FormatadorData";
import { ActivityIndicator } from "react-native";
import axios from "axios";
import showToast from "../../services/Toast/Toast";
export default function ConversaChatCliente() {

    const navigation = useNavigation();

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_300Light
    });

    const [connection, setConnection] = useState(null);
    const [user, setUser] = useState({});
    const [motorista, setMotorista] = useState({});
    const [messages, setMessages] = useState([]);
    const [minhaMensagem, setMinhaMensagem] = useState('');
    const [inicio, setInicio] = useState();
    const [buscandoMensagens, setBuscandoMensagens] = useState(true);
    const [inverter, setInverter] = useState(false);
    const testando = [
        { sender: `Cliente`, text: `Oi, tudo bem?` },
        { sender: "Motorista", text: "Sim, como posso ajuda-lo?" },
        { sender: "Cliente", text: "Sei lá" },
        { sender: "Motorista", text: "Beleza" }
    ]

    useEffect(() => {
        //para saber o tempo de execução
        setInicio(performance.now());

        BuscarUsuario();
    }, []);

    async function BuscarUsuario() {
        await UserData()
            .then((response) => {
                try {

                    setUser(response);
                    BuscarMensagens(response.id_cliente);
                    console.log(response.id_cliente);
                    async function BuscarInfoMotorista(id_motorista) {
                        let token = await Token();

                        let response = await ApiCliente.get(`BuscarInfoMotorista/${id_motorista}`, {
                            headers: {
                                Authorization: "Bearer " + token,
                                "Content-Type": "application/json",
                            }
                        });

                        let json = response.data;
                        setMotorista(json);
                    };
                    BuscarInfoMotorista(response.id_motorista);
                }
                catch (error) {
                    console.log(error);
                };
            })

            .then(() => {
                try {
                    const newConnection = new HubConnectionBuilder()
                        .withUrl("https://apivango.azurewebsites.net/chat")
                        .build();
                    setConnection(newConnection);
                }
                catch (error) {
                    console.log(error);
                };
            })
    };


    async function BuscarMensagens(id_cliente) {

        try {

            let token = await Token();

            let response = await ApiCliente.get(`BuscarMensagens/${id_cliente}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });

            let data = response.data;
            if (response.status === 200) {

                if (data.length > 11) {
                    setInverter(true);
                };
                
                const adicionarMensagem = (remetente, mensagem, dataEnvio) => {
                    const novaMensagem = {
                        sender: remetente,
                        text: mensagem,
                        envio: FormatadorData(dataEnvio, true)
                    };
                    setMessages(prevMessages => [novaMensagem, ...prevMessages,]);
                };

                data.forEach(item => {
                    adicionarMensagem(item.remetente, item.mensagem, item.data_envio_mensagem);
                });

            };

            setBuscandoMensagens(false);
        }
        catch (error) {
            console.log(error);
            setBuscandoMensagens(false);
        }
    }

    useEffect(() => {
        if (connection) {
            try {
                connection.start()
                    .then(() => {
                        let fim = performance.now();
                        console.log(`Conectado ao hub SignalR! ${(fim - inicio) / 1000}`);
                    })
                    .then(() => {
                        connection.on("ReceiveMessage", (sender, reciver, message, tempoEnvio) => {
                            if (reciver === `Cliente/${user.id_cliente}`) {
                                let data = new Date(tempoEnvio);
                                AtualizarState(sender, message, data);
                            }
                        });
                    });
            }
            catch (error) {
                console.error(error);
            };
        };
    }, [connection]);

    function AtualizarState(sender, message, tempoEnvio) {
        console.log(sender, message, tempoEnvio);
        const horas = tempoEnvio.getHours();
        const minutos = tempoEnvio.getMinutes();
        const envio = `${horas}:${minutos > 9 ? minutos : '0' + minutos}`;

        setMessages(prevMessages => {
            return [{ sender: sender, text: message, envio: envio }, ...prevMessages];
        });
    };

    const enviarMensagem = () => {
        if (minhaMensagem.trim() === '') {
            return;
        };

        if (messages.length > 11) {
            setInverter(false);
        };

        let agora = new Date();
        AtualizarState('Cliente', minhaMensagem, agora);

        const usuario = `Cliente/${user.id_cliente}`;
        if (connection) {
            connection.invoke("SendMessage", usuario, `Motorista/${user.id_motorista}`, minhaMensagem, agora, Number(user.id_cliente))
                .catch((error) => {
                    console.error(error);
                    return;
                });
        };
        setMinhaMensagem('');

    };

    if (!fonteLoaded) {
        return null;
    };

    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.divsetaheader} onPress={() => {
                    if (connection) {
                        connection.stop();
                        console.log('Desconectado do SignalR!')
                    };

                    navigation.goBack();
                }}>
                    <Ionicons name={"chevron-back-outline"} size={40} color="white" />
                </TouchableOpacity>

                <View style={styles.divimagemheader}>
                    <Image style={styles.imagemheader} source={{ uri: motorista.foto_motorista }} />
                </View>

                <View style={styles.divtextoheader}>
                    <Text style={styles.texto1header}>{motorista.nome_motorista}</Text>
                </View>
            </View>

            {
                buscandoMensagens ? (
                    <View style={{ justifyContent: "center", flex: 1 }}>
                        <ActivityIndicator color={"orange"} size={40} />
                    </View>
                )
                    :
                    (
                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            data={messages.slice().reverse()} //Para exibir as ultimas mensagens primeiro
                            renderItem={({ item }) => {
                                if (item.sender.includes("Cliente")) {
                                    return <BalaoChatEu mensagem={item.text} hora={item.envio} />
                                }
                                else {
                                    return <BalaoChatVoce mensagem={item.text} hora={item.envio} />
                                };
                            }}
                            inverted={inverter} //Inverte a direção de exibição da lista
                            ListHeaderComponent={() => {
                                return (
                                    <View style={{ marginTop: "2%" }}>
                                    </View>
                                )
                            }}

                            ListFooterComponent={() => {
                                return (
                                    <View style={{ marginTop: "2%" }}>
                                    </View>
                                )
                            }}
                        />
                    )
            }

            <View style={styles.divcaixatexto}>
                <View style={styles.caixademensagem}>
                    <View style={styles.divreguainput}>
                        <TextInput
                            style={styles.input}
                            placeholder={"Digite aqui..."}
                            placeholderTextColor={"#d1d1d1"}
                            value={minhaMensagem}
                            onChangeText={(text) => setMinhaMensagem(text)}
                            isFocused={true}
                            multiline={true}

                        />
                    </View>
                    <TouchableOpacity style={styles.divreguaicon} onPress={() => {
                        enviarMensagem();
                    }}>
                        <Ionicons name={"send-sharp"} size={25} color="#d1d1d1" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}