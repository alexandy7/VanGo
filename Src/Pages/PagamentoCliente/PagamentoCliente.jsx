import { ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import CardPagamento from "../../Componentes/CardPagamento";
import CardComprovante from "../../Componentes/CardComprovante";
import styles from "./PagamentoCliente.modules";
import { UserData, Token } from "../../services/Contexts/Contexts";
import { useNavigation } from "@react-navigation/native";
import ApiCliente from "../../services/Api/ApiCiente";
import NotFound from "../../Componentes/NotFound";
import { ActivityIndicator } from "react-native";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"
import { BackHandler } from "react-native";
import axios from "axios";
export default function PagamentoCliente() {

    const navigation = useNavigation();

    const [usuario, setUsuario] = useState({});
    const [encontrado, setEncontrado] = useState(true);
    const [loading, setLoading] = useState(true);
    const [pagamentos, setPagamentos] = useState(null);
    const [mensalidades, setMensalidades] = useState(null);



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

            let token = await Token()

            const response = await axios.get(`https://localhost:7149/api/Cliente/ListarPagamentosAndMensalidade/${1}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });

            let json = response.data;
            setPagamentos(json.pagamentos);
            setMensalidades(json.mensalidades)
            setLoading(false);
        }

        catch (error) {

            setLoading(false)
            setEncontrado(false)

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

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
    });

    if (!fonteLoaded) {
        return null;
    }

    // BackHandler.addEventListener(
    //     "hardwareBackPress",
    //    ()=> {navigation.navigate("TabBarCliente")}

    // )

    function formatarDataAmericana(dataAmericana) {
        // Cria um objeto de data usando a string no formato americano
        let dataObjeto = new Date(dataAmericana);
    
        // Extrai os componentes do ano, mês e dia
        let dia = dataObjeto.getDate().toString().padStart(2, '0');
        let mes = (dataObjeto.getMonth() + 1).toString().padStart(2, '0'); // Mês começa do zero
        let ano = dataObjeto.getFullYear();
    
        // Formata a data no formato brasileiro
        let dataBrasileira = `${dia}/${mes}/${ano}`;
        
        return dataBrasileira;
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

                            <View>
                                    
                                    <CardPagamento
                                        imagem={{ uri: usuario.foto_cliente }}
                                        nome={usuario.nome_cliente}
                                        valor={mensalidades[mensalidades.length - 1].valor_mensalidade}
                                        icon={mensalidades[mensalidades.length - 1].situacao_mensalidade === "pago" ? "checkmark" : "warning"}
                                        color={mensalidades[mensalidades.length - 1].situacao_mensalidade === "pago" ? "green" : "red"}
                                        status={mensalidades[mensalidades.length - 1].situacao_mensalidade === "pago" ? "pago" : "em atraso"}
                                        vencimento={formatarDataAmericana(mensalidades[mensalidades.length - 1].vencimento_mensalidade.substring(0, 10))}
                                    />
                            </View>


                            <View style={styles.pagamentoAtual}>
                                <Text style={styles.ultimospagamentos}>Últimos Pagamentos</Text>
                            </View>

                            <View style={styles.Comprovantes}>
                                {

                                    encontrado ? (
                                        pagamentos.map((Comprovante) => (

                                            <CardComprovante
                                            DataPagamento={formatarDataAmericana(Comprovante.data_pagamento.substring(0, 10))}
                                            DataVencimento={formatarDataAmericana(Comprovante.vencimento_mensalidade.substring(0, 10))}
                                                key={Comprovante.id_pagamento}
                                            ></CardComprovante>
                                            //substring limita a quantidade de caracteres que irá exibir
                                        ))
                                    )
                                        :
                                        (
                                            <NotFound></NotFound>

                                        )
                                }
                            </View>
                        </View>
                    )
            }
        </ScrollView>
    )
}

