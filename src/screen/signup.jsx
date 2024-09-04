import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';
import InputField from '../components/InputField'; // Import InputField
import commonStyles from '../styles/commonStyles'; // Import common styles
import config from '../utils/config'; // Import config

const roles = [
  { label: 'Employer Account', value: 'employer' },
  { label: 'Employee Account', value: 'employee' },
];

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = async () => {
    if (!username || !email || !password || !role) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      const response = await axios.post(`${config.apiBaseUrl}/auth/register`, {
        username,
        email,
        password,
        role,
      });

      Alert.alert('Success', response.data);
      // Optionally navigate to another screen or reset form
    } catch (error) {
      Alert.alert('Error', error.response ? error.response.data : 'Registration failed');
      console.error(error);
    }
  };

  return (
    <View style={commonStyles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome name="handshake-o" size={24} color="#9A9A9A" />
      </View>
      <Text style={styles.createAccText}>Create account.</Text>

      <InputField placeholder="Email" icon="user" value={email} onChangeText={setEmail} />
      <InputField placeholder="Password" icon="lock" secureTextEntry value={password} onChangeText={setPassword} />
      <InputField placeholder="Username" icon="user" value={username} onChangeText={setUsername} />

      <View style={styles.dropdownContainer}>
        <FontAwesome name="lock" size={24} color="#9A9A9A" style={commonStyles.inputIcon} />
        <Dropdown
          data={roles}
          labelField="label"
          valueField="value"
          placeholder="Select role"
          searchPlaceholder="Search..."
          style={commonStyles.textInput}
          onChange={(item) => setRole(item.value)}
        />
      </View>

      <View style={commonStyles.buttonContainer}>
        <Text style={commonStyles.buttonText} onPress={handleRegister}>Create</Text>
        <LinearGradient colors={['#F97794', '#623AA2']} style={commonStyles.linearGradient}>
          <AntDesign name="arrowright" size={28} color="white" />
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  createAccText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 5,
    marginVertical: 20,
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#DADADA',
  },
});

export default Signup;