import React from 'react';
import { Button, View, Text } from 'react-native';
import database from '@react-native-firebase/database';

export default () => {
    //Veri tabanında değişiklik olduğunda veri günceller okur
    const listenDb = () => {
        const reference = database()
            .ref('/Talep')
            .on("value", snapshot => {
                const res = snapshot.val();
                console.log(res)
            });
    }
    // bir verinin sadece yazılan kısmını değiştirir
    const UpdateDb = () => {
        const reference = database()
            .ref('/users/123')
            .update({
                age: 32,
            })
            .then(() => console.log('Data updated.'));
    }// verinin üzerine yazar önceki veriler silinir
    const setDB = () => {
        const reference = database()
            .ref('/users/123')
            .set({
                name: 'Ada Lovelace',
                age: 31,
            })
            .then(() => console.log('Data set.'));
    }//Yeni bir benzersiz anahtar ile veri ekler
    const PushDB = () => {
        const reference = database().ref('/users').push();

        console.log('Auto generated key: ', newReference.key);

        newReference
            .set({
                age: 32,
            })
            .then(() => console.log('Data updated.'));
    }//1 kerelik verileri çeker anlık halini getirir
    const CheckDb = () => {
        const reference = database()
            .ref('/Talep/1')
            .once('value')
            .then(snapshot => {
                const res = snapshot.val();
                console.log(res);
            });
    };
    const removeDb = async () => {
        await database().ref('/users/123').remove();
    };
    return (
        <View>
            <Text style={{ fontSize: 70 }}>Hello</Text>
            <Button title='CheckDb' onPress={CheckDb} />
            <Button title='ListenDb' onPress={listenDb} />
        </View>
    )
}

