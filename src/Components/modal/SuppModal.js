import { View, TextInput, Text } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../MyButton/MyButton';
import Modal from 'react-native-modal';
import styles from './SuppModal.styles'

const SupModal = ({ user, datareq,data, dataid, visible, onClose, updates, deletes }) => {
    const [text, setText] = useState();

    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackButtonPress={onClose}
            onBackdropPress={onClose}>
            <View style={styles.container}>
                <Text style={styles.title}> Talep : {datareq}</Text>
                {data?(<Text style={styles.title}> Yanıt : {data}</Text>):''}
                <TextInput
                    multiline
                    style={styles.placeholder}
                    placeholderTextColor='black'
                    placeholder='Yanıt... '
                    onChangeText={setText} />
                {user ? (<MyButton thema='red'title={'sil'} onPress={()=>deletes(dataid)} />) : ''}
                {user ? (<MyButton title={'gönder'} onPress={()=>updates(text,dataid)} />) : ''}
            </View>
        </Modal>
    )
}
export default SupModal
