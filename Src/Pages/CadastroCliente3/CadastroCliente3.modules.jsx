import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  geral: {
    flex: 1,
  },

  divinputs: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "90%",
    alignSelf: "center",
    marginTop: "10%"
},

  tituloinput: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 17,
    color: "#F7770D",
},

inputs: {
  borderRadius: 10,
  paddingLeft: 5,
  paddingRight: 5,
  fontSize: 17,
  height: 40,
  borderWidth: 1, 
  borderColor: "#F7770D",
  fontFamily: "Montserrat_400Regular",
  marginRight: "5%"
},

  inputes: {
    marginTop: "20%",
    flex: 1,
    height: "100%"
  },

  numeropasso: {
    fontFamily: "Montserrat_400Regular",
    color: "#F7770D",
    marginTop: 30,
    position: "absolute",
    right: 15
  },

});

export default styles;