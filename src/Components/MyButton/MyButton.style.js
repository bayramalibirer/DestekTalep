import { StyleSheet } from "react-native";

const base_style=StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
    },
    button:{
        padding:10,
        borderRadius:10,
        width: '45%',
    },
    button_text:{
        color:"white",
        fontSize:16,
        textAlign: 'center', 
        textAlignVertical: 'center', 
    }

})
export default {
    blue:StyleSheet.create({
    container:{
        ...base_style.container
    },
    button:{
        ...base_style.button,
        backgroundColor:"#000080",
    },
    button_text:{
        ...base_style.button_text
    }
}), red:StyleSheet.create({
    container:{
        ...base_style.container
    },
    button:{
        ...base_style.button,
        backgroundColor:"red",
    },
    button_text:{
        ...base_style.button_text
    }
})

}
