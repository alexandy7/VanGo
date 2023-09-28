import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./Turmas.modules";
import BarraDePesquisa from "../../Componentes/BarraDePesquisa";
import CardAluno from "../../Componentes/CardAluno";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"
import { Token, UserData } from "../../services/Contexts/Contexts";
import ApiCliente from "../../services/Api/ApiCiente";
import ApiMotorista from "../../services/Api/ApiMotorista";


export default function Turmas({ nometurma, idTurma }) {

    const navigation = useNavigation();

    const [user, setUser] = useState({});
    const [clientes, setClientes] = useState([]);
    const [listaFiltrada, setListaFiltrada] = useState([]);
    const [searchCliente, setSearchCliente] = useState("");

    const [buttonTodos, setButtonTodos] = useState("#F7770D")
    const [buttonPresentes, setButtonPresentes] = useState("#C4C4C433")
    const [buttonAusentes, setButtonAusentes] = useState("#C4C4C433")

    const [textTodos, setTextTodos] = useState("white")
    const [textPresentes, setTextPresentes] = useState("grey")
    const [textAusentes, setTextAusentes] = useState("grey")

    useEffect(() => {
        BuscarUsuario()
    }, [])

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
    });

    if (!fonteLoaded) {
        return null;
    };


    async function BuscarUsuario() {
        const response = await UserData()
        setUser(response);
        BuscarClientesTurma()
    }


    function filtrarStatusCliente(criterio) {

        const filtrando = clientes.filter((cliente) => cliente.status === criterio);
        setListaFiltrada(filtrando);

        switch (criterio) {
            case "presente":
                setButtonTodos("#C4C4C433");
                setTextTodos("grey");

                setButtonPresentes("#F7770D");
                setTextPresentes("white");

                setButtonAusentes("#C4C4C433");
                setTextAusentes("grey");
                break;

            case "ausente":
                setButtonTodos("#C4C4C433");
                setTextTodos("grey");

                setButtonPresentes("#C4C4C433");
                setTextPresentes("grey");

                setButtonAusentes("#F7770D");
                setTextAusentes("white");
                break;
        }

    }

    function filtroTodosClientes() {
        const todosClientes = clientes;
        setListaFiltrada(todosClientes);

        setButtonTodos("#F7770D");
        setTextTodos("white");

        setButtonPresentes("#C4C4C433");
        setTextPresentes("grey");

        setButtonAusentes("#C4C4C433");
        setTextAusentes("grey");
    }


    // o valor inicial de "pesquisaFiltrada" é "listaFiltrada", pois o "searchCliente" é uma string vazia
    const pesquisaFiltrada = listaFiltrada.filter((lista) => lista.nome_cliente.toLowerCase().includes(searchCliente.toLocaleLowerCase()))

    async function BuscarClientesTurma() {

        const token = await Token();

        let response = await ApiMotorista.get(`ListarClientesTurmas?id_motorista=${1}&id_turma=${33720}`, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            }
        });

        let json = response.data
        setClientes(json);
        setListaFiltrada(json)
    }


    return (
        <SafeAreaView style={styles.main}>

            <View style={styles.header}>
                <View style={styles.divesquerda}>
                    <TouchableOpacity style={styles.seta} onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back-outline" size={30} />
                    </TouchableOpacity>
                </View>

                <View style={styles.divmeio}>
                    <Text style={styles.titulo}>Turma Exemplo</Text>
                </View>

                <View style={styles.divdireita}>

                </View>

                <View style={styles.divbarra}>
                    <BarraDePesquisa
                        placeholder={"Exemplo: Rodrigo Lopes"}
                        valor={searchCliente}
                        change={(text) => setSearchCliente(text)} />
                </View>
            </View>

            <View style={styles.alinhabotoes}>

                <TouchableOpacity style={[styles.botao, { backgroundColor: buttonTodos }]} onPress={() => { filtroTodosClientes() }}>
                    <Text style={[styles.textobotao, { color: textTodos }]}>Todos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botao, { backgroundColor: buttonPresentes }]}>
                    <Text style={[styles.textobotao, { color: textPresentes }]} onPress={() => { filtrarStatusCliente('presente') }}>Presentes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botao, { backgroundColor: buttonAusentes }]} onPress={() => { filtrarStatusCliente('ausente') }}>
                    <Text style={[styles.textobotao, { color: textAusentes }]}>Ausentes</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                keyExtractor={(item) => item.nome_cliente + item.data_ausencia}
                data={pesquisaFiltrada}
                renderItem={({ item }) => {

                    const borderColor = item.status === "ausente" ? "red" : "green";

                    return (
                        <CardAluno
                            foto={{ uri: item.foto_cliente }}
                            nome={item.nome_cliente}
                            escola={item.escola_cliente}
                            status={item.status}
                            borderColor={borderColor} // Passamos a cor da borda como prop
                        />
                    );
                }}
            />



            {/* <ScrollView style={styles.scroll}>

                <CardAluno foto={require('../../../assets/fazueli.jpg')} nome={"João Silva Lino"} escola={"C.M Colaço"}></CardAluno>
                <CardAluno foto={require('../../../assets/Ana.jpeg')} nome={"Ana Clara"} escola={"E.E Alguma outra"}></CardAluno>
                <CardAluno foto={require('../../../assets/manoelgomes.jpg')} nome={"Manoel Gomes"} escola={"C.A Neta azul"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>

            </ScrollView> */}
        </SafeAreaView>
    )
}