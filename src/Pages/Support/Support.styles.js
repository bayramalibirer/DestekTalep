import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F8FF	', 
      padding: 20,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 5,
      flex:10,
      color:"black"

    },
    Input1: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 10,
      alignItems:"center",
      justifyContent:"center",
      borderWidth:2,
      borderRadius:25,
      flex:1,
      color:"black"
    },
    Input2: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 10,
      alignItems:"center",
      justifyContent:"center",
      borderWidth:2,
      borderRadius:25,
      flex:5,
      color:"black"
    },

    buton: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        borderWidth:5,
        color:"purple",
        with:'%50'
    
    }
    
  
  });