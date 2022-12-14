/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useCard} from '../../methods/hook/useCard';
const InputCreditCard = ({
  title,
  placeholder,
  type,
  value,
  inputType,
  error,
  onChangeText,
  onFocus,
}) => {
  const {number, expery, code, onChange, valuePlaceholder, setnumber} =
    useCard();

  let color = 'black';
  if (error !== undefined) {
    color = 'red';
  }

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={{fontSize: 14, color: `${color}`, fontWeight: 'bold'}}>
          {title}
        </Text>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.numberCard}
          placeholder={placeholder}
          keyboardType={type}
          onChangeText={onChangeText}
          onFocus={onFocus}
          maxLength={16}
        />
        <View style={styles.line} />
      </View>
    </View>
  );
};

export default InputCreditCard;

const styles = StyleSheet.create({
  container: {},
  text: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: {fontWeight: 'bold'},
  input: {
    justifyContent: 'space-evenly',
    height: 80,
  },
  line: {
    borderTopWidth: 1,
    borderColor: 'black',
  },
  numberCard: {},
});
