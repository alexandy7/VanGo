
import React, { useEffect, useState  } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import InputEdicao from '../../Componentes/InputEdicao';

export default function ListEscolas({ escolaCliente }) {
   const [suggestions, setSuggestions] = useState([
        { escola: 'Alba de Mello Bonilha', cidade: 'São luiz' },
        { escola: 'ABELARDO MARQUES DA SILVA', cidade: 'FAZENDINHA' },
        { escola: 'ADRIANO TEIXEIRA DE SANTANA', cidade: 'JARDIM ISAURA' },
        { escola: 'ALDONIO RAMOS TEIXEIRA', cidade: 'PARQUE SANTANA' },
        { escola: 'ALGODAO DOCE COLEGIO MUNICIPAL', cidade: 'JARDIM DO LUAR' },
        { escola: 'ALVARO RIBEIRO DR COLEGIO MUNICIPAL', cidade: 'JARDIM ISAURA' },
        { escola: 'ANA APARECIDA SANTANA PROFA COLEGIO MUNICIPAL', cidade: 'CIDADE SAO PEDRO GLEBA B' },
        { escola: 'ANACLETO DE CAMARGO PADRE', cidade: 'COLINAS DA ANHANGUERA' },
        { escola: 'ANDRE FERNANDES COLEGIO MUNICIPAL', cidade: 'CENTO E VINTE' },
        { escola: 'ANDRE FRANCO MONTORO GOVERNADOR COLEGIO', cidade: 'CHACARA DO SOLAR III' },
        { escola: 'AURELIO GIANINI TEIXEIRA', cidade: 'RECANTO MARAVILHA III' },
        { escola: 'BALAO MAGICO COLEGIO MUNICIPAL', cidade: 'JARDIM SILVIO' },
        { escola: 'BEIJA FLOR COLEGIO MUNICIPAL', cidade: 'JARDIM SANTA MARTA FAZENDINHA' },
        { escola: 'BENEDITA ODETTE DE MORAIS SAVOIA', cidade: 'JARDIM SAO LUIS' },
        { escola: 'BERNARDINO MARQUES DA SILVA PREF', cidade: 'CIDADE SAO PEDRO GLEBA A' },
        { escola: 'CARLOS ALBERTO DE SIQUEIRA PROF', cidade: 'VILA MARIA NAZARE' },
        { escola: 'CARLOS DRUMMOND DE ANDRADE', cidade: 'CHACARA DO SOLAR II FAZENDINHA' },
        { escola: 'CELINA DA COSTA MACHADO SILVA DONA COLEGIO MUNICIPAL', cidade: 'JARDIM ISAURA' },
        { escola: 'CIRANDA COLEGIO MUNICIPAL', cidade: 'CHACARA DO SOLAR I FAZENDINHA' },
        { escola: 'ANA SERRA DE FREITAS', cidade: 'CIDADE SAO PEDRO GLEBA B' },
        { escola: 'CHACARA DAS GARCAS', cidade: 'CHACARA DAS GARCAS' },
        { escola: 'CHACARA SOLAR II', cidade: 'CHACARA DO SOLAR II FAZENDINHA' },
        { escola: 'GEORGINA DE ANDRADE NADALINI', cidade: 'PARQUE ALVORADA' },
        { escola: 'JOSE SOARES DOS SANTOS', cidade: 'REFUGIO DOS BANDEIRANTES' },
        { escola: 'MAX SANTANA', cidade: 'TAMBORE' },
        { escola: 'PADRE GREGOR KARL LUTZ', cidade: 'CIDADE SAO PEDRO GLEBA A' },
        { escola: 'PROFESSOR FABIO LEANDRO PONSO', cidade: 'ALDEIA DA SERRA' },
        { escola: 'SR GABRIELE DALESSANDRO', cidade: 'JARDIM RANCHO ALEGRE' },
        { escola: 'CORA CORALINA COLEGIO MUNICIPAL', cidade: 'CIDADE SAO PEDRO GLEBA A' },
        { escola: 'CRISTAL PARK COLEGIO MUNICIPAL', cidade: 'CRISTAL PARK' },
        { escola: 'CURUMIM COLEGIO MUNICIPAL I', cidade: 'JARDIM PROFESSOR BENOA' },
        { escola: 'DAISY MORAES CHAVES NICOLAS PROFA COLEGIO MUNICIPAL', cidade: 'GERMANO' },
        { escola: 'ELISETE APARECIDA SANTOS SOUSA COLEGIO MUNICIPAL', cidade: 'JARDIM ALAGOAS' },
        { escola: 'EMILIA GIL DASSUMCAO PROFESSORA COLEGIO MUNICIPAL', cidade: 'COLINAS DA ANHANGUERA' },
        { escola: 'GASPAR DE GODOI COLAÇO TTE GAL COLEGIO MUNICIPAL', cidade: 'CENTRO' },
        { escola: 'HELENA CHAVES DEMANGE PROFA COLEGIO MUNICIPAL', cidade: 'JAGUARI' },
        { escola: 'HOLMES VILLAR COLEGIO MUNICIPAL', cidade: 'SITIO DO ROSARIO' },
        { escola: 'HORTENCIA ALVES DOS SANTOS PROFA COLEGIO MUNICIPAL', cidade: 'JARDIM DAS AVENCAS FAZENDINHA' },
        { escola: 'IMIDEO GIUSEPPE NERICI PROF COLEGIO MUNICIPAL', cidade: 'CHACARA DO SOLAR III' },
        { escola: 'JARDIM SAO LUIS COLEGIO MUNICIPAL', cidade: 'JARDIM SAO LUIS' },
        { escola: 'JOAO DE BARRO COLEGIO MUNICIPAL', cidade: 'PARQUE DOS MONTEIROS I' },
        { escola: 'JOAO JOSE DE OLIVEIRA PREF COLEGIO MUNICIPAL', cidade: 'CHACARA DO SOLAR III' },
        { escola: 'JOAO SANTANNA PROF COLEGIO MUNICIPAL', cidade: 'JARDIM BANDEIRANTES' },
        { escola: 'JUSCELINO KUBITSCHEK DE OLIVEIRA PRES COLEGIO MUNICIPAL', cidade: 'CIDADE SAO PEDRO GLEBA C' },
        { escola: 'LEDA CAIRA PROFA COLEGIO MUNICIPAL', cidade: 'JARDIM REPRESA FAZENDINHA' },
        { escola: 'LUIZ CARLOS BARBOSA COLEGIO MUNICIPAL', cidade: 'COLINAS DA ANHANGUERA' },
        { escola: 'MAGIA DAS CORES COLEGIO MUNICIPAL', cidade: 'JARDIM ITAPUA' },
        { escola: 'MANOEL JACOB CREMM COLEGIO MUNICIPAL', cidade: 'ALDEIA DA SERRA' },
        { escola: 'MARIA APPARECIDA DE MIRANDA PROFESSORA COLEGIO MUNICIPAL', cidade: 'SITIO DO ROSARIO' },
        { escola: 'MARIA CLARA MACHADO COLEGIO MUNICIPAL', cidade: 'RECANTO SILVESTRE FAZENDINHA' },
        { escola: 'MARIA FERNANDES MACHADO DE OLIVEIRA COLEGIO MUNICIPAL', cidade: 'REFUGIO DOS BANDEIRANTES' },
        { escola: 'MARIA ISABEL FERNADES BARBOSA MARIAZINHA CM', cidade: 'JARDIM ALAGOAS' },
        { escola: 'MARIO COVAS JUNIOR GOV COLEGIO MUNICIPAL', cidade: 'PARQUE SANTANA' },
        { escola: 'MONTANHA ENCANTADA COLEGIO MUNICIPAL', cidade: 'PARQUE SANTANA' },
        { escola: 'MONTEIRO LOBATO COLEGIO MUNICIPAL', cidade: 'JARDIM SAO LUIS' },
        { escola: 'NORBERTO REGINALDO ROCHA COLEGIO MUNICIPAL', cidade: 'RECANTO MARAVILHA III' },
        { escola: 'PAPA JOAO PAULO II COLEGIO MUNICIPAL', cidade: 'CIDADE SAO PEDRO GLEBA B' },
        { escola: 'PAULO FREIRE EDUCADOR COLEGIO MUNICIPAL', cidade: 'VILA POUPANCA' },
        { escola: 'PAULO OCTAVIO BOTELHO DR COLEGIO MUNICIPAL', cidade: 'CIDADE SAO PEDRO GLEBA A' },
        { escola: 'PINGO DE GENTE COLEGIO MUNICIPAL', cidade: 'PARQUE SANTANA' },
        { escola: 'REINALDO ASCENCIO SANTOS FERREIRA VER COLEGIO MUNICIPAL', cidade: 'COLINAS DA ANHANGUERA' },
        { escola: 'RICARDA DOS SANTOS BRANCO PROFA COLEGIO MUNICIPAL', cidade: 'CHACARA DO SOLAR II FAZENDINHA' },
        { escola: 'RUTH DE AZEVEDO SILVA RODRIGUES PROFA COLEGIO MUNICIPAL', cidade: 'JARDIM SAO LUIS' },
        { escola: 'SEBASTIAO FLORENCIO DE ATHAYDE DR COLEGIO MUNICIPAL', cidade: 'ITAIM MIRIM' },
        { escola: 'SETE ANOES COLEGIO MUNICIPAL', cidade: 'COLINAS DA ANHANGUERA' },
        { escola: 'TANCREDO DE ALMEIDA NEVES PRESIDENTE COLEGIO MUNICIPAL', cidade: 'JARDIM ISAURA' },
        { escola: 'TEOTONIO VILELA SENADOR COLEGIO MUNICIPAL', cidade: 'CHACARA DO SOLAR II FAZENDINHA' },
        { escola: 'TOM JOBIM COLEGIO MUNICIPAL', cidade: 'TAMBORE' },
        { escola: 'ULYSSES SILVEIRA GUIMARAES DEPUTADO COLEGIO MUNICIPAL', cidade: 'CIDADE SAO PEDRO GLEBA A' },
        { escola: 'ZILDA ARNS NEUMANN DRA COLEGIO MUNICIPAL', cidade: 'CHACARA DO SOLAR I FAZENDINHA' }
    ]);

    //Estou fazendo isso pois por algum motivo que só Deus sabe, o valor inicial de inputText não está sendo escolaCliente
    useEffect(() => {
        if (escolaCliente) {
          setInputText(escolaCliente);
        }
      }, [escolaCliente]);

    const [inputText, setInputText] = useState('');
    const [selecionado, setSelecionado] = useState(false);
    const [numColumns, setNumColumns] = useState(5);
    const [pesquisar, setPesquisar] = useState(false);

    const filterSuggestions = () => {
        return suggestions.filter(suggestion =>
            suggestion.escola.toLowerCase().includes(inputText.toLowerCase())
        );
    };

    return (
        <View>
            <InputEdicao
                valor={inputText}
                mudou={(text) => {
                    setInputText(text);
                    setSelecionado(false);
                    setNumColumns(5);
                    setPesquisar(true);
                }}
            />

            {pesquisar && (
                <FlatList
                    style={styles.flat}
                    data={selecionado ? [] : filterSuggestions().slice(0, numColumns)}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                 setInputText(item.escola[0] + item.escola.slice(1, 25).toLowerCase());
                                 setSelecionado(true);
                                 setNumColumns(5);
                                 setPesquisar(false);
                            }}
                                style={styles.touchable}
                            >
                                <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "flex-start" }}>
                                    <Ionicons name="school" color={"#F7770D"} size={35} />
                                    <View style={styles.ViewTitulo}>
                                        <Text
                                            style={[styles.texto, { fontWeight: "bold", fontSize: 18 }]}>
                                            {item.escola[0] + item.escola.slice(1, 25).toLowerCase() + '...'}
                                        </Text>
                                        <Text>{item.cidade[0] + item.cidade.slice(1, 100).toLowerCase()}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={(item) => {

                        return (
                            filterSuggestions().length > numColumns  ? (
                                <TouchableOpacity onPress={() => setNumColumns(numColumns + 5)}>
                                    <View style={{ marginBottom: 25 }}>
                                        <Text style={{ color: "#F7770D", alignSelf: "center", marginTop: 20, fontWeight: "bold", fontSize: 15 }}>Exibir mais</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                                :
                                (
                                    <View style={{borderWidth: 1, borderColor: "#F7770D", alignSelf: "center", width: "95%", marginBottom: 30, marginTop: 15}}></View>
                                )
                        )

                    }}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({

    touchable: {
        alignSelf: "center",
        width: "80%",
        marginTop: "3%",
        alignSelf: "center",
    },

    ViewTitulo: {
        flexDirection: "column",
        textAlign: "right",
        marginLeft: "5%",
        textAlign: "justify"
    },

    texto: {
        letterSpacing: 0.2,
    },

})




















// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, Modal, TouchableOpacity, Text } from "react-native";
// import TituloCadastro from '../../Componentes/Titulocadastros'
// import MeuText from '../../Componentes/MeuText'
// import Touchable from "../../Componentes/Touchable";
// import { Calendar } from "react-native-calendars";
// import { Ionicons } from '@expo/vector-icons'
// import { UserData } from "../../services/Contexts/Contexts"
// import Calendario from "../../Componentes/Calendario";
// export default function CadastroVeiculo() {


//     const [usuario, setUsuario] = useState({});
//     const [showModal, setShowModal] = useState(false);
//     const [currentDate, setCurrentDate] = useState('');
//     const [diaAusencia, setDiaAusencia] = useState('');
//     const [corAusencia, setCorAusencia] = useState('#F7770D');
//     const [corAgendado, setCorAgendado] = useState('#C4C4C4B5');

//     //lógica para deixar o dia atual marcado no calendario
//     // let currentDateString2 = new Date().toISOString().slice(0, 10)

//     return (
//         <View style={styles.geral}>
//             <Calendario 
//             showModal={true}
//             dayPress={
//                 day => {
//                     //Caso clique sobre o dia que já esta selecionado, retira a seleção
//                     if (day.dateString === currentDate) {
//                         setCurrentDate('');
//                         setCorAgendado('#C4C4C4B5');
//                         setCorAusencia('#F7770D');
//                         return;
//                     };

//                     setCurrentDate(day.dateString);
//                     setCorAgendado('#F7770D');
//                     setCorAusencia('#C4C4C4B5');
//                 }
//             }
//             />
//         </View>
//     )
// }

// const styles = StyleSheet.create(
//     {
//         geral: {
//             flex: 1,
//         },

//         botao: {
//             flex: 1,
//             marginTop: 265,
//         },

//         main: {
//             flex: 1,
//             backgroundColor: '#EFEFEF'
//         },

//         header: {
//             height: "25%",
//             backgroundColor: "#F7770D",
//             display: "flex",
//             flexDirection: "row"
//         },

//         alinhanomefoto: {
//             position: "relative",
//             width: "60%",
//             height: "100%",
//             display: "flex"
//         },

//         divfoto: {
//             position: "relative",
//             height: "60%",
//             justifyContent: "center"
//         },

//         foto: {
//             position: "relative",
//             width: "40%",
//             height: "70%",
//             marginLeft: "10%",
//             marginTop: "7%",
//             borderRadius: 30
//         },

//         divnome: {
//             height: "40%",
//             display: "flex",
//             position: "relative",
//         },

//         nome: {
//             fontSize: 23,
//             marginLeft: "5%",
//             color: "white"
//         },

//         divicones: {
//             width: "40%",
//             height: "100%",
//             display: "flex",
//             flexDirection: "row"
//         },

//         alinhaicone: {
//             height: "50%",
//             width: "100%",
//             flexDirection: "row",
//             justifyContent: "space-evenly",
//             alignItems: "center"
//         },

//         divbotoes: {
//             width: "90%",
//             height: "15%",
//             alignSelf: "center",
//             marginTop: "5%",
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-evenly"
//         },

//         alinhabotao: {
//             display: "flex",
//             flexDirection: "row",
//             width: "23%",
//             height: "100%"
//         },

//         seta: {
//             position: "relative",
//         },

//         viewCalendario: {
//             backgroundColor: "white",
//             display: "flex",
//             flexDirection: "column",
//             alignContent: "center",
//             borderWidth: 1,
//             borderColor: '#F7770D',
//             margin: 20,
//             borderRadius: 15,
//         },

//         calendario: {
//             borderRadius: 15,
//             textDayFontWeight: '600',
//             arrowColor: '#F04D23',
//             monthTextColor: 'black',
//             selected: true,
//             selectedColor: 'red',
//         },

//         botaoAusencia: {

//             borderRadius: 10,
//             margin: 5,
//             padding: 10,
//             width: "90%",
//             display: 'flex',
//             alignItems: "center",
//         },

//         botaoFalta: {
//             borderRadius: 10,
//             margin: 5,
//             padding: 10,
//             width: "90%",
//             display: 'flex',
//             alignItems: "center",
//         },

//         botoesCalendario: {
//             display: "flex",
//             alignItems: "center",
//             margin: 20,

//         },

//         modalCalendario: {
//             display: "flex",
//             justifyContent: "center",
//             backgroundColor: 'rgba(128, 128, 128, 0.60)',
//             height: "100%"
//         }

//     }
// )

