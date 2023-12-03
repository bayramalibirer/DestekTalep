import React from "react";
import { Text,View } from "react-native";
import styles from "./MyError.styles"

const MyError =({message})=>{
    return(
        <Text style={styles.text}>{message}</Text>
    )
}
export default MyError