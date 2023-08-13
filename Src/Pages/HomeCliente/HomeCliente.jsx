import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

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
                        <Ionicons style={styles.icone} name={"notifications-sharp"} size={40} color='white'/>
                    </View>
                </View>
            </View>

            <View style={styles.divbotoes}>
                <TouchableOpacity>
                    <View></View>
                </TouchableOpacity>

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
        height: "20%",
        borderWidth: 1,
        borderColor: "red",
        alignSelf: "center",
        marginTop: "5%"
    }


})