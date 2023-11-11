import React, { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_300Light } from "@expo-google-fonts/montserrat"
import styles from "./ConversaChatMotorista.modules";
import BalaoChatEu from "../../Componentes/BalaoChatEu";
import BalaoChatVoce from "../../Componentes/BalaoChatVoce";
import { TextInput } from "react-native";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { Token, UserData } from "../../services/Contexts/Contexts"
import { date, string } from "yup";
import { useNavigation } from "@react-navigation/native";
import ApiCliente from "../../services/Api/ApiCiente";
import FormatadorData from "../../services/Formatadores/FormatadorData/FormatadorData";

const ConversaChatMotorista = ({ route }) => {

    // const {id_cliente, foto_cliente, nome_cliente} = route.params;

    const flatListRef = useRef();
    const navigation = useNavigation();

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_300Light
    });


    const [connection, setConnection] = useState(null);
    const [user, setUser] = useState({});
    const [messages, setMessages] = useState([]);
    const [minhaMensagem, setMinhaMensagem] = useState('');
    const [inicio, setInicio] = useState();
    const [buscandoMensagens, setBuscandoMensagens] = useState(true);

    useEffect(() => {
        setInicio(performance.now());
        BuscarUsuario();
    }, []);

    async function BuscarUsuario() {
        await UserData()
            //Fazendo o build aqui pois é preciso ter as informações do usuario primeiro.
            .then((response) => {
                try {
                    setUser(response);
                    BuscarMensagens();
                    const newConnection = new HubConnectionBuilder()
                        .withUrl("https://apivango.azurewebsites.net/Solicitacao")
                        .build();
                    setConnection(newConnection);
                }
                catch (error) {
                    console.log(error);
                };
            })
    };

    async function BuscarMensagens() {

        let token = await Token();

        //Consulta pela API do cliente pois ela funciona igual
        let response = await ApiCliente.get(`BuscarMensagens/${13}`, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            }
        });

        let data = response.data;

        const adicionarMensagem = (remetente, mensagem, dataEnvio) => {
            const novaMensagem = {
                sender: remetente,
                text: mensagem,
                envio: FormatadorData(dataEnvio, true)
            };
            setMessages(prevMessages => [...prevMessages, novaMensagem]);
        };

        data.forEach(item => {
            adicionarMensagem(item.remetente, item.mensagem, item.data_envio_mensagem);
        });

        // buscandoMensagens(false);
        scrollToBottom();
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
                            // console.log(sender, reciver, message, `Motorista/${user.id_motorista}`);
                            if (reciver === `Motorista/${user.id_motorista}`) {
                                let data = new Date(tempoEnvio)
                                atualizarState(sender, message, data);
                            };
                        });
                    })
            }
            catch (error) {
                console.error(error);
            };
        }
    }, [connection]);


    function atualizarState(sender, message, tempoEnvio) {

        const horas = tempoEnvio.getHours();
        const minutos = tempoEnvio.getMinutes();
        const envio = `${horas}:${minutos > 9 ? minutos : '0' + minutos}`;

        setMessages(prevMessages => {
            return [...prevMessages, { sender: sender, text: message, envio: envio }];
        });
    };


    const enviarMensagem = () => {
        if (minhaMensagem.trim() === '') {
            return;
        };

        let agora = new Date();
        atualizarState('Motorista', minhaMensagem, agora);
        const usuario = `Motorista/${user.id_motorista}`;

        if (connection) {
            connection.invoke("SendMessage", usuario, 'Cliente/1', minhaMensagem, agora, 13)
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
                    <Image style={styles.imagemheader} source={require("../../../assets/Ana.jpeg")} />
                </View>

                <View style={styles.divtextoheader}>
                    <Text style={styles.texto1header}>{"Magnolia do corsa"}</Text>
                    <Text style={styles.texto2header}>{"E.e cu rosa"}</Text>
                </View>
            </View>
            {
                buscandoMensagens ? (

                    <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={messages}
                    ref={flatListRef}
                    renderItem={({ item }) => {
                        if (item.sender.includes("Motorista")) {
                            return <BalaoChatEu mensagem={item.text} hora={item.envio} />
                        }
                        else {
                            return <BalaoChatVoce mensagem={item.text} hora={item.envio} />
                        };
                    }}
                    onContentSizeChange={() => flatListRef.current.scrollToEnd()}
                    />
                    )
                    :
                    (
                        <ActivityIndicator color="orange" size={50} style={{justifyContent: "center", alignSelf: "center", }}/>
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
    );
};

export default ConversaChatMotorista;