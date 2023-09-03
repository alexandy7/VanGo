import { ScrollView, StyleSheet, Text, View, Image, navigation } from "react-native";
import { useContext, useEffect, useState } from "react";
import Api from "../../services/ApiCiente";
import CardPagamento from "../../Componentes/CardPagamento";
import CardComprovante from "../../Componentes/CardComprovante";
import styles from "./Pagamento.modules";
import { AuthContext } from "../../Contexts/Contexts";
import { useNavigation } from "@react-navigation/native";

export default function Pagamento() {

    const navigation = useNavigation();
    const { user } = useContext(AuthContext);

    const [comprovantes, setComprovantes] = useState([]);

    useEffect(() => {
        BuscarComprovantes();
    }, []) 

    async function BuscarComprovantes() {

        try {
            const response = await Api.get(`ListarPagamentos?id=${user.id_cliente}`)
            let json = response.data;
            setComprovantes(json);
        }

        catch (error) {
            console.error('Erro ao buscar os comprovantes:', error);
        }

    };

    return (

        <ScrollView>
            <View>
                <Text style={styles.titulo}>Pagamentos</Text>

                <CardPagamento imagem={require('../../../assets/Ana.jpeg')} nome={"Ana"} fatura={"150,00"} icon={"checkmark-outline"} status={"Pago"} vencimento={"22/11/2023"} evento={()=> navigation.navigate("AnexarPagamentos")}/>

                <View style={styles.pagamentoAtual}>
                    <Text style={styles.nomeusuario}>Últimos Pagamentos</Text>
                </View>

                <View style={styles.Comprovantes}>
                    {
                        comprovantes.map((Comprovante) => (

                            <CardComprovante 
                            DataVencimento={Comprovante.vencimento.substring(0, 10)} 
                            DataPagamento={Comprovante.data_pagamento.substring(0, 10)}
                            key={Comprovante.id_pagamento}
                            ></CardComprovante>
                            //substring limita a quantidade de caracteres que irá exibir
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    )
}

