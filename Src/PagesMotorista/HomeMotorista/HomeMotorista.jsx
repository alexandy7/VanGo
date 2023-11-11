import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import BotaoHome from "../../Componentes/BotaoHome";
import CardTurma from "../../Componentes/CardTurma";
import styles from "./HomeMotorista.modules";
import { Token, UserData } from "../../services/Contexts/Contexts";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"
import ApiMotorista from "../../services/Api/ApiMotorista";

export default function HomeMotorista() {

    const navigation = useNavigation();
    const [user, setUser] = useState({});
    const [turmas, setTurmas] = useState([]);
    const [encontrado, setEncontrado] = useState(false);
    const [loading, setLoading] = useState(false);
    const [numColumns, setNumColumns] = useState(2);
    const [semTurma, setSemTurma] = useState(false);

    useEffect(() => {
        BuscarUsuario();
    }, [])

    async function BuscarUsuario() {
        const usuario = await UserData();
        setUser(usuario);
        BuscarTurmas(usuario.id_motorista);
    }

    async function BuscarTurmas(id_motorista) {
        try {
            let token = await Token();

            let response = await ApiMotorista.get(`ListarTurmas/${id_motorista}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });

            let json = response.data;
            setTurmas(json);
            setEncontrado(true);
            setLoading(false);
        }

        catch (error) {
            console.log(error);
            setSemTurma(true);
        };
    }

    let primeiroNome = '';
    if (user.nome_motorista) {
        primeiroNome = user.nome_motorista.split(' ')
    }

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,

    });

    if (!fonteLoaded) {
        return null;
    }


    return (

        <View style={styles.main}>
            <View style={styles.header}>

                <View style={styles.alinhanomefoto}>
                    <View style={styles.divfoto}>
                        <Image style={styles.foto} source={{ uri: user.foto_motorista }}></Image>
                    </View>

                    <View style={styles.divnome}>
                        <Text style={styles.nome}>Seja bem vindo(a),</Text>
                        <Text style={styles.nome}>{primeiroNome[0]}</Text>
                    </View>
                </View>

                <View style={styles.divicones}>
                    <View style={styles.alinhaicone}>
                        <TouchableOpacity onPress={() => { navigation.navigate('NotificacaoMotorista') }}>
                            <Ionicons style={styles.icone} name={"notifications-sharp"} size={40} color='white' />
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => { navigation.navigate('ConversaChatMotorista') }}>
                            <Ionicons style={styles.icone} name={"chatbubble-ellipses-sharp"} size={40} color='white' />
                        </TouchableOpacity>


                    </View>
                </View>
            </View>

            <View style={styles.divbotoes}>

                <TouchableOpacity style={styles.alinhabotao} onPress={() => navigation.navigate("CriarTurmas")}>
                    <BotaoHome icone={"duplicate"} texto="Nova Turma" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.alinhabotao}
                    onPress={() => { navigation.navigate('SolicitacoesTurmaMotorista') }}>
                    <BotaoHome icone={"mail"} texto="Solicitação" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.alinhabotao} onPress={() => { navigation.navigate('ConfiguracaoCliente') }}>
                    <BotaoHome icone={"location"} texto="Localização" />
                </TouchableOpacity>
            </View>

            {
                encontrado ? (

                    <FlatList
                        style={{ flex: 1, height: 100 }}
                        keyExtractor={(item) => item.id_turma}
                        data={turmas.slice(0, numColumns)}
                        refreshing={loading}
                        onRefresh={() => {
                            BuscarTurmas(user.id_motorista);
                            setLoading(true);
                            setNumColumns(2)
                        }}
                        ListFooterComponent={() => {
                            // Componente criado para o TabBar não sobrepor as turmas
                            return (
                                turmas.length > numColumns ? (
                                    <TouchableOpacity onPress={() => setNumColumns(numColumns + 3)} style={{ marginBottom: "28%" }}>
                                        <View>
                                            <Text style={{ color: "#F7770D", alignSelf: "center", fontWeight: "bold", fontSize: 18 }}>
                                                Exibir mais
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                                    :
                                    (
                                        <View style={{ marginBottom: "28%" }}></View>
                                    )
                            )
                        }}

                        renderItem={({ item }) => {

                            return (
                                <CardTurma
                                    nome={item.nome_turma}
                                    chave={item.id_turma}
                                    horarioinic={item.periodo_turma}
                                    evento={() => {
                                        navigation.navigate('Turmas', {
                                            idTurma: item.id_turma,
                                            nomeTurma: item.nome_turma
                                        })
                                    }}

                                />
                            )
                        }}
                    />
                )
                    :
                    (
                        <View>
                            {
                                semTurma ? (
                                    <View></View>
                                )
                                    :
                                    (

                                        <ActivityIndicator color={"#F7770D"} size={35} style={{ marginTop: "30%" }} />
                                    )
                            }
                        </View>

                    )
            }

        </View>
    )

}