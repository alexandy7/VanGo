import { ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import CardPagamento from "../../Componentes/CardPagamento";
import CardComprovante from "../../Componentes/CardComprovante";
import styles from "./PagamentoCliente.modules";
import { UserData, Header } from "../../services/Contexts/Contexts";
import { useNavigation } from "@react-navigation/native";
import ApiCliente from "../../services/Api/ApiCiente";
import NotFound from "../../Componentes/NotFound";
import axios from "axios";
import { ActivityIndicator } from "react-native";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"

export default function PagamentoCliente() {

    const navigation = useNavigation();

    const [usuario, setUsuario] = useState({});
    const [primeiroNome, setPrimeiroNome] = useState(' ')
    const [comprovantes, setComprovantes] = useState([]);
    const [encontrado, setEncontrado] = useState(true);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        BuscarUsuario()
    }, [])


    async function BuscarUsuario() {
        try {
            const response = await UserData();
            setUsuario(response)
            BuscarComprovantes(response.id_cliente) // Enviando como parametro pois quando o `BuscarComprovantes` é chamado, o `usuario` ainda não foi atualizado
        }

        catch (error) {
            console.error('Houve um erro: ', error)
        }
    }

    async function BuscarComprovantes(idCliente) {

        try {

            let header = await Header()

            const response = await ApiCliente.get(`ListarPagamentswos/${idCliente}`, {
                headers: {
                    Authorization: "Bearer " + header,
                    "Content-Type": "application/json",
                }
            });

            let json = response.data
            setComprovantes(json)
            setLoading(false)
        }

        catch (error) {

            setLoading(false)

            if (error.response) {
                // Se for uma resposta de erro HTTP
                console.log('Erro HTTP:', error.response.status, error.response.data);
            } else if (error.request) {
                // Se a solicitação não puder ser feita (por exemplo, problemas de rede)
                console.log('Erro na solicitação:', error.request);
            } else {
                // Se for um erro de outra natureza
                console.log('Erro desconhecido:', error.message);
            }
        }
    };

    useEffect(() => {
        if (usuario.nome_cliente !== undefined) {
            let nomeSeparado = usuario.nome_cliente.split(' ')
            setPrimeiroNome(nomeSeparado[0])
        }
    }, [usuario])

        const [fonteLoaded] = useFonts({
            Montserrat_500Medium,
        });
    
        if (!fonteLoaded) {
            return null;
        }

    return (

        <ScrollView style={styles.container}>
            {

                loading ? (
                    <ActivityIndicator color="#F7770D" size={40} style={{ justifyContent: "center", marginTop: "90%" }} />
                )
                    :
                    (

                        <View>
                            <Text style={styles.titulo}>Pagamentos</Text>

                            <CardPagamento imagem={{ uri: usuario.foto_cliente }} nome={primeiroNome} fatura={"150,00"} icon={"checkmark-outline"} status={"Pago"} vencimento={"22/11/2023"} evento={() => navigation.navigate("AnexarPagamentos")} />
                            <View style={styles.pagamentoAtual}>
                                <Text style={styles.ultimospagamentos}>Últimos Pagamentos</Text>
                            </View>

                            <View style={styles.Comprovantes}>
                                {

                                    encontrado ? (

                                            <NotFound></NotFound>
                                    )
                                        :
                                        (
                                            comprovantes.map((Comprovante) => (

                                                <CardComprovante
                                                    DataVencimento={Comprovante.vencimento.substring(0, 10)}
                                                    DataPagamento={Comprovante.data_pagamento.substring(0, 10)}
                                                    key={Comprovante.id_pagamento}
                                                ></CardComprovante>
                                                //substring limita a quantidade de caracteres que irá exibir
                                            ))
                                        )
                                }
                            </View>
                        </View>
                    )
            }
        </ScrollView>
    )
}

