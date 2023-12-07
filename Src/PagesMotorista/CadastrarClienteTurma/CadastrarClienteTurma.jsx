import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import styles from "./CadastrarClienteTurma.modules";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"
import InputEdicao from "../../Componentes/InputEdicao";
import BotaoGeral from "../../Componentes/BotaoGeral"
import { Token, UserData } from "../../services/Contexts/Contexts";
import ApiMotorista from "../../services/Api/ApiMotorista";
import axios from "axios";

const CadastrarClienteTurma = ({ route }) => {

    const navigation = useNavigation();

    useEffect(() => {
        BuscarUsuario();

        Clientes.map((item) => {
            let nomeSeparado = item.nomeCliente.split(' ');

            item.nomeCliente = nomeSeparado[0] + ' ' + nomeSeparado[1];
        });
    }, [Clientes])

    const { Clientes } = route.params;

    const [usuario, setUsuario] = useState({});
    const [nomeCliente, setNomeCliente] = useState('');
    const [clienteAtual, setClienteAtual] = useState(1);
    const [valorMensalidade, setValorMensalidade] = useState();
    const [vencimentoMensalidade, setVencimentoMensalidade] = useState();
    const [utilizacao, setUtilizacao] = useState('');

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }

    async function BuscarUsuario() {
        let user = await UserData();
        setUsuario(user);
    }

    async function AceitarSolicitacao() {
        try {

            //Fazendo isso para formatar a data no formato aceitado pelo MySql/C#
            let partes = vencimentoMensalidade.split('/');
            let vencimento = partes[2] + '-' + partes[1] + '-' + partes[0];

            const data = {
                Id_cliente: Clientes[clienteAtual - 1].idCliente,
                Id_turma: Clientes[clienteAtual - 1].idTurma,
                Id_motorista: usuario.id_motorista,
                Vencimento_mensalidade: vencimento,
                Valor_mensalidade: Number((valorMensalidade.replace(/,/g, ".")).substring(2))
            }

            const token = await Token();
            await ApiMotorista.put("InserirClienteTurma", data, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            })
        }

        catch (error) {
            console.log(error);
        }
    };

    return (
        <ScrollView style={styles.main}>
            <View style={styles.header}>
                <View style={styles.divesquerda}>
                    <TouchableOpacity style={styles.seta} onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back-outline" size={35} color={"gray"} />
                    </TouchableOpacity>
                </View>

                <View style={styles.divmeio}>
                    <Text style={styles.titulo}>Segunda Etapa</Text>
                </View>

                <View style={styles.divdireita}>
                    <Text style={styles.numerostitulo}>{`${clienteAtual}/${Clientes.length}`}</Text>
                </View>
            </View>

            <View style={styles.divtextosup}>
                <Text style={styles.textosup1}>Cadastre seu cliente aqui</Text>
                <Text style={styles.textosup2}>Adicione suas informações abaixo:</Text>
            </View>

            <TouchableOpacity style={styles.containerfoto}>
                <Image style={styles.foto} source={{ uri: Clientes[clienteAtual - 1].fotoCliente }} />
            </TouchableOpacity>

            <Text style={styles.nomecliente}>{Clientes[clienteAtual - 1].nomeCliente}</Text>

            <Text style={styles.tituloform}>Valor da mensalidade</Text>
            <InputEdicao
                typeInput='money'
                formato={"$"}
                largura={'85%'}
                borda={false}
                dado={"Ex: R$200,00"}
                sombra={true}
                valor={valorMensalidade}
                mudou={(text) => { setValorMensalidade(text) }}
            />

            <Text style={styles.tituloform}>Vencimento da mensalidade</Text>
            <InputEdicao
                typeInput={"datetime"}
                formato={"DD/MM/YYYY"}
                largura={'85%'}
                borda={false}
                dado={"Ex: 10/12/2023"}
                sombra={true}
                valor={vencimentoMensalidade}
                mudou={(text) => setVencimentoMensalidade(text)} />

            <Text style={styles.tituloform}>Utilização dos serviços</Text>
            <InputEdicao
                typeInput={"numeric"}
                largura={'85%'}
                borda={false}
                dado={"Ex: Ida e volta"}
                sombra={true} />

            <View style={{ marginTop: "10%" }}>
                <BotaoGeral
                    texto={"Próximo"}
                    icone={"chevron-forward-outline"}
                    tamanho={true}
                    evento={() => {
                        if (clienteAtual === Clientes.length) {
                            AceitarSolicitacao();
                            navigation.navigate('TabBarMotorista');
                            return;
                        }
                        setClienteAtual(clienteAtual + 1);
                        setValorMensalidade('');
                        setVencimentoMensalidade('');
                        setUtilizacao('');
                        AceitarSolicitacao();
                    }}
                />
            </View>
        </ScrollView>
    )

}

export default CadastrarClienteTurma;