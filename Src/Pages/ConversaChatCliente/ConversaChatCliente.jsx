import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_300Light } from "@expo-google-fonts/montserrat"
import styles from "./ConversaChat.modules";
import BalaoChatEu from "../../Componentes/BalaoChatEu";
import BalaoChatVoce from "../../Componentes/BalaoChatVoce";
import { TextInput } from "react-native";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { UserData } from "../../services/Contexts/Contexts"
import { string } from "yup";
import { useNavigation } from "@react-navigation/native";

export default function ConversaChatCliente() {

    const navigation = useNavigation();

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_300Light
    });

    const [connection, setConnection] = useState(null);
    const [user, setUser] = useState({});
    const [messages, setMessages] = useState([]);
    const [minhaMensagem, setMinhaMensagem] = useState('');

    const testando = [
        { sender: `Cliente`, text: `Oi, tudo bem?` },
        { sender: "Motorista", text: "Sim, como posso ajuda-lo?" },
        { sender: "Cliente", text: "Sei lá" },
        { sender: "Motorista", text: "Beleza" }
    ]

    useEffect(() => {
        BuscarUsuario();
    }, []);

    async function BuscarUsuario() {
        await UserData()
            .then((response) => {
                setUser(response);
                try {
                    const newConnection = new HubConnectionBuilder()
                        .withUrl("https://apivango.azurewebsites.net/Solicitacao")
                        .build();
                    setConnection(newConnection);
                }
                catch (error) {
                    console.log(error);
                };
            });
    };

    useEffect(() => {
        if (connection) {
            try {
                connection.start()
                    .then(() => console.log("Conectado ao hub SignalR!"))
                    .then(() => {
                        connection.on("ReceiveMessage", (sender, reciver, message, tempoEnvio) => {
                            if (reciver === `Cliente/${user.id_cliente}`) {
                                AtualizarState(sender, message, tempoEnvio);
                            }
                        });
                    });
            }
            catch (error) {
                console.error(error);
            };
        };
    }, [connection]);

    function AtualizarState(sender, message, tempoEnvio){
        setMessages(prevMessages => {
            return [...prevMessages, {sender: sender, text: message, envio: tempoEnvio}];
        });
    };

    const enviarMensagem = () => {
        if (minhaMensagem.trim() === '') {
            return;
        };

        let agora = new Date();
        const horas = agora.getHours();
        const minutos = agora.getMinutes();
        const envio = `${horas}:${minutos > 9 ? minutos : '0' + minutos}`;
        AtualizarState('Cliente', minhaMensagem, envio );

        const usuario = `Cliente/${user.id_cliente}`; //Ok
        if (connection) {
            connection.invoke("SendMessage", usuario, `Motorista/${user.id_motorista}`, minhaMensagem, envio)
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

            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={messages}
                renderItem={({ item }) => {
                    // console.log(item.sender)
                    if (item.sender.includes("Cliente")) {
                        return <BalaoChatEu mensagem={item.text} hora={item.envio} />
                    }
                    else {
                        return <BalaoChatVoce mensagem={item.text} hora={item.envio} />
                    };
                }}
            />

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
    )

}