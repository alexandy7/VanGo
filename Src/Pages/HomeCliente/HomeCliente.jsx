import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import BotaoHome from "../../Componentes/Common/BotaoHome";
import { Calendar } from "react-native-calendars";


// o diabo do video de um indiano explicando como essa bomba funciona 
// https://www.youtube.com/watch?v=NHjqwWHqt8s
//pqp q odio q eu fiquei com isso vsfd


export default function HomeCliente({ nomecliente, fotocliente }) {

    const navigation = useNavigation();

    const [showModal, setShowModal] = useState(false);


    //lógica para deixar o dia atual marcado no calendario
    const currentDate = new Date(); // Obtenha a data atual
    const currentDateString = currentDate.toISOString().split('T')[0]; // Formate para 'YYYY-MM-DD'

    const customMarkedDates = {
        [currentDateString]: { selected: true, selectedColor: '#F7770D' },
    };

    return (

        <View style={styles.main}>
            <View style={styles.header}>

                <View style={styles.alinhanomefoto}>
                    <View style={styles.divfoto}>
                        <Image style={styles.foto} source={require('../../../assets/gato.jpg')}></Image>
                    </View>

                    <View style={styles.divnome}>
                        <Text style={styles.nome}>Seja bem vindo(a),</Text>
                        <Text style={styles.nome}>Matriona</Text>
                    </View>
                </View>

                <View style={styles.divicones}>
                    <View style={styles.alinhaicone}>
                        <Ionicons style={styles.icone} name={"chatbubble-ellipses-sharp"} size={40} color='white' />
                        <Ionicons style={styles.icone} name={"notifications-sharp"} size={40} color='white' onPress={() => {
                            navigation.navigate('NotificaMoto')
                        }} />
                    </View>
                </View>
            </View>

            <View style={styles.divbotoes}>

                <View style={styles.alinhabotao}>
                    <TouchableOpacity //botao para acessar o calendario
                        onPress={() => setShowModal(true)}>

                        <BotaoHome icone={"calendar"} texto="Calendário"></BotaoHome>

                        <Modal visible={showModal} animationType="fade" transparent={true}>
                        <View style={styles.modalCalendario}>
                            <TouchableOpacity style={styles.seta} onPress={() => setShowModal(false)}>
                                <Ionicons name="chevron-back-outline" size={30} />
                            </TouchableOpacity>

                            <View style={styles.viewCalendario}>
                                <Calendar style={styles.calendario} markedDates={customMarkedDates} />
                                <View style={styles.botoesCalendario}>
                                    <TouchableOpacity style={styles.botaoAusencia}>
                                        <Text style={{ color: "white" }}>Ausência hoje</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.botaoFalta}>
                                        <Text style={{ color: "white" }}>Agendar Falta</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        </Modal>
                    </TouchableOpacity>
                </View>

                <View style={styles.alinhabotao}>
                    <BotaoHome icone={"card"} texto="Pagamento" />
                </View>

                <View style={styles.alinhabotao}>
                    <BotaoHome icone={"settings"} texto="Ajustes" />
                </View>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#EFEFEF'
    },

    header: {
        height: "25%",
        backgroundColor: "#F7770D",
        display: "flex",
        flexDirection: "row"
    },

    alinhanomefoto: {
        position: "relative",
        width: "60%",
        height: "100%",
        display: "flex"
    },

    divfoto: {
        position: "relative",
        height: "60%",
        justifyContent: "center"
    },

    foto: {
        position: "relative",
        width: "40%",
        height: "70%",
        marginLeft: "10%",
        marginTop: "7%",
        borderRadius: 30
    },

    divnome: {
        height: "40%",
        display: "flex",
        position: "relative",
    },

    nome: {
        fontSize: 23,
        marginLeft: "5%",
        color: "white"
    },

    divicones: {
        width: "40%",
        height: "100%",
        display: "flex",
        flexDirection: "row"
    },

    alinhaicone: {
        height: "50%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },

    divbotoes: {
        width: "90%",
        height: "15%",
        alignSelf: "center",
        marginTop: "5%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    alinhabotao: {
        display: "flex",
        flexDirection: "row",
        width: "23%",
        height: "100%"
    },

    seta: {
        position: "relative",
    },
    
    viewCalendario: {
        backgroundColor:"white",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        borderWidth: 1,
        borderColor: '#F7770D',
        margin: 20,
        borderRadius: 15,
    },

    calendario: {
        borderRadius: 15,
        textDayFontWeight: '600',
        arrowColor: '#F04D23',
        monthTextColor: 'black',
        selected: true,
        selectedColor: 'red',
    },

    botaoAusencia: {
        backgroundColor: "orange",

        borderRadius: 10,
        margin: 5,
        padding: 10,
        width: "90%",
        display: 'flex',
        alignItems: "center",
    },

    botaoFalta: {
        backgroundColor: "#C4C4C4B5",
        borderRadius: 10,
        margin: 5,
        padding: 10,
        width: "90%",
        display: 'flex',
        alignItems: "center",
    },

    botoesCalendario: {
        display: "flex",
        alignItems: "center",
        margin: 20,

    },

    modalCalendario: { 
        display:"flex",
        justifyContent:"center",
        backgroundColor: 'rgba(128, 128, 128, 0.60)',
        height:"100%"
    }
})