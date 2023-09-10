import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import BotaoHome from "../../Componentes/BotaoHome";
import CardTurma from "../../Componentes/CardTurma";
import Touchable from "../../Componentes/Touchable";
import styles from "./HomeCliente.modules";
import { UserData } from "../../services/Contexts/Contexts";

export default function HomeCliente() {

    const navigation = useNavigation();
    const [user, setUser] = useState({});

    async function BuscarUsuario(){
        const usuario = await UserData();
        setUser(usuario)
    }

    
    useEffect(()=>{
        BuscarUsuario();
    }, [])

    let primeiroNome = '';
    if(user.nome_cliente){
         primeiroNome = user.nome_cliente.split(' ')
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
                    <BotaoHome icone={"calendar-outline"} texto="Calendário" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.alinhabotao}
                    onPress={() => { navigation.navigate('AnexarPagamentos') }}>
                    <BotaoHome icone={"document-attach-outline"} texto="Pagamento" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.alinhabotao} onPress={() => { navigation.navigate('ConfiguracaoCliente') }}>
                    <BotaoHome icone={"settings-outline"} texto="Ajustes" />
                </TouchableOpacity>
            </View>

            <CardTurma nome={"Turma da manhã"} chave={user.turma_cliente} horarioinic={"08:00"} horariofin={"12:00"}></CardTurma>

            <View>
                <Touchable texto={"Ausência"} onPress={""} />

            </View> 

        </View>
    )

}