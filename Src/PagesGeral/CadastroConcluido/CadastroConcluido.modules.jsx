import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

main: {
    flex: 1,
    backgroundColor: 'white',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
},

divimagem: {
    height: 150,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
},

imagem: {
    height: 150,
    width: 200
},

divtexto: {
    height: 100,
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
},

texto: {
    fontSize: 27,
    fontFamily: "Montserrat_500Medium",
    textAlign: "center"
},


botaologin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: "70%",
    alignSelf: "center",
    backgroundColor: "#F7770D",
    borderRadius: 15,
    marginTop: 50,
    display: "flex",
    flexDirection: "row"
},

textologin: {
    fontSize: 23,
    color: "white",
    fontFamily: "Montserrat_500Medium"
},

icon: {
    top: 0
},

alinhainicio: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end"
},

alinhameio: {
    width: "70%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
},

alinhafim: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start"
},

})

export default styles;