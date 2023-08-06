import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TituloCadastro from "../../Componentes/Common/Titulocadastros";
import MeuText from "../../Componentes/Common/MeuText";
import Touchable from '../../Componentes/Common/Touchable'

export default function CadastroEscola(){
    const navigation = useNavigation();

    const finalizarCadastro = () => {
        navigation.navigate('PerfilCliente'); // navega para o cliente inserir o código de sua turma

    }

return (
  <View style={styles.geral}>
    <TituloCadastro textoh1={'Cadastre sua escola'} textoh2={'Insira as informações abaixo:'} />
    <View style={styles.inputes}>
      <MeuText nomePlaceholder={'Nome completo da escola'} imagem={require('../../../assets/chapeuFormatura.png')} />
      <MeuText nomePlaceholder={'Endereço'} imagem={require('../../../assets/home.png')} />
    </View>
    <View style={styles.concluir}>
      <Touchable texto={'Concluir'} evento={finalizarCadastro} />
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputes: {
    marginTop: 20,
  },
  concluir: {
    marginTop: '50%',
  },
});
