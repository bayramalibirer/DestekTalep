import { View, Text, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from "./Register.styles"
import MyButton from "../../Components/MyButton/MyButton"
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';
import { showMessage } from 'react-native-flash-message';
import authMassageParser from '../../utils/authMassageParser';
import MyError from '../../Components/Error/MyError';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email('Geçerli bir e-posta girin').required('E-posta alanı zorunludur'),
  password: yup.string().required('Şifre alanı zorunludur'),
  repassword:yup.string().required('Şifre alanı zorunludur')
});
const initialFormValues = [
  email = "",
  password = "",
  repassword = "",
]
export default function Register({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [initializing, setInitializing] = useState(true);// redux da user kısmı kullanılacak sonra düzelt burayı  
  const [user, setUser] = useState();

  async function handleRegister(formvalues) {
    console.log(formvalues)
    if (formvalues.password == formvalues.repassword) {
      try {
        setLoading(true);
        await auth().createUserWithEmailAndPassword(
          formvalues.email,
          formvalues.password,
        );
        showMessage({
          message: "Kayıt Başarılı ve Giriş yapıldı",
          type: "success"
        })
        navigation.navigate('Profile', { screen: 'Profile' })
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    } else {
      showMessage({
        message: "Şifreler uyuşmuyor",
        type: "danger"
      })
    }

  }
  return (
    <View style={styles.container2}>
      <Text style={styles.title}>Register</Text>
      <Formik initialValues={{ initialFormValues }} onSubmit={handleRegister} validationSchema={validationSchema} >
        {({ values, handleChange, handleSubmit,errors }) => (
          <>
            <TextInput
              values={values.email}
              onChangeText={handleChange('email')}
              style={styles.Inputs}
              placeholder='e-mail'/>
              {errors.email && <MyError message={errors.email}/>}
            <TextInput
              secureTextEntry={true}
              values={values.password}
              onChangeText={handleChange('password')}
              style={styles.Inputs}
              placeholder='şifre'/>
              {errors.password && <MyError message={errors.password}/>}
            <TextInput
              secureTextEntry={true}
              values={values.repassword}
              onChangeText={handleChange('repassword')}
              style={styles.Inputs}
              placeholder='şifre tekrarı'/>
              {errors.repassword && <MyError message={errors.repassword}/>}
            <MyButton title={"Kayıt Ol"} onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <MyButton thema='red' title={"geri"} onPress={() => navigation.navigate('Login', { screen: 'Login' })} />
    </View>
  )
} 