import { ScrollView, StyleSheet, Text, View, Image, navigation } from "react-native";
import { useContext, useEffect, useState } from "react";
import CardPagamento from "../../Componentes/CardPagamento";
import CardComprovante from "../../Componentes/CardComprovante";
import styles from "./PagamentoCliente.modules";
import { AuthContext } from "../../services/Contexts/Contexts";
import { useNavigation } from "@react-navigation/native";
import ApiCliente from "../../services/Api/ApiCiente";

export default function PagamentoCliente() {

    const navigation = useNavigation();
    const { user } = useContext(AuthContext);

    const [comprovantes, setComprovantes] = useState([]);

    useEffect(() => {
        BuscarComprovantes();
    }, []) 

    async function BuscarComprovantes() {

        try {
            const response = await ApiCliente.get(`ListarPagamentos?id=${user.id_cliente}`)
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

                <CardPagamento imagem={{uri : user.foto_cliente}} nome={user.nome_cliente} fatura={"150,00"} icon={"checkmark-outline"} status={"Pago"} vencimento={"22/11/2023"} evento={()=> navigation.navigate("AnexarPagamentos")}/>

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

