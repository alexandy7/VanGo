import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    scroll: {
      flex: 1,
    },
    container: {
      flexGrow: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 20,
    },
    vieu: {
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    botaoCM: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 20,
    },
    clienteMotorista1: {
      width: 110,
      height: 50,
      borderRadius: 10,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    clienteMotorista: {
      width: 110,
      height: 50,
      borderRadius: 10,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 50,
    },
    texto: {
      color: 'white',
      textAlign: 'center',
      fontFamily: "Montserrat_500Medium"
    },
  
  });
  
  export default styles;