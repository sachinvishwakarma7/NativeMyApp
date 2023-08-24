import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {appColor} from '../assets/colors/appColor';

type InputProps = {
  onChangeText?: () => {};
  value?: string;
  placeholder?: string;
};

const CommonInputText = ({onChangeText, value, placeholder}: InputProps) => {
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={appColor.gray}
      />
    </>
  );
};

export default CommonInputText;

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: appColor.lightGray,
    padding: 10,
    borderRadius: 6,
    marginVertical: 6,
  },
});
