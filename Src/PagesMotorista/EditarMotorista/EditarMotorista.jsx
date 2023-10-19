import React, { useEffect, useState } from "react";
import styles from "./EditarMotorista.modules";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import InputEdicao from "../../Componentes/InputEdicao";
import { useNavigation } from "@react-navigation/native";
import { UserData } from "../../services/Contexts/Contexts";

export default function EditarMotorista() {

    const navigation = useNavigation();
    const [usuario, setUsuario] = useState({});
    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState('');
    const [endereco, setEndereco] = useState('');
    const [periodo, setPeriodo] = useState('');


    useEffect(()=>{
        BuscarUsuario();
    },[])

    async function BuscarUsuario(){
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
    }

    return(
        <View style={styles.main}>
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
                    <Image style={styles.foto} source={{uri: usuario.foto_motorista}}/>
                </TouchableOpacity>

                <Text style={styles.textofoto1}>Clique para alterar a foto</Text>
                
                <Text style={styles.textofoto2}>{usuario.nome_motorista}</Text>
            </View>

            <Text style={styles.tituloform}>Nome</Text>
                <InputEdicao
                    valor={nome}
                    mudou={(text) => { setNome(text) }}
                />
                
                <Text style={styles.tituloform}>Cor</Text>
                <InputEdicao
                    valor={"nomeCliente"}
                    mudou={(text) => { setNomeCliente(text) }}
                />

                <Text style={styles.tituloform}>Cidade</Text>
                <InputEdicao
                    valor={endereco}
                    mudou={(text) => { setEndereco(text) }}
                />

                <Text style={styles.tituloform}>Período</Text>
                <InputEdicao
                    valor={periodo}
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