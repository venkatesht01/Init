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
import config from '../utils/config';

export default function SignUp() {
  const navigation = useNavigation();

  const roles = [
    { label: 'Employer Account', value: 'employer' },
    { label: 'Employee Account', value: 'employee' },
  ];
  
  const [form, setForm] = useState({
    firstName: '',
    password: '',
    userName: '',
    address1: '',
    address2: '',
    town: '',
    country: '',
    postcode: '',
    email: '',
    phone: '',
    role: '',
    employeeId: '',
    passport: '',
    brp: '',
    companyName: '',
    companyNumber: '',
  });

  const handleSignUp = async () => {
    const signUpUrl = `${config.apiBaseUrl}/auth/register`;
    console.log(form);
    
    if (
      !form.firstName ||
      !form.userName ||
      !form.address1 ||
      !form.town ||
      !form.country ||
      !form.postcode ||
      !form.email ||
      !form.phone ||
      (form.role === 'employee' &&
        (!form.employeeId || !form.passport || !form.brp)) ||
      (form.role === 'employer' && (!form.companyName || !form.companyNumber))
    ) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    try {
      const response = await axios.post(signUpUrl, form);
      Alert.alert('Success', 'Sign up successful');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', error?.response?.data || 'Sign up failed');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Text style={styles.title}>Create an Account</Text>
            <Text style={styles.subtitle}>
              Join us to explore more opportunities
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.row}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>First Name</Text>
                <TextInput
                  autoCapitalize="words"
                  autoCorrect={false}
                  onChangeText={firstName => setForm({ ...form, firstName })}
                  placeholder="John"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={form.firstName}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Last Name</Text>
                <TextInput
                  autoCapitalize="words"
                  autoCorrect={false}
                  onChangeText={userName => setForm({ ...form, userName })}
                  placeholder="Doe"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={form.userName}
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={email => setForm({ ...form, email })}
                placeholder="john@example.com"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={password => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password}
              />
            </View>

            <View style={styles.subheader}>
              <Text style={styles.subheadertitle}>Profile Details</Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Address Line 1</Text>
              <TextInput
                autoCorrect={false}
                onChangeText={address1 => setForm({ ...form, address1 })}
                placeholder="123 Main St"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.address1}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Address Line 2</Text>
              <TextInput
                autoCorrect={false}
                onChangeText={address2 => setForm({ ...form, address2 })}
                placeholder="Apt 4B"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.address2}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Town</Text>
              <TextInput
                autoCorrect={false}
                onChangeText={town => setForm({ ...form, town })}
                placeholder="Springfield"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.town}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Country</Text>
              <TextInput
                autoCorrect={false}
                onChangeText={country => setForm({ ...form, country })}
                placeholder="USA"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.country}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Postcode</Text>
              <TextInput
                autoCorrect={false}
                onChangeText={postcode => setForm({ ...form, postcode })}
                placeholder="12345"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.postcode}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Phone Number</Text>
              <TextInput
                autoCorrect={false}
                keyboardType="phone-pad"
                onChangeText={phone => setForm({ ...form, phone })}
                placeholder="+1 234 567 890"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.phone}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Role</Text>
              <Dropdown
                data={roles}
                labelField="label"
                valueField="value"
                placeholder="Select role"
                searchPlaceholder="Search..."
                style={styles.picker}
                value={form.role}
                onChange={itemValue => {
                  console.log(itemValue);
                  setForm({ ...form, role: itemValue.value });
                }}
              />
            </View>

            {form.role ? (
              <View style={styles.subheader}>
                <Text style={styles.subheadertitle}>{form.role} details</Text>
              </View>
            ) : null}

            {form.role === 'employee' && (
              <>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Employee ID</Text>
                  <TextInput
                    autoCorrect={false}
                    onChangeText={employeeId => setForm({ ...form, employeeId })}
                    placeholder="E12345"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.employeeId}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Passport Number</Text>
                  <TextInput
                    autoCorrect={false}
                    onChangeText={passport => setForm({ ...form, passport })}
                    placeholder="P12345678"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.passport}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>BRP Number</Text>
                  <TextInput
                    autoCorrect={false}
                    onChangeText={brp => setForm({ ...form, brp })}
                    placeholder="BRP12345678"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.brp}
                  />
                </View>
              </>
            )}

            {form.role === 'employer' && (
              <>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Company Name</Text>
                  <TextInput
                    autoCorrect={false}
                    onChangeText={companyName => setForm({ ...form, companyName })}
                    placeholder="Acme Corp"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.companyName}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Company Number</Text>
                  <TextInput
                    autoCorrect={false}
                    onChangeText={companyNumber => setForm({ ...form, companyNumber })}
                    placeholder="12345678"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.companyNumber}
                  />
                </View>
              </>
            )}

            <View style={styles.formAction}>
              <TouchableOpacity onPress={handleSignUp}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{ marginTop: 'auto' }}
        >
          <Text style={styles.formFooter}>
            Already have an account?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
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
    marginBottom: 16,
  },
  inputContainer: {
    flex: 1,
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
  picker: {
    height: 50,
    borderColor: '#C9D3DB',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
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
