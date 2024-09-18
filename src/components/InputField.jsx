import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import commonStyles from '../styles/commonStyles'; // Import common styles

const InputField = ({ placeholder, icon, secureTextEntry, ...props }) => (
  <View style={commonStyles.inputContainer}>
    <FontAwesome name={icon} size={24} color="#9A9A9A" style={commonStyles.inputIcon} />
    <TextInput
      style={commonStyles.textInput}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      {...props}
    />
  </View>
);

export default InputField;