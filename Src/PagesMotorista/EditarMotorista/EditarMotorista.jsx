import React, { useEffect, useState } from "react";
import styles from "./EditarMotorista.modules";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import InputEdicao from "../../Componentes/InputEdicao";
import { useNavigation } from "@react-navigation/native";
import { GuardarToken, RemoverToken, Token, UserData } from "../../services/Contexts/Contexts";
import ApiMotorista from "../../services/Api/ApiMotorista"
import InputPrompt from "../../Componentes/Modal";
import Toast from "react-native-toast-message";
import axios from "axios";
import ApiCliente from "../../services/Api/ApiCiente";
import showToast from "../../services/Toast/Toast";

export default function EditarMotorista() {

    const navigation = useNavigation();
    const [usuario, setUsuario] = useState({});
    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState('');
    const [endereco, setEndereco] = useState('');
    const [periodo, setPeriodo] = useState('');
    const [senha, setSenha] = useState('');

    const [confirmarEdicao, setConfirmarEdicao] = useState(false);
    const [erro, setErro] = useState(false);
    const [clicado, setClicado] = useState(false);


    useEffect(() => {
        BuscarUsuario();
    }, [])

    async function BuscarUsuario() {
        let user = await UserData();
        setUsuario(user);

        setNome(user.nome_motorista);
        setFoto(user.foto_motorista);
        setEndereco(user.endereco_motorista);
        setPeriodo(user.periodo_atuacao_motorista)
    }
    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular,
        Montserrat_600SemiBold
    });

    if (!fonteLoaded) {
        return null;
    };


    async function AlterarMotorista() {

        let token = await Token();
        console.log(token)
        const data = {
            Id_motorista: usuario.id_motorista,
            Foto_motorista: foto,
            Nome_motorista: nome,
            Endereco_motorista: endereco,
            Periodo_atuacao_motorista: periodo,
            Senha_motorista: senha
        };

        let response = await ApiMotorista.put("AlterarMotorista", data, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            }
        });

        if(response.status !== 200){
            console.log('algo deu errado');
            clicado(false);
            return;
        };

        AtualizarInformacoes();
    };

    async function AtualizarInformacoes() {
        try {

            console.log(usuario.email_motorista, senha);

            await RemoverToken();

            const data = new URLSearchParams();
            data.append("Email", usuario.email_motorista);
            data.append("Senha", senha);
            
            let response = await axios.post("https://apivango.azurewebsites.net/api/Auth/Login", data.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });

            GuardarToken(response.data.token);
            setConfirmarEdicao(false);
            setSenha("");
            showToast('success', 'Concluido', 'Agora basta reiniciar o app para atualizar as informações!', 5000);
             navigation.goBack();
        }

        catch (error) { 
            setClicado(false);

            if (error.response) {
                // Se for uma resposta de erro HTTP
                console.log('Erro HTTP:', error.response.status, error.response.data + ' (Erro ao atualizar info)');
            } else if (error.request) {
                // Se a solicitação não puder ser feita (por exemplo, problemas de rede)
                console.log('Erro na solicitação:', error.request + ' (Erro ao atualizar info)');
            } else {
                // Se for um erro de outra natureza
                console.log('Erro desconhecido:', error.message + ' (Erro ao atualizar info)');
            }
        }
    }

    return (
        <View style={styles.main}>

            <InputPrompt
                visible={confirmarEdicao}
                onCancel={() => setConfirmarEdicao(false)}
                mudouu={(text) => {
                    setSenha(text);
                }}
                evento={() => {
                    AlterarMotorista();
                    setClicado(true);
                }}
                clicou={clicado}
                erro={erro}
            />

            <View style={styles.header}>
                <View style={styles.divesquerda}>
                    <TouchableOpacity style={styles.seta} onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back-outline" size={30} />
                    </TouchableOpacity>
                </View>

                <View style={styles.divmeio}>
                    <Text style={styles.titulo}>Editar Perfil</Text>
                </View>

                <View style={styles.divdireita}>

                </View>
            </View>

            <View style={styles.containerfoto}>
                <TouchableOpacity style={styles.divfoto}>
                    <Image style={styles.foto} source={{ uri: usuario.foto_motorista }} />
                </TouchableOpacity>

                <Text style={styles.textofoto1}>Clique para alterar a foto</Text>

                <Text style={styles.textofoto2}>{usuario.nome_motorista}</Text>
            </View>

            <Text style={styles.tituloform}>Nome</Text>
            <InputEdicao
                valor={nome}
                largura={"86%"}
                mudou={(text) => { setNome(text) }}
            />

            <Text style={styles.tituloform}>Cor</Text>
            <InputEdicao
                valor={"nomeCliente"}
                largura={"86%"}
                mudou={(text) => { setNomeCliente(text) }}
            />

            <Text style={styles.tituloform}>Cidade</Text>
            <InputEdicao
                valor={endereco}
                largura={"86%"}
                mudou={(text) => { setEndereco(text) }}
            />

            <Text style={styles.tituloform}>Período</Text>
            <InputEdicao
                valor={periodo}
                largura={"86%"}
                mudou={(text) => { setPeriodo(text) }}
            />

            <TouchableOpacity onPress={() => { setConfirmarEdicao(true) }}>
                <View style={styles.botao}>
                    <Text style={styles.textobotao}>Salvar Alterações</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}