import { TextInput, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import PhoneInput from 'react-native-phone-number-input';

export default function CustomInput({
  type = 'text',
  onChangeText,
  maxLength,
  password = false,
}) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <TextInput
      style={isFocus ? styles.inputFocus : styles.input}
      keyboardType={type}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChangeText={onChangeText}
      maxLength={maxLength}
      secureTextEntry={password}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginBottom: 12,
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderColor: '#B3B3B3',
    borderRadius: 15,
  },
  inputFocus: {
    height: 50,
    marginBottom: 12,
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderColor: '#06716A',
    borderRadius: 15,
    color: '#06716A',
  },
});
