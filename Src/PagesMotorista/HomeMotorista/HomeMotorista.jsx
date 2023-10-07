import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
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

export default function HomeMotorista() {

    const navigation = useNavigation();
    const [user, setUser] = useState({});

    useEffect(() => {
        BuscarUsuario()
    }, [])

    async function BuscarUsuario() {
        const usuario = await UserData();
        setUser(usuario)
    }

    let primeiroNome = '';
    if (user.nome_cliente) {
        primeiroNome = user.nome_cliente.split(' ')
    }

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,

    });

    if (!fonteLoaded) {
        return null;
    }


    async function EnviarAusencia() {

        try {

            const token = await Token()
            let diaAusencia = new Date()

            const data = {
                Nome_cliente: user.nome_cliente,
                Foto_cliente: user.foto_cliente,
                Escola_cliente: user.escola_cliente,
                Motivo_ausencia: "sou foada",
                Data_ausencia: diaAusencia,
                Id_cliente: user.id_cliente,
                Id_motorista: user.id_motorista

            }

            await ApiCliente.post("InformarAusencia", data, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            })
        }
        catch (error) {
            console.log(error)
        }
    }


    return (

        <View style={styles.main}>
            <View style={styles.header}>

                <View style={styles.alinhanomefoto}>
                    <View style={styles.divfoto}>
                        <Image style={styles.foto} source={{ uri: user.foto_cliente }}></Image>
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

                        <TouchableOpacity onPress={() => { navigation.navigate('NotificacaoCliente') }}>
                            <Ionicons style={styles.icone} name={"notifications-sharp"} size={40} color='white' />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

            <View style={styles.divbotoes}>

                <TouchableOpacity style={styles.alinhabotao}>
                    <BotaoHome icone={"duplicate"} texto="Nova Turma" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.alinhabotao}
                    onPress={() => { navigation.navigate('AnexarPagamentos') }}>
                    <BotaoHome icone={"mail"} texto="Solicitação" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.alinhabotao} onPress={() => { navigation.navigate('ConfiguracaoCliente') }}>
                    <BotaoHome icone={"location"} texto="Localização" />
                </TouchableOpacity>
            </View>

            <CardTurma nome={"Turma da manhã"} chave={user.turma_cliente} horarioinic={"08:00"} horariofin={"12:00"}></CardTurma>
            <CardTurma nome={"Turma da tarde"} chave={user.turma_cliente} horarioinic={"13:00"} horariofin={"18:00"}></CardTurma>


        </View>
    )

}