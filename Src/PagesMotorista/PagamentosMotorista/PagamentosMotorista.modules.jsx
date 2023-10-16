import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

main: {
    flex: 1,
    backgroundColor: 'white',
},

scroll: {
    flex: 1,
    backgroundColor: "white", 
},

header: {
    display: "flex",
    flexDirection: "row",
    height: 110,
    width: "100%",
    position: "relative",
    justifyContent: "center",
    marginBottom: 20,
    flexWrap: "wrap",
},

divmeio: {
    height: 60,
    justifyContent: "flex-end",
    alignSelf: "center"
},

divbarra: {
    height: 50,
    width: "100%",   
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
},

alinhabotoes: {
    width: "90%",
    height: 50,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
},

botao: {
    height: "100%",
    width: "28%",
    backgroundColor: "#e0e0e0",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
},

textobotao: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat_500Medium"
},

titulo: {
    fontSize: 26,
    position: "relative",
    alignSelf: "center",
    fontFamily: "Montserrat_500Medium"
},

// safe:{
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//     marginHorizontal: 16,
// }

})

export default styles;