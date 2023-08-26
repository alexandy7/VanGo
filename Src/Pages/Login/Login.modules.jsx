import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    geral: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', // Adicione esta linha para centralizar verticalmente
    },
    
    container: {
      width: '80%',
      paddingTop: "30%", // Adicione este espaçamento superior
    },
    
    imagem: {
      alignSelf: 'center',
      width: '50%',
      height: 120,
    },
    titulo: {
      textAlign: 'center',
      fontSize: 25,
      marginTop: 20,
    },
    msg: {
      textAlign: 'center',
      fontSize: 13,
      color: 'rgb(145, 138, 138)',
      marginTop: 10,
    },
    info: {
      marginTop: 20,
    },
    espacamento: {
      marginBottom: 12,
    },
    esqueceSenha: {
      color: '#F7770D',
      alignSelf: 'center',
      marginTop: 30,
    },
    novaConta: {
      color: '#F7770D',
    },
    botaoNovaConta: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 10,
    },
    BotaoComNovaConta: {
      marginTop: 20,
    },
  });
  
export default styles;