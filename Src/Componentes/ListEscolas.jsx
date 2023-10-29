import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import InputEdicao from '../Componentes/InputEdicao';

export default function ListEscolas({ escolaCliente, valorEscola }) {
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
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    setInputText(item.escola[0] + item.escola.slice(1, 33).toLowerCase());
                                    setSelecionado(true);
                                    setNumColumns(5);
                                    setPesquisar(false);
                                    valorEscola(item.escola[0] + item.escola.slice(1, 25).toLowerCase());

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
                            filterSuggestions().length > numColumns ? (
                                <TouchableOpacity onPress={() => setNumColumns(numColumns + 5)}>
                                    <View style={{ marginBottom: 25 }}>
                                        <Text style={{ color: "#F7770D", alignSelf: "center", marginTop: 20, fontWeight: "bold", fontSize: 15 }}>Exibir mais</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                                :
                                (
                                    <View style={{ borderWidth: 1, borderColor: "#F7770D", alignSelf: "center", width: "95%", marginBottom: 30, marginTop: 15 }}></View>
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