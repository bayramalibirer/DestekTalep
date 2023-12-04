import { View, Text} from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import styles from './Profile.styles'
import MyButton from '../../Components/MyButton/MyButton'



export default function Profile(navigation) {
  user=auth().currentUser
 // const dispatch=useDispatch
 // const myState = useSelector((state)=>state.user.value);
  const signOut = async () => {
    try{await auth()
        .signOut()
       // dispatch(set_user())
      } catch(error){
        console.log(error)

      }
    }
  return(
    <View style={styles.container2}>
      <Text style={styles.title}>Profile  </Text>
      <Text style={styles.info}>Kullanıcı adı :{user.email.split('@')[0]}  </Text>
      <Text style={styles.info}>E-posta :  {user.email}  </Text>
      <Text style={styles.info}>UID : {user.uid} </Text>
      <MyButton thema='red' title='çıkış yap' onPress={signOut}></MyButton>
    </View>)
  }