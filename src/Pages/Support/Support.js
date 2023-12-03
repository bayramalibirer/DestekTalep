import { View, Text, Button } from 'react-native'
import styles from './Support.styles'
import { TextInput } from 'react-native-gesture-handler'
import MyButton from '../../Components/MyButton/MyButton'
import database from '@react-native-firebase/database'
import { showMessage } from 'react-native-flash-message';
import React, { useState } from 'react'




export default function Talep() {
  const [text, setText] = useState("");
  const [subj, setSubj] = useState("");

  function sendContent(content,subject) {
    if (content != "") {
      const contentobj = {
        request: content,
        date : (new Date()).toISOString(),
        subject: subject,
        by:"",
        answer:"",
        answer_date:"",
        }
        database().ref("/Support").push(contentobj)
        showMessage({
          message: "Talep alındı",
          type:"success"
        })
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Talep Oluştur</Text>
      <TextInput style={styles.Input1}
       onChangeText={setSubj}
       placeholder='Konu'
       placeholderTextColor={"black"}

      />
      <TextInput style={styles.Input2}
        onChangeText={setText}
        placeholder='Talebiniz'
        placeholderTextColor={"black"}
        multiline
      />
      <MyButton title='Gönder' onPress={()=>sendContent(text,subj)} />
    </View>
  )
}