import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Login() {
    //Kullanıcıc stateleri
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const signOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    const signin = () => {
        auth()
            .signInWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    const signUp = () => {
        auth()
            .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    };

    // Kullanıcı durumunu güncelleme kısmı
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }


    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <View>
                <Text style={{ fontSize: 50 }}>Login</Text>
                <Button title='Signin' onPress={signin} />
                <Button title='SignOut' onPress={signOut} />
                <Button title='SignUp' onPress={signUp} />
            </View>
        );
    }
    return (
        <View>
            <Text>Welcome {user.email}</Text>
            <Button title='Signin' onPress={signin} />
            <Button title='SignOut' onPress={signOut} />
            <Button title='SignUp' onPress={signUp} />
        </View>
    );
}