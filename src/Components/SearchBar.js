import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange,onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
        <Feather name='search' style={styles.IconStyle}/>
      <TextInput 
      style={styles.inputStyle}
      placeholder='search'
      autoCapitalize='none'
      autoCorrect={false}
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        marginBottom: 10,
    },
    inputStyle:{
        flex: 1,
        fontSize: 18
    },
    IconStyle:{
        fontsize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});

export default SearchBar;
