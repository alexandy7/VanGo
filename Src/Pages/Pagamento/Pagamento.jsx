import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState} from "react";
import ComprovanteEnviado from "../../Componentes/Common/ComprovanteEnviado"
import Api from "../../services/Api";
import CardPagamento from "../../Componentes/Common/CardPagamento";
import CardComprovante from "../../Componentes/Common/CardComprovante";

export default function Pagamento() {

    const [comprovantes, setComprovantes] = useState([]);
    
    // useEffect(() => {
    //     BuscarComprovantes();
    // }, []) //Executa a função assim que os componentes são redenrizados.

    // async function BuscarComprovantes() {
    
    // try{
    //     const response = await Api.get('ListarCliente')
    //     let json = response.data;
    //     setComprovantes(json);
    // }

    // catch(error){
    //     console.error('Erro ao buscar os comprovantes:', error);
    // }

    // };

    return (

<ScrollView>
        <View>
            <Text style={styles.titulo}>Pagamentos</Text>

            <CardPagamento></CardPagamento>

            <View style={styles.pagamentoAtual}> 
                <Text style={styles.nomeusuario}>Últimos Pagamentos</Text>
            </View>

        <View>
            <CardComprovante></CardComprovante>
            <CardComprovante></CardComprovante>  
            <CardComprovante></CardComprovante>
            <CardComprovante></CardComprovante>
            <CardComprovante></CardComprovante>
            <CardComprovante></CardComprovante>
        </View>

        </View>
</ScrollView>
    )
}   

const styles = StyleSheet.create({
    titulo:{
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },

    pagamentoAtual: {
        flexDirection: 'row'
    },

    nomeusuario: {
        fontSize: 20,
        position: "relative",
        left: 42,
        bottom: 5
    }
})