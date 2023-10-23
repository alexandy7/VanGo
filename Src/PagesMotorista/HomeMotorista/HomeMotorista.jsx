import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import BotaoHome from "../../Componentes/BotaoHome";
import CardTurma from "../../Componentes/CardTurma";
import Touchable from "../../Componentes/Touchable";
import styles from "./HomeMotorista.modules";
import { Token, UserData } from "../../services/Contexts/Contexts";
import ApiCliente from "../../services/Api/ApiCiente";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"
import { BackHandler } from "react-native";
import { Alert } from "react-native";
import ApiMotorista from "../../services/Api/ApiMotorista";

export default function HomeMotorista() {

    const navigation = useNavigation();
    const [user, setUser] = useState({});
    const [turmas, setTurmas] = useState([]);
    const [encontrado, setEncontrado] = useState(false);
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
        }

        catch (error) {
            console.log(error);
            
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
                        <TouchableOpacity onPress={() => { navigation.navigate('Chat') }}>
                            <Ionicons style={styles.icone} name={"chatbubble-ellipses-sharp"} size={40} color='white' />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { navigation.navigate('NotificacaoMotorista') }}>
                            <Ionicons style={styles.icone} name={"notifications-sharp"} size={40} color='white' />
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
                    data={turmas}
                    ListFooterComponent={() => (
                        // Componente criado para o TabBar não sobrepor as turmas
                        <View style={{ height: 80 }}>
                        <Text></Text>
                    </View>
                )}
                renderItem={({ item }) => {
                    
                    return (
                        <CardTurma
                        nome={item.nome_turma}
                        chave={item.id_turma}
                        horarioinic={item.periodo_turma}
                        />
                        )
                    }}
                    />
                    )
                    :
                    (
                        <ActivityIndicator color={"#F7770D"} size={35} style={{ marginTop: "30%" }} />
                    )
                }

        </View>
    )

}