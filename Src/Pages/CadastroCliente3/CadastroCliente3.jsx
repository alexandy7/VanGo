import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TituloCadastro from "../../Componentes/Titulocadastros";
import MeuText from "../../Componentes/MeuText";
import Touchable from '../../Componentes/Touchable'
import styles from "./CadastroCliente3.modules";
import ListEscolas from "../../Componentes/ListEscolas";
import { FlatList } from "react-native";
import showToast from "../../services/Toast/Toast";
import { TextInput } from "react-native";


const CadastroCliente3 = ({ route }) => {

  const { bairro1, nomeSobrenome1, bairro2, nomeSobrenome2 } = route.params;

  const navigation = useNavigation();

  const [nomeCrianca, setNomeCrianca] = useState('')
  const [sobrenomeCrianca, setSobrenomeCrianca] = useState('')
  const [escola, setEscola] = useState('')

  return (

    <FlatList
      style={styles.scroll}
      data={' '}
      renderItem={() => {
        return (
          <View style={styles.geral}>
            <Text style={styles.numeropasso}>03/04</Text>
            <View style={{ marginTop: "20%" }}>
              <TituloCadastro textoh1={'Cadastre a criança'} textoh2={'Insira as informações abaixo:'} />
            </View>

            <View style={[styles.divinputs, { height: 70 }]}>
              <Text style={styles.tituloinput}>Nome</Text>
              <TextInput
                style={[styles.inputs, { width: "40%" }]}
                value={nomeCrianca}
                onChangeText={(text) => setNomeCrianca(text)}
              />

              <Text style={styles.tituloinput}>Sobrenome</Text>
              <TextInput
                style={[styles.inputs, { width: "55%" }]}
                value={sobrenomeCrianca}
                onChangeText={(text) => setSobrenomeCrianca(text)}
              />
            </View>

            <View style={styles.inputes}>
              <Text style={[styles.tituloinput, {marginLeft: "6%"}]}>Escola</Text>
              <ListEscolas
                escolaCliente={escola}
                valorEscola={(text) => setEscola(text)}
              />
            </View>

            <View style={styles.concluir}>
              <Touchable texto={'Prosseguir'} evento={() => {

                // if (escola === '') {
                //   showToast("error", "Escola", "Selecione sua escola!", 2000);
                //   return;
                // }

                
                  navigation.navigate("CadastroCliente4", {
                    bairro1: bairro1,
                    nomeSobrenome1: nomeSobrenome1,
                    bairro2: bairro2,
                    nomeSobrenome2: nomeSobrenome2,
                    nomeCrianca: nomeCrianca + ' ' + sobrenomeCrianca,
                    escolaCliente: escola
                  })
                
              }} />
            </View>
          </View>
        )
      }}
    />

  );
}

export default CadastroCliente3;
