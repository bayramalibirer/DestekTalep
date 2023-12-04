import { Text, View, TouchableOpacity} from "react-native";
import React from "react";
import styles from './SupCard.styles';


const SupCard =({sup,onPress}) =>{
    
    return(
        <TouchableOpacity  onPress={() => onPress(sup.id,sup.request,sup.answer)}>
        <View style={!sup.by?(styles.container1):(styles.container2)}>
            <Text style={styles.inner_title}>{sup.subject}</Text>
            <Text>{sup.request}</Text>
            <Text>{sup.date}</Text>
            {sup.answer ?<Text>{sup.answer}</Text>:<Text style={styles.isAnswer}>Yanıtlanmadı</Text>}
            {sup.by ?<Text>{sup.by}</Text>:""}
            {sup.answer_date ?<Text>{sup.answer_date}</Text>:""}
        </View>
        </TouchableOpacity>
    )
}
export default SupCard;