
import React, { useState,useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './Navigation/Tabs'
import FlashMessage from "react-native-flash-message";
import Login from "../src/Pages/Login/Login.js"
import Register from "../src/Pages/Register/Register.js"
import Profile from "../src/Pages/Profile/Profile.js"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import auth from '@react-native-firebase/auth'
import { Provider } from 'react-redux';
import { store } from './Redux/store.js';
import set_user from './Redux/Slice.js'

const Stack =createNativeStackNavigator();

export default function Router() {
  
  const Log =()=>{
    return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />

    </Stack.Navigator>)    
  }
  const LoginStack = () => {
    const [userSession,setUserSession]=useState();
  useEffect(()=>{
    auth().onAuthStateChanged(user=>{
      setUserSession(!!user);
    })
  },[]);
    return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {!userSession?(
      <Stack.Screen name="Log" component={Log} />):(
      <Stack.Screen name="Profile" component={Profile} />
      )}
    </Stack.Navigator>)
  };
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tabs LoginStack={LoginStack}></Tabs>
      <FlashMessage position="top" />
    </NavigationContainer>
    </Provider>
  );

 }
