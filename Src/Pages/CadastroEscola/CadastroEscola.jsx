import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TituloCadastro from "../../Componentes/Titulocadastros";
import MeuText from "../../Componentes/MeuText";
import Touchable from '../../Componentes/Touchable'
import styles from "./CadastroEscola.modules";
import ListEscolas from "../../Componentes/ListEscolas";
import { FlatList } from "react-native";


const CadastroEscola = ({ route }) => {

    const {email_cliente, endereco_cliente, escolaCliente, nome_cliente, responsavel_cliente, senha_cliente} = route.params;

  const navigation = useNavigation();
  
  const [escola, setEscola] = useState('')

  return (

    <FlatList
      style={styles.scroll}
      data={' '}
      renderItem={() => {
        return (
          <View style={styles.geral}>
            <View style={{ marginTop: "20%" }}>
              <TituloCadastro textoh1={'Cadastre sua escola'} textoh2={'Insira as informações abaixo:'} />
            </View>

            <View style={styles.inputes}>
              <ListEscolas
                escolaCliente={escola}
                valorEscola={(text) => setEscola(text)}
              />
            </View>

            <View style={styles.concluir}>
              <Touchable texto={'Concluir'} evento={() => {
                console.log(escola + 'a')
                if (escola === '') {
                  alert("Por favor, preencha sua escola!");
                }
                else {
                  navigation.navigate("AdicionarFoto", {
                    email_cliente: email_cliente,
                    senha_cliente: senha_cliente,
                    nome_cliente: nome_cliente,
                    cpf_responsavel: cpf_responsavel,
                    endereco_cliente: endereco_cliente,
                    responsavel_cliente: responsavel_cliente,
                    escolaCliente: escola
                  })
                }
              }} />
            </View>
          </View>
        )
      }}
    />

  );
}

export default CadastroEscola;
