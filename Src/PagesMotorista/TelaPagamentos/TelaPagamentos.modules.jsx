import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

main: {
    flex: 1,
    backgroundColor: '#EFEFEF',
},

scroll: {
    backgroundColor: "white", 
},

header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 50,
},

alinhabotoes: {
    width: "90%",
    height: 50,
    alignSelf: "center",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20
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
    fontSize: 17
},

titulo: {
    fontSize: 26,
    position: "relative",
    alignSelf: "center",
},

})

export default styles;