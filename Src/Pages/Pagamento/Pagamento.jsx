import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState} from "react";
import ComprovanteEnviado from "../../Componentes/Common/ComprovanteEnviado"
import Api from "../../services/Api";

export default function Pagamento() {

    const [comprovantes, setComprovantes] = useState([]);
    
    useEffect(() => {
        BuscarComprovantes();
    }, []) //Executa a função assim que os componentes são redenrizados.

    async function BuscarComprovantes() {
    
    try{
        const response = await Api.get('ListarCliente')
        let json = response.data;
        setComprovantes(json);
    }

    catch(error){
        console.error('Erro ao buscar os comprovantes:', error);
    }

    };

    return (

<ScrollView>
        <View>
            <Text style={styles.titulo}>Pagamentos</Text>

            <View style={styles.pagamentoAtual}>
                <Image source={require('../../../assets/UserPhoto.png')}/>
                <Text>Nome usuario</Text>

            </View>

        <View>
            
            {
                comprovantes.map((Item) => (
                    <ComprovanteEnviado item={Item}></ComprovanteEnviado>
                    )) //O .map é parecido com o foreach, ele está criando um componente para cada objeto recebido na requisição
            }
            
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
    }
})