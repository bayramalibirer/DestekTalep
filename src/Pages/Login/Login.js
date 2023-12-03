import { View, Text, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from "./Login.styles"
import MyButton from "../../Components/MyButton/MyButton"
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';
import { showMessage } from 'react-native-flash-message';
import authMassageParser from '../../utils/authMassageParser';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import set_user from '../../Redux/Slice'
import MyError from '../../Components/Error/MyError';

const validationSchema = yup.object().shape({
  email: yup.string().email('Geçerli bir e-posta girin').required('E-posta alanı zorunludur'),
  password: yup.string().required('Şifre alanı zorunludur'),
});

const initialFormValues = [
  email = "",
  password = "",
]


export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false)
  const dispatch=useDispatch();


  async function handleLogin(formvalues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formvalues.email,
        formvalues.password,
      );
      showMessage({
        message:"giriş başarılı",
        type:'success'
      })
      //const user=auth().currentUser.email
      //if(user){dispatch(set_user(type='a', payload=user))}
      //ApplymiddleWare(thunk) dan dolayı sonra etkinleştireceğim
      setLoading(false); 
    } catch (error) {
      console.log(error);
      showMessage({
        message:authMassageParser(error),
        type:'success'
      })
      setLoading(false);
    }
  
  }

  return (
    <View style={styles.container2}>
      <Text style={styles.title}>Login</Text>
      <Formik initialValues={{initialFormValues}} onSubmit={handleLogin} validationSchema={validationSchema} >
        {({ values, handleChange, handleSubmit,errors }) => (
          <>
            <TextInput
              value={values.email}
              onChangeText={handleChange('email')}
              style={styles.Inputs}
              placeholder='e-mail'
             />
              {errors.email && <MyError message={errors.email}/>}
            
            <TextInput
              secureTextEntry={true}
              value={values.password}
              onChangeText={handleChange('password')}
              style={styles.Inputs}
              placeholder='şifre'
              />
              {errors.password && <MyError message={errors.password}/>}
            <MyButton title={"Giriş Yap"} onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <MyButton thema='red' title={"Kayıt ol"} onPress={() => navigation.navigate('Register', { screen: 'Register' })} />
    </View>
  )

}