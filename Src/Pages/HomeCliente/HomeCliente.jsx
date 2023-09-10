import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import BotaoHome from "../../Componentes/BotaoHome";
import CardTurma from "../../Componentes/CardTurma";
import Touchable from "../../Componentes/Touchable";
import styles from "./HomeCliente.modules";
// import { AuthContext } from "../../services/Contexts/Contexts";

export default function HomeCliente() {

    const navigation = useNavigation();

    // const { user } = useContext(AuthContext);

    // let name = user.nome_cliente;
    // let PrimeiroNome = name.split(' ');
    return (

        <View style={styles.main}>
            {/* <View style={styles.header}>

                <View style={styles.alinhanomefoto}>
                    <View style={styles.divfoto}>
                        <Image style={styles.foto} source={{ uri: user.foto_cliente }}></Image>
                    </View>

                    <View style={styles.divnome}>
                        <Text style={styles.nome}>Seja bem vindo(a),</Text>
                        <Text style={styles.nome}>{PrimeiroNome[0]}</Text>
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
                    <BotaoHome icone={"calendar"} texto="Calendário" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.alinhabotao}
                    onPress={() => { navigation.navigate('AnexarPagamentos') }}>
                    <BotaoHome icone={"document-attach"} texto="Pagamento" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.alinhabotao} onPress={() => { navigation.navigate('ConfiguracaoCliente') }}>
                    <BotaoHome icone={"settings"} texto="Ajustes" />
                </TouchableOpacity>
            </View>

            <CardTurma nome={"Turma da manhã"} chave={user.turma_cliente} horarioinic={"08:00"} horariofin={"12:00"}></CardTurma>

            <View>
                <Touchable texto={"Ausência"} onPress={""} />

            </View> */}

        </View>
    )

}