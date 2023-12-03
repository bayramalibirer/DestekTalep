import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./List.styles"
import Search from '../../Components/Search'
import database from '@react-native-firebase/database'
import SupCard from '../../Components/SupCard/SupCard'
import parseContentData from '../../utils/parseContentData'
import auth from '@react-native-firebase/auth'
import SuppModal from '../../Components/modal/SuppModal'
import { showMessage } from 'react-native-flash-message';



export default function List() {
  const [list, setlist] = useState([]);
  const [searchlist, setsearchlist] = useState([]);
  const [inputModalVisible, setinputModalVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItemRequest, setSelectedItemRequest] = useState(null);
  const [selectedItemAnswer, setSelectedItemAnswer] = useState(null);

  useEffect(() => {
    database()
      .ref('Support/')
      .on('value', snapshot => {
        const data = snapshot.val();
        console.log(data)
        if (data != null) {
          const parsed_data = parseContentData(data);
          setlist(parsed_data)
          setsearchlist(parsed_data)
        }

      });

  }, []);

  function handleclose() {
    setinputModalVisible(!inputModalVisible)

  }
  async function handleSendReq(text, dataid) {
    const d_id = '/Support/' + dataid;
    if (text) {
      contentobj = {
        by: userr.email,
        answer: text,
        answer_date: (new Date()).toISOString(),}
      try {
        await database()
        .ref(d_id)
        .update(contentobj)
        .then(() => handleclose
        ,showMessage({
          message: "Yanıt verildi",
          type: 'success'

        }));
      }catch(error) {
        console.log
      }
    }

  }
  async function handledelReq(dataid) {
    const d_id = '/Support/' + dataid;
    try{
      await database().ref(d_id).remove();
      handleclose
      showMessage({
        message:'Talep Silindi',
        type:'danger'
      })
    }catch(error){
      console.log(error)
    }

  }



  const handleSearch = query => {
    const filteredlist = list.filter(a => {
      const searchedText = query.toLowerCase();
      const currentlist = a.subject.toLowerCase();

      return currentlist.indexOf(searchedText) > -1;

    })
    setsearchlist(filteredlist)

  };
  const handleItemPress = (itemId, request,answer) => {
    setSelectedItemId(itemId);
    setSelectedItemRequest(request)
    setSelectedItemAnswer(answer)
    setinputModalVisible(true);
  };


  const userr = auth().currentUser
  const req = list[selectedItemId]
  const r_item = ({ item }) => <SupCard sup={item} onPress={handleItemPress} />

  return (
    <View style={styles.container}>
      <Search onSearch={handleSearch}></Search>
      <View style={styles.container2}>
        <FlatList
          data={searchlist}
          renderItem={r_item}
        />

        <SuppModal
          user={userr}
          data={selectedItemAnswer}
          datareq={selectedItemRequest}
          dataid={selectedItemId}
          visible={inputModalVisible}
          onClose={handleclose}
          updates={handleSendReq}
          deletes={handledelReq} />
      </View>
    </View>

  )
}