import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import config from '../../utils/config';
import DatePicker from '../../utils/DatePicker';

export default function PostJob({setJobs, setIsPosting}) {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());

  const roles = [
    { label: 'Employer Account', value: 'employer' },
    { label: 'Employee Account', value: 'employee' },
  ];
  
  const [form, setForm] = useState({
    companyName: '',
    role: '',
    jobDescription: '',
    shiftTime: date,
    skills: '',
    salary: '',
    uniform: '',
    venue: '',
    area: '',
    accessInstructions: '',
    address: '',

  });

  const postJob =  () => {
    const signUpUrl = `${config.apiBaseUrl}/auth/register`;
    console.log(form);
    
    if (
      !form.companyName ||
      !form.role ||
      !form.jobDescription ||
      !form.shiftTime ||
      !form.venue ||
      !form.address
    ) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }
    setJobs(form);
    // try {
    //   // const response = await axios.post(signUpUrl, form);
    //   // Alert.alert('Success', 'Sign up successful');
    //   // navigation.navigate('Login');
    //  // setJobs(form);
    // //  setIsPosting(false);
    //  // setIsPosting(false);
    //  // Update the jobs state in parent component
    // // setIsPosting(false); // Assuming this indicates that posting is done
 
    //  //navigation.navigate('Jobs', { jobDetails: form });

    // } catch (error) {
    //   Alert.alert('Error', error?.response?.data || 'Sign up failed');
    // }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.form}>
            <View style={styles.row}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Company Name<Text>*</Text></Text>
                <TextInput
                  autoCapitalize="words"
                  autoCorrect={false}
                  onChangeText={companyName => setForm({ ...form, companyName })}
                  placeholder="Apple"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={form.companyName}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Role<Text>*</Text></Text>
                <TextInput
                  autoCapitalize="words"
                  autoCorrect={false}
                  onChangeText={role => setForm({ ...form, role })}
                  placeholder="Developer"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={form.role}
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Job Description<Text>*</Text></Text>
                <TextInput
                style={styles.inputDescription}
                multiline
                numberOfLines={4}
                placeholder="Enter job description here..."
                placeholderTextColor="#6b7280"
                onChangeText={jobDescription => setForm({ ...form, jobDescription })}
                value={form.jobDescription}
                />
          </View>

          <View  style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Shift Time<Text>*</Text></Text>
            <DatePicker date={date} setDate={setDate} />
          </View>

          <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Salary (in Dollars)</Text>
              <TextInput
                autoCorrect={false}
                onChangeText={salary => setForm({ ...form, salary })}
                placeholder="$100"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.salary}
              />
            </View>

          <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Job and Skills</Text>
              <TextInput
                autoCorrect={false}
                onChangeText={skills => setForm({ ...form, skills })}
                placeholder="Events Bartender"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.skills}
              />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Uniform</Text>
                <TextInput
                style={styles.inputDescription}
                multiline
                numberOfLines={4}
                placeholder="Enter your uniform details..."
                placeholderTextColor="#6b7280"
                onChangeText={uniform => setForm({ ...form, uniform })}
                value={form.uniform}
                />
          </View>

          <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Venue<Text>*</Text></Text>
              <TextInput
                autoCorrect={false}
                onChangeText={venue => setForm({ ...form, venue })}
                placeholder="Enter Venue"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.venue}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Area</Text>
              <TextInput
                autoCorrect={false}
                onChangeText={area => setForm({ ...form, area })}
                placeholder="Beverage Service"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.area}
              />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Access Instructions</Text>
                <TextInput
                style={styles.inputDescription}
                multiline
                numberOfLines={4}
                placeholder="Enter details..."
                placeholderTextColor="#6b7280"
                onChangeText={accessInstructions => setForm({ ...form, accessInstructions })}
                value={form.accessInstructions}
                />
          </View>

          <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Address<Text>*</Text></Text>
                <TextInput
                style={styles.inputDescription}
                multiline
                numberOfLines={4}
                placeholder="Enter Complete Address..."
                placeholderTextColor="#6b7280"
                onChangeText={address => setForm({ ...form, address })}
                value={form.address}
                />
          </View>

            <View style={styles.formAction}>
              <TouchableOpacity onPress={postJob}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Post Job</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexGrow: 1,
    flex: 1,
    flexBasis: 0,
  },
  subheader: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: 16,
  },
  subheadertitle: {
    fontSize: 25,
    fontWeight: '600',
    color: '#1D2A32',
  },
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  inputContainer: {
    flex: 1,
    marginBottom: 16,
    marginRight: 8,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
  },

  inputDescription:{
    height: 100,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
  },

  picker: {
    height: 50,
    borderColor: '#C9D3DB',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  formAction: {
    marginTop: 4,
    marginBottom: 50,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    marginTop: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
