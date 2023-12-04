import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from "./MyButton.style"; 

export default function MyButton({ title, onPress ,thema='blue'}) {
  return (
    <View style={styles[thema].container}>
      <TouchableOpacity style={styles[thema].button} onPress={onPress}>
        <Text style={styles[thema].button_text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
