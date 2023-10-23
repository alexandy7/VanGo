import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import BotaoHome from "../../Componentes/BotaoHome";
import CardTurma from "../../Componentes/CardTurma";
import Touchable from "../../Componentes/Touchable";
import styles from "./HomeCliente.modules";
import { Token, UserData } from "../../services/Contexts/Contexts";
import ApiCliente from "../../services/Api/ApiCiente";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"
import { BackHandler } from "react-native";
import { Alert } from "react-native";
import Calendario from "../../Componentes/Calendario";
import { Calendar } from "react-native-calendars";
import axios from "axios";
import { ActivityIndicator } from "react-native";
export default function HomeCliente() {

    const navigation = useNavigation();
    const [user, setUser] = useState({});
    const [modal, setModal] = useState(false);
    const [currentDate, setCurrentDate] = useState('');
    const [corAusencia, setCorAusencia] = useState('#F7770D');
    const [corAgendado, setCorAgendado] = useState('#C4C4C4B5');
    const [agendar, setAgendar] = useState(false);
    const [hoje, setHoje] = useState(false);


    useEffect(() => {
        BuscarUsuario();
    }, []);

    async function BuscarUsuario() {
        const usuario = await UserData();
        setUser(usuario);
    };

    let primeiroNome = '';
    if (user.nome_cliente) {
        primeiroNome = user.nome_cliente.split(' ');
    };

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,

    });

    if (!fonteLoaded) {
        return null;
    };


    async function EnviarAusencia(diaAusencia) {
        try {

            const token = await Token();

            const data = {
                Nome_cliente: user.nome_cliente,
                Foto_cliente: user.foto_cliente,
                Escola_cliente: user.escola_cliente,
                Motivo_ausencia: "...",
                Data_ausencia: diaAusencia,
                Id_cliente: user.id_cliente,
                Id_motorista: user.id_motorista

            };

            await ApiCliente.post("InformarAusencia", data, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });
            setModal(false)
        }

        catch (error) {
            console.log(error);
        };
    };


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
                    <BotaoHome icone={"calendar-outline"} texto="Calendário" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.alinhabotao}
                    onPress={() => { navigation.navigate('AnexarPagamentos') }}>
                    <BotaoHome icone={"cash-outline"} texto="Pagamento"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.alinhabotao} onPress={() => { navigation.navigate('ConfiguracaoCliente') }}>
                    <BotaoHome icone={"settings-outline"} texto="Ajustes" />
                </TouchableOpacity>
            </View>

            <CardTurma nome={"Turma da manhã"} chave={user.turma_cliente} horarioinic={"08:00"} horariofin={"12:00"}></CardTurma>

            <View style={{ marginTop: "7%" }}>
                <Touchable texto={"Ausência"} evento={() => setModal(true)} />
            </View>



                                                {/*Calendário*/}
            <View >
                <Modal
                    visible={modal}
                    animationType="slide"
                    transparent={true}
                >
                    <View style={styles.modalCalendario}>

                        <TouchableOpacity style={styles.seta} onPress={() => setModal(false)}>
                            <Ionicons name="close-circle-outline" color={"white"} size={50} />
                        </TouchableOpacity>

                        <View style={styles.viewCalendario}>
                            <Calendar
                                style={styles.calendario}
                                markedDates={{
                                    [currentDate]: { selected: true, selectedColor: '#F7770D' },
                                }}

                                onDayPress={day => {
                                    //Caso clique sobre o dia que já esta selecionado, retira a seleção
                                    if (day.dateString === currentDate) {
                                        setCurrentDate('');
                                        setCorAgendado('#C4C4C4B5');
                                        setCorAusencia('#F7770D');
                                        return;
                                    };

                                    setCurrentDate(day.dateString);
                                    setCorAgendado('#F7770D');
                                    setCorAusencia('#C4C4C4B5');
                                }}

                            />
                            <View style={styles.botoesCalendario}>

                                <TouchableOpacity
                                    disabled={currentDate !== '' ? true : false}
                                    onPress={() => {

                                        let data = new Date();
                                        let ano = data.getFullYear();
                                        let mes = String(data.getMonth() + 1).padStart(2, '0');
                                        let dia = String(data.getDate()).padStart(2, '0');
                                        let dataFormatada = `${ano}-${mes}-${dia}`;

                                        EnviarAusencia(dataFormatada);
                                        setHoje(true);
                                    }}
                                    style={[styles.botaoAusencia, { backgroundColor: corAusencia }]}
                                >

                                    {
                                        hoje ? (
                                            <ActivityIndicator color={'white'} />
                                        )
                                            :
                                            (
                                                <Text style={{ color: "white" }}>Ausência hoje</Text>
                                            )
                                    }
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.botaoFalta, { backgroundColor: corAgendado }]}
                                    disabled={currentDate === '' ? true : false}
                                    onPress={() => {
                                        EnviarAusencia(currentDate);
                                        setAgendar(true);
                                    }}
                                >
                                    {
                                        agendar ? (
                                            <ActivityIndicator color={`white`} />
                                        )
                                            :
                                            (
                                                <Text style={{ color: "white" }}>Agendar falta</Text>
                                            )
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )

}