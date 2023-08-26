import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    geral:{
        flex: 1,
        backgroundColor: '#EFEFEF',
        alignItems: 'center',
        

    },

    config: {
        
        flexDirection: 'row', //Deixando elementos lado a lado
        marginTop: 50
      
    },

    setaInvertida:{
        right: 80
    }, // Aqui não consegui posicionar a seta de outra forma, então deixei assim, mas precisamos descobrir como arrumar da forma certa

    configText: {
        fontSize: 23,
        marginBottom: 50
    },
    
    conta: {
        borderRadius: 28,
        backgroundColor: 'white',
        marginBottom: 50
    },

    motorista: {
        borderRadius: 28,
        backgroundColor: 'white',
    }


});

export default styles;