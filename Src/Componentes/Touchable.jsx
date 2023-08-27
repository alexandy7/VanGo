import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export default function Touchable({texto, evento} ){

    return(
      
    <View style={styles.prosseguir}>
        <TouchableOpacity  onPress={evento}>
                <Text style={styles.textoProsseguir}>{texto}</Text>
            </TouchableOpacity>
    </View>
    
    )
}

const styles = StyleSheet.create(
    {
        prosseguir: {
            backgroundColor: '#F7770D',
            alignSelf: 'center',
            width: 290,
            height: 53,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            top: 40,
            marginBottom: 60, // Esta com essa margem para que o ScrollView não corte parte dele
            zIndex: 1
        },

        textoProsseguir: {
            color: 'white',
            fontSize: 20
        },

        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: -40
          },
    }
)

