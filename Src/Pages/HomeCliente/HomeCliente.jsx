import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import BotaoHome from "../../Componentes/BotaoHome";
import CardTurma from "../../Componentes/CardTurma";
import Touchable from "../../Componentes/Touchable";
import styles from "./HomeCliente.modules";
import { AuthContext } from "../../Contexts/Contexts";

export default function HomeCliente({nomecliente, fotocliente}) {

const navigation = useNavigation();



const { user } = useContext(AuthContext); 
useEffect(()=>{

    console.log(user.foto_cliente)
}, [])
const IrAnexarPagamentos = () => {
    navigation.navigate('AnexarPagamentos')
}

    return(
        
        <View style={styles.main}>
            <View style={styles.header}>

                <View style={styles.alinhanomefoto}>
                    <View style={styles.divfoto}>
                        <Image style={styles.foto} source={{ uri: user.foto_cliente}}></Image>
                    </View>

                    <View style={styles.divnome}>
                        <Text style={styles.nome}>Seja bem vindo(a),</Text>
                        <Text style={styles.nome}>{user.nome_cliente}</Text>
                    </View>
                </View>

                <View style={styles.divicones}>
                    <View style={styles.alinhaicone}>
                        <Ionicons style={styles.icone} name={"chatbubble-ellipses-sharp"} size={40} color='white'/>
                        <Ionicons style={styles.icone} name={"notifications-sharp"} size={40} color='white'
                        onPress={()=>{navigation.navigate('NotificacaoCliente')}}/>
                    </View>
                </View>
            </View>

            <View style={styles.divbotoes}>
                
                <View style={styles.alinhabotao}> 
                        <BotaoHome icone={"calendar"} texto="Calendário"/>
                </View>

                <TouchableOpacity style={styles.alinhabotao} 
                onPress={() => {navigation.navigate('AnexarPagamentos')}}>
                        <BotaoHome icone={"document-attach"} texto="Pagamento"/>
                </TouchableOpacity>
                
                <View style={styles.alinhabotao}> 
                    <BotaoHome icone={"settings"} texto="Ajustes"/>
                </View>
            </View>

            <CardTurma nome={"Turma da manhã"} chave={user.turma_cliente} horarioinic={"08:00"} horariofin={"12:00"}></CardTurma>

            <View>
                <Touchable texto={"Ausência"} onPress={""}/>

            </View>
            
        </View>
    )

}