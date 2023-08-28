import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import Api from "../../services/ApiCiente";
import CardPagamento from "../../Componentes/CardPagamento";
import CardComprovante from "../../Componentes/CardComprovante";
import styles from "./Pagamento.modules";
export default function Pagamento() {

    const [comprovantes, setComprovantes] = useState([]);

    useEffect(() => {
        BuscarComprovantes();
    }, []) //Executa a função assim que os componentes são renderizados.

    async function BuscarComprovantes() {

        try {
            const response = await Api.get('ListarPagamentos?id=1')
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

                <CardPagamento></CardPagamento>

                <View style={styles.pagamentoAtual}>
                    <Text style={styles.nomeusuario}>Últimos Pagamentos</Text>
                </View>

                <View style={styles.Comprovantes}>
                    {
                        comprovantes.map((Comprovante) => (

                            <CardComprovante DataVencimento={Comprovante.vencimento.substring(0, 10)} DataPagamento={Comprovante.data_pagamento.substring(0, 10)}></CardComprovante>
                            //substring limita a quantidade de caracteres que irá exibir
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    )
}

