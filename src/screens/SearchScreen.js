import React,{useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../Components/ResultList';

const SearchScreen = () => {
  const [term,setTerm]=useState('');
  const [searchApi, results, errorMessage]= useResults();
  
  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View style={{flex: 1}}>
      <SearchBar 
      term={term} 
      onTermChange={setTerm}
      onTermSubmit={() => searchApi(term)}
      />
      { errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
     <ResultList 
     results={filterResultsByPrice('$')} 
     title="Cost Effects"
     
     />
     <ResultList 
     results={filterResultsByPrice('$$')} 
     title="Bit Pricier"
   
     />
     <ResultList 
     results={filterResultsByPrice('$$$')} 
     title="Big Spender"
    
     />
     </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
