import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native'; // Eklemeyi unuttuğunuz Text'i ekledim
import styles from './Search.style';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    onSearch(query); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}
          placeholderTextColor={'black'}
          placeholder="Ara.."
          onChangeText={handleSearch}
          value={searchQuery}
        />
      </View>
    </View>
  );
};

export default Search;
