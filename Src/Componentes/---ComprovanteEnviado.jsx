import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function ComprovanteEnviado({ item }) {


    return (
        <View style={styles.geral}>
            <View style={styles.geral2}>
                <View style={styles.tittle}>
                    <Ionicons name='lock-closed' size={25} color='#F7770D' style={styles.icon} />
                    <Text style={styles.comprovante}>Comprovante</Text>

                    <TouchableOpacity style={styles.icon2}>
                        <Ionicons name='eye' size={25} color='#F7770D' />
                    </TouchableOpacity>

                </View>
                <View style={styles.datas}>
                    <View style={styles.infos}>
                        <Text style={{ color: 'green' }}>Pagamento: </Text>
                        <Text style={styles.espacamento}>10/04/2023 </Text>
                        <Text style={{ color: 'red' }}>Vencimento: </Text>
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
        marginBottom: 15,
    },

    geral2: {
        width: 380,
        height: 80,
        borderWidth: 1,
        borderColor: '#F7770D',
        borderRadius: 10,
        flexDirection: 'column',
        top: 0,
        alignSelf: 'center'
    },

    tittle: {
        flexDirection: 'row',
        left: 10,
        top: 10
    },

    comprovante: {
        fontSize: 20,
        marginLeft: 10
    },
    infos: {
        flexDirection: 'row',
        marginBottom: 20,
    },

    datas: {
        position: 'absolute',
        bottom: -15,
        left: 10
    },


    vencimento: {
        flexDirection: 'row',

    },

    icon: {
        top: 4
    },

    icon2: {
        position: 'absolute',
        right: 30,

    },

    espacamento: {
        marginRight: 10
    }
})