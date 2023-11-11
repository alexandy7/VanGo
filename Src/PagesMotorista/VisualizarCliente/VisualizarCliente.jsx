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


const VisualizarCliente = ({ route }) => {

    const navigation = useNavigation()

    const { nome, foto, id } = route.params;
    const [cliente, setCliente] = useState({});

    const [nomeSobrenome, setNomeSobrenome] = useState(' ');
    const [nomeResponsável, setNomeResponsavel] = useState(' ');
    const [enderecoUsuario, setEnderecoUsuario] = useState(' ');
    const [enderecoUsuario2, setEnderecoUsuario2] = useState(' ');
    const [escola, setEscola] = useState(' ');

    const [confirmarEdicao, setConfirmarEdicao] = useState(false);
    const [valor, setValor] = useState();
    const [clicado, setClicado] = useState(false);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        BuscarCliente();

        let nomeSeparado = nome.split(' ');
        setNomeSobrenome(nomeSeparado[0] + ' ' + nomeSeparado[1])
    }, []);

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

            let responsavelSeparado = json.responsavel_cliente.split(' ')
            setNomeResponsavel(responsavelSeparado);
            if (responsavelSeparado.length > 1) {

                let nomeResponsavel = responsavelSeparado[0] + ' ' + responsavelSeparado[1];
                setNomeResponsavel(nomeResponsavel + '...');
            };

            let enderecoSeparado = json.endereco_cliente.split(' ');
            let endereco = enderecoSeparado[0] + ' ' + enderecoSeparado[1];
            setEnderecoUsuario(endereco + '...');

            let endereco2Separado = json.endereco_reserva.split(' ');
            let endereco2 = endereco2Separado[0] + ' ' + endereco2Separado[1];
            setEnderecoUsuario2(endereco2 + '...')

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
                        texto1={nomeResponsável}
                        titulotexto1={"Responsável"}
                        icontexto1={"person-outline"}
                        texto2={escola}
                        titulotexto2={"Escola"}
                        icontexto2={"time-outline"}
                        texto3={enderecoUsuario}
                        titulotexto3={"Endereço"}
                        icontexto3={"home-outline"}
                        texto4={enderecoUsuario2}
                        titulotexto4={"2° endereço"}
                        icontexto4={"business-outline"}
                        evento={() => { navigation.navigate("Chat") }}
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