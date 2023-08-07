import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function NotificacaoDePagamento({item}) {


    return (
        <View style={styles.geral}>
                <View style={styles.geral2}>
                    <View style={styles.divimagem}> 
                        <Image source={require('../../../assets/gato.jpg')} style={styles.imageicon}/>
                    </View>

                    <View style={styles.title}>
                        <Text style={styles.nomecliente}>Mariona2</Text>
                        <Text style={styles.valorpagamento}>R$120,00</Text>
                        <TouchableOpacity style={styles.icon2}>
                        <Ionicons name="chevron-forward-outline" size={25} color='#F7770D'/>
                        </TouchableOpacity>
                    </View>


                    
                    <View style={styles.datas}>
                        <View style={styles.infos}>
                        <Ionicons style={styles.icon3} name="warning-outline" size={17} color='red'/>
                            <Text style={styles.espacamento}>Em atraso</Text>
                            <Text style={{ color:'red'}}>Vencimento: </Text>
                            <Text>10/04/2023</Text>
                        </View>
                    </View>
                </View>


        </View>
    )
}

const styles = StyleSheet.create({
    geral: {
        flex: 1,
        marginBottom: 15
    },

    geral2: {
        width: 380,
        height: 80,
        borderColor: 'grey',
        borderRadius: 20,
        top: 0,
        alignSelf: 'center',
        borderBottomWidth: 1,
        shadowRadius: 10,
    },

    divimagem:{
        height: 70,
        width: 70,
        position: "relative"
    },

    title: {
        display: "flex",
        flexDirection: 'row',
        bottom: 60,
        left: 80
    },
    nomecliente: {
        fontSize: 20,
        marginLeft: 10
    },

    valorpagamento: {
        fontSize: 20,
        marginLeft: 80,
        color: "red"
    },

    infos: {
        flexDirection: 'row',
        marginBottom: 20,
        position: "relative",
        left: "250%",
        justifyContent: "flex-end"
    },

    datas:{
        position:'absolute',
        bottom: -15,
        left: 10
    },
    

    vencimento: {
        flexDirection: 'row',

    },

    icon: {
        top: 4
    },

    icon2:{
        position: 'relative',
        display: "flex",
        left: 10
        
    },

    icon3:{
        position:"relative"
    },

    espacamento:{
        marginRight: 10,
    },

    imageicon:{
        height: "100%",
        width: "100%",
        position: "relative",
        left: 5,
        top: 5

    }
})