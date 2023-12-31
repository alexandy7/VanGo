import { FlatList, ScrollView, Text, View } from "react-native";
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
    const [nomeSobrenome, setNomeSobrenome] = useState('');
    const [encontrado, setEncontrado] = useState(true);
    const [loading, setLoading] = useState(true);
    const [pagamentos, setPagamentos] = useState({});
    const [mensalidades, setMensalidades] = useState({});
    const [recarregar, setRecarregar] = useState(false);

    const [icone, setIcone] = useState('');
    const [colorIcone, setColorIcone] = useState('');
    const [setaComponente, setSetaComponente] = useState();

    useEffect(() => {
        BuscarUsuario()

    }, [])


    async function BuscarUsuario() {
        try {
            const response = await UserData();
            setUsuario(response);
            BuscarComprovantes(response.id_cliente); // Enviando como parametro pois quando o `BuscarComprovantes` é chamado, o `usuario` ainda não foi atualizado

            let nomeSeparado = response.nome_cliente.split(' ');
            setNomeSobrenome(nomeSeparado[0] + ' ' + nomeSeparado[1])
        }

        catch (error) {
            console.error('Houve um erro: ', error);
        }
    }

    async function BuscarComprovantes(idCliente) {

        try {

            let token = await Token()

            const response = await ApiCliente.get(`ListarPagamentosAndMensalidade/${idCliente}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });

            let json = response.data;
            switch (json.mensalidades[json.mensalidades.length - 1].situacao_mensalidade) {
                case 'prazo':
                    setIcone('time');
                    setColorIcone('black');
                    setSetaComponente(true);
                    break;

                case 'pago':
                    setIcone('checkmark');
                    setColorIcone('green');
                    setSetaComponente(false);
                    break;

                case 'pendente':
                    setIcone('refresh');
                    setColorIcone('green');
                    setSetaComponente(false);
                    break;

                case 'vencido':
                    setIcone('warning');
                    setColorIcone('red');
                    setSetaComponente(true);
                    break;

                case 'recusado':
                    setIcone('warning');
                    setColorIcone('red');
                    setSetaComponente(true);
                    break;

                default:
                    setIcone('time');
                    setColorIcone('black');
                    setSetaComponente(true);

            }

            setPagamentos(json.pagamentos);
            setMensalidades(json.mensalidades);

            if (json.pagamentos.length === 0) {
                setEncontrado(false);
            };

            setLoading(false);
            setRecarregar(false);
        }

        catch (error) {

            setLoading(false);
            setEncontrado(false);

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
        };
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

    function formatarData(dataAmericana) {
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

        <View style={styles.container}>

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
                                    nome={nomeSobrenome}
                                    valor={mensalidades[mensalidades.length - 1].valor_mensalidade}
                                    icon={icone}
                                    cor={colorIcone}
                                    status={mensalidades[mensalidades.length - 1].situacao_mensalidade}
                                    vencimento={formatarData(mensalidades[mensalidades.length - 1].vencimento_mensalidade.substring(0, 10))}
                                    seta={setaComponente}

                                    evento={() => navigation.replace("AnexarPagamentos", {
                                        valor: mensalidades[mensalidades.length - 1].valor_mensalidade,
                                        icon: icone,
                                        color: colorIcone,
                                        status: mensalidades[mensalidades.length - 1].situacao_mensalidade,
                                        vencimento: formatarData(mensalidades[mensalidades.length - 1].vencimento_mensalidade.substring(0, 10)),
                                        idMensalidade: mensalidades[mensalidades.length - 1].id_mensalidade,
                                        nome: nomeSobrenome
                                    })}
                                />
                            </View>


                            <View style={styles.pagamentoAtual}>
                                <Text style={styles.ultimospagamentos}>Últimos Pagamentos</Text>
                            </View>

                            <View style={styles.Comprovantes}>
                                {
                                    encontrado ? (

                                        <FlatList
                                            keyExtractor={(item) => item.id_pagamento}
                                            data={pagamentos}
                                            refreshing={recarregar}
                                            onRefresh={() => {

                                                setRecarregar(true);
                                                BuscarComprovantes();
                                            }
                                            }
                                            renderItem={({ item }) => {

                                                return (
                                                    <CardComprovante
                                                        DataPagamento={formatarData(item.data_pagamento.substring(0, 10))}
                                                        DataVencimento={formatarData(item.vencimento_mensalidade.substring(0, 10))}
                                                        key={item.id_pagamento}
                                                        verComprovante={()=> navigation.navigate("VizualizarComprovante", {
                                                            comprovante: item.comprovante_pagamento
                                                        })}
                                                    />
                                                    //substring limita a quantidade de caracteres que irá exibir
                                                )
                                            }}
                                        />
                                    )
                                        :
                                        (
                                            <NotFound />
                                        )
                                }
                            </View>
                        </View>
                    )
            }
        </View>
    )
}

