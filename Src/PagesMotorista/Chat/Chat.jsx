import { ScrollView, StyleSheet, Text, View, Image, navigation, FlatList } from "react-native";
import { useContext, useEffect, useState } from "react";
import styles from "./Chat.modules";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import BarraDePesquisaChat from "../../Componentes/BarraDePesquisaChat";
import CardChat from "../../Componentes/CardChat";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"
import { Token, UserData } from "../../services/Contexts/Contexts";
import ApiMotorista from "../../services/Api/ApiMotorista";
import FormatadorData from "../../services/Formatadores/FormatadorData/FormatadorData";
export default function Chat() {

    const navigation = useNavigation();

    const [conversas, setConversas] = useState({});
    const [conversasFiltradas, setConversasFiltradas] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        BuscarConversas();
    }, []);

    async function BuscarConversas() {
        const usuario = await UserData();
        const token = await Token();

        let conversas = await ApiMotorista.get(`BuscarConversas/${usuario.id_motorista}`, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            }
        });

        let json = conversas.data;
        setConversasFiltradas(json);
        setConversas(json);
    }

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
    });

    if (!fonteLoaded) {
        return null;
    };

    const pesquisaFiltrada = conversasFiltradas.filter((lista) => lista.nome_cliente.toLowerCase().includes(search.toLocaleLowerCase()))
    return (
        <View style={styles.scroll}>
            <View style={styles.header}>
                <View style={styles.divesquerda}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back-outline" size={30} color={"white"} />
                    </TouchableOpacity>
                </View>

                {/* Foram criadas duas views separadas que formam o desenho de apenas uma,
                o elemento do topo da página não se enquadra na lógica das flexbox */}
                <View style={styles.divmeio}>
                    <Text style={styles.titulo}>Mensagem</Text>
                </View>

                <View style={styles.divdireita}>

                </View>

            </View>

            <View style={styles.alinhabarra}>
                <BarraDePesquisaChat 
                corPlaceholder={true}
                placeholder={"Exemplo: Jonathan Joestar"} 
                valor={search}
                mudou={(text)=> setSearch(text)}
                />
            </View>

            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={pesquisaFiltrada}
                renderItem={({ item }) => {
                    return (
                        <CardChat 
                        foto={{ uri: item.foto_cliente }} 
                        nome={item.nome_cliente} 
                        hora={FormatadorData(item.data_envio_mensagem)} 
                        ultimaMensagem={item.mensagem} 
                        verPerfil={()=> {
                            navigation.navigate('VisualizarCliente', {
                                nome: item.nome_cliente,
                                foto: item.foto_cliente,
                                id: item.id_cliente_conversa
                            })
                        }}
                        verConversa={()=> {
                            navigation.navigate('ConversaChatMotorista', {
                                id_cliente: item.id_cliente_conversa ,
                                foto_cliente: item.foto_cliente,
                                nome_cliente: item.nome_cliente 
                            })
                        }}
                        />
                    )
                }}
            />

        </View>
    )

}
