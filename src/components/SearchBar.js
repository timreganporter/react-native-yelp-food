import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#f0eeee',
    borderRadius: 5,
    flexDirection: 'row',
    height: 50,
    marginBottom: 10,
    marginHorizontal: 15,
    marginTop: 10
  },
  iconStyle: {
    alignSelf: 'center',
    fontSize: 35,
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;