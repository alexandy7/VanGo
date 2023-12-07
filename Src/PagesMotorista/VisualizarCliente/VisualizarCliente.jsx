import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import { Token, UserData } from "../../services/Contexts/Contexts";
import PerfilVisualizacao from "../../Componentes/PerfilVisualizacao";
import styles from "./VisualizarCliente.modules";
import CaixaPerfil from "../../Componentes/CaixaPerfil";
import ApiMotorista from "../../services/Api/ApiMotorista";
import VisualizarValorFatura from "../../Componentes/VisualizarValorFatura";
import FormatadorData from "../../services/Formatadores/FormatadorData/FormatadorData";
import InputPrompt from "../../Componentes/Modal";
import { HubConnectionBuilder } from "@microsoft/signalr";


const VisualizarCliente = ({ route }) => {

    const navigation = useNavigation()

    const { nome, foto, id } = route.params;
    const [cliente, setCliente] = useState({});

    const [nomeSobrenome, setNomeSobrenome] = useState(' ');
    const [escola, setEscola] = useState(' ');

    const [confirmarEdicao, setConfirmarEdicao] = useState(false);
    const [valor, setValor] = useState();
    const [clicado, setClicado] = useState(false);
    const [erro, setErro] = useState(false);

    const [connection, setConnection] = useState(null);


    useEffect(() => {
        BuscarCliente();

        let nomeSeparado = nome.split(' ');
        setNomeSobrenome(nomeSeparado[0] + ' ' + nomeSeparado[1])

        const newConnection = new HubConnectionBuilder()
            .withUrl("https://apivango.azurewebsites.net/notificacao")
            .build();
        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            try {
                connection.start()
                    .then(() => {
                        console.log(`Conectado ao hub SignalR!`);
                    })
                    .then(() => {
                        connection.on("ReceiveMessage", (sender, reciver, message, tempoEnvio) => {
                            // console.log(sender, reciver, message, `Motorista/${user.id_motorista}`);
                            if (reciver === `Motorista/${user.id_motorista}`) {
                                let data = new Date(tempoEnvio)
                                atualizarState(sender, message, data);
                            };
                        });
                    })
            }
            catch (error) {
                console.error(error);
            };
        }
    }, [connection]);

    async function EnviarNotificacao(){

        console.log(id, cliente.id_motorista);
        if (connection) {
            connection.invoke("EnviarNotificacao", id, cliente.id_motorista)
                .catch((error) => {
                    console.error(error);
                    return;
                });
        };
    }

    async function BuscarCliente() {
        try {
            const token = await Token();
            let response = await ApiMotorista.get(`BuscarCliente/${id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });

            let json = response.data;
            setCliente(json);

            let escolaSeparado = json.escola_cliente.split(' ');
            let escola = escolaSeparado[0] + ' ' + escolaSeparado[1];
            setEscola(escola + '...')
        }
        catch (error) {
            console.log(error);
        }
    }


    async function EditarValorMensalidade() {
        try {

            let token = await Token();

            const data = {
                id_cliente: id,
                Valor_mensalidade: valor
            };

            let response = await ApiMotorista.put('EditarValorMensalidade', data, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });

            if (response.status !== 200) {
                setErro(true);
                return;
            };

            BuscarCliente();
            setConfirmarEdicao(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView style={styles.geral}>

            <InputPrompt
                visible={confirmarEdicao}
                titulo={'Digite o valor:'}
                mensagemErro={'Valor inválido'}
                onCancel={() => setConfirmarEdicao(false)}
                mudouu={(text) => {
                    setValor(text);
                }}
                evento={() => {
                    EditarValorMensalidade();
                    setClicado(true);
                }}
                clicou={clicado}
                erro={erro}
            />
            <View>
                <PerfilVisualizacao
                    fotoUser={{ uri: foto }}
                    nomeUser={nomeSobrenome}
                    evento={() => navigation.goBack()}
                />

                <View style={styles.regua}>
                    <CaixaPerfil
                        brushOrChat={"chatbubbles"}
                        texto1={cliente.responsavel_cliente}
                        titulotexto1={"Responsável"}
                        icontexto1={"person-outline"}
                        signal={()=> {EnviarNotificacao()}}
                        texto2={escola}
                        titulotexto2={"Escola"}
                        icontexto2={"time-outline"}
                        texto3={cliente.endereco_cliente}
                        titulotexto3={"Endereço"}
                        icontexto3={"home-outline"}
                        texto4={cliente.endereco_reserva}
                        titulotexto4={"2° endereço"}
                        icontexto4={"business-outline"}
                        evento={() => {
                            navigation.navigate("ConversaChatMotorista", {
                                id_cliente: id,
                                foto_cliente: foto,
                                nome_cliente: nome
                            })
                        }}
                    />
                </View>

                <View>
                    <VisualizarValorFatura
                        valor={cliente.valor_mensalidade}
                        vencimento={FormatadorData(cliente.vencimento_mensalidade)}
                        evento={() => setConfirmarEdicao(true)}
                    />
                </View>

            </View>
        </ScrollView>
    )
}

export default VisualizarCliente;