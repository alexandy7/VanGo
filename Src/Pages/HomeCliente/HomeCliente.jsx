import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import BotaoHome from "../../Componentes/Common/BotaoHome";

export default function HomeCliente({nomecliente, fotocliente}) {

const navigation = useNavigation();

    return(
        
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
                        <Ionicons style={styles.icone} name={"chatbubble-ellipses-sharp"} size={40} color='white'/>
                        <Ionicons style={styles.icone} name={"notifications-sharp"} size={40} color='white'onPress={()=>{
                            navigation.navigate('NotificaMoto')
                        }}/>
                    </View>
                </View>
            </View>

            <View style={styles.divbotoes}>
                
                <View style={styles.alinhabotao}> 
                        <BotaoHome icone={"calendar"} texto="Calendário"/>
                </View>

                <View style={styles.alinhabotao}>
                        <BotaoHome icone={"card"} texto="Pagamento"/>
                </View>
                
                <View style={styles.alinhabotao}> 
                    <BotaoHome icone={"settings"} texto="Ajustes"/>
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

    divnome:{
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
        width:"90%",
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



})