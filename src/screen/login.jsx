import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import InputField from '../components/InputField'; // Import InputField
import commonStyles from '../styles/commonStyles'; // Import common styles
import config from '../utils/config'; // Import config

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email and password are required');
      return;
    }

    try {
      const response = await axios.post(`${config.apiBaseUrl}/auth/login`, {
        email,
        password,
      });

       // Store the token in AsyncStorage
       // eslint-disable-next-line no-undef
       //await AsyncStorage.setItem('userToken', response.data.token);

       // Navigate to MainScreen
       navigation.navigate('MainScreen');

      // Handle successful login
      Alert.alert('Success', response.data.message);
      // Store the token, navigate to another screen, etc.
      console.log('Token:', response.data.token);
    } catch (error) {
      Alert.alert('Error', error.response ? error.response.data : 'Login failed');
      console.error(error);
    }
  };

  return (
    <View style={commonStyles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome name="handshake-o" size={24} color="#9A9A9A" />
      </View>
      <Text style={styles.helloText}>Hello</Text>
      <Text style={styles.signInText}>Sign in to your account.</Text>

      <InputField placeholder="Email" icon="user" value={email} onChangeText={setEmail} />
      <InputField placeholder="Password" icon="lock" secureTextEntry value={password} onChangeText={setPassword} />

      <Text style={styles.forgotPasswordText}>Forgot your password?</Text>

      <View style={commonStyles.buttonContainer}>
        <Text style={commonStyles.buttonText} onPress={handleLogin}>Sign in</Text>
        <LinearGradient colors={['#F97794', '#623AA2']} style={commonStyles.linearGradient}>
          <AntDesign name="arrowright" size={28} color="white" />
        </LinearGradient>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.footerText}>
          Don't have an account? <Text style={{ textDecorationLine: 'underline' }}>Create</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 20,
  },
  helloText: {
    textAlign: 'center',
    fontSize: 70,
    fontWeight: '500',
    color: 'black',
  },
  signInText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: '#BEBEBE',
    textAlign: 'right',
    width: '90%',
    fontSize: 15,
  },
  footerText: {
    color: '#262626',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 100,
  },
});

export default Login;