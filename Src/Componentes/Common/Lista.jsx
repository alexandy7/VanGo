import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function Lista({icone, titulo, evento}){

    return(

    <View > 

        <TouchableOpacity onPress={evento}>

            <View style={styles.geral}>
                <Ionicons name={icone} color={'rgba(0, 0, 0, 0.4)'} size={28} style={styles.icone}/>
                <Text style={styles.Titulo}>{titulo}</Text>
                <Ionicons name="chevron-forward" color={'grey'} size={30} style={styles.seta}/>
            </View>

        </TouchableOpacity>

    </View>

    );

}

const styles = StyleSheet.create({

    geral: {
        flexDirection: 'row', //Alinha lado a lado a imagem, titulo e a seta
        padding: 10,
        alignItems: 'center',
        justifyContent: "flex-end",
        marginBottom: 0,
    }, //Alinhando o espaçamento dos elementos

    icone:{
        position: "absolute",
        left: "5%"
    },

    Titulo:{
        fontSize: 16,
        margin: 10, //Dá o espaçamento entre os elementos (OBS: esse é o Titulo com "t" maiusculo)
        position: "absolute",
        left: "15%"
    },

    seta: {
        position: 'relative',
        margin: 7
    } //Estou posicionando a seta ao final e sua altura

})

//Coloquei o componente todo dentro de somente uma View para uma melhor organização e boa prática
//Alterei o nome dos parametros para um melhor entendimento
//A importação de todas as tags ficaram em somente um "import" para uma melhor otimização
//Removi o "..-web" no final de todas as importações do react-native, pois ele é acrescentado automaticamente por uma extensão, mas isso só faz o código bugar
//Coloquei as imagens como tag autofechante, pois é a forma correta
//TouchableOpacity é um tipo de button, mas personalizado