// InputField.js
import React from 'react';
import { TextInput } from 'react-native';

const InputField = ({ label, value, onChangeText, secureTextEntry }) => {
  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingHorizontal: 10 }}
      placeholder={label}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default InputField;
