import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';

const ProfileScreen = ({ route, navigation }) => {
  const [name, setName] = useState('gowtham');
  const [accountName, setAccountName] = useState('sdsd');
  const [profileImage, setProfileImage] = useState(require('../images/profile.png')); // Default profile image

  const showToastMessage = () => {
    ToastAndroid.show('Edited Successfully!', ToastAndroid.SHORT);
  };

  const handleLogout = async () => {
  try {
    // Remove the token from storage
    await AsyncStorage.removeItem('userToken');
    // Navigate to login screen after logout
    navigation.navigate('Login');
  } catch (error) {
    //Alert.alert('Error', 'Failed to log out');
    //console.error(error);
  }
};

  const handleChangeProfilePhoto = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setProfileImage(source); // Update the profile image
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            showToastMessage();
            navigation.goBack();
          }}
        >
          <Ionic name="checkmark" style={[styles.icon, styles.checkmarkIcon]} />
        </TouchableOpacity>
      </View>
      <View style={styles.profilePhotoContainer}>
        <TouchableOpacity onPress={handleChangeProfilePhoto}>
          <Image
            source={profileImage}
            style={styles.profileImage}
          />
          <Text style={styles.changePhotoText}>
            Change profile photo
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        {renderTextInput('Name', name, setName)}
        {renderTextInput('Username', accountName, setAccountName)}
        {renderTextInput('Email', '', () => {})}
        {renderTextInput('Mobile Number', '', () => {})}
      </View>
    </View>
  );
};

const renderTextInput = (label, defaultValue, setValue) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      placeholder={label.toLowerCase()}
      defaultValue={defaultValue}
      onChangeText={setValue}
      style={styles.textInput}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  icon: {
    fontSize: 35,
  },
  checkmarkIcon: {
    color: '#3493D9',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profilePhotoContainer: {
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    marginLeft: 20,
    borderRadius: 100,
  },
  changePhotoText: {
    marginTop: 30,
    color: '#3493D9',
  },
  formContainer: {
    padding: 10,
  },
  inputContainer: {
    paddingVertical: 10,
  },
  label: {
    opacity: 0.5,
  },
  textInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#CDCDCD',
  },
});

export default ProfileScreen;
