import React from "react";
import { Text,TextInput,View } from "react-native";
import styles from "./Input.styles"

const Input=({placeholer,value,onType,isSecure,style})=>{
    return(
        <View>
            <TextInput
            style={style}
            secureTextEntry={isSecure}
            placeholder={placeholer}
            onChange={onType}
            value={value}
            />            
        </View>
    )
}
export default Input;