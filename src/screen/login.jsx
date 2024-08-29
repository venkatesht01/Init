import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const login = () => {
  return (
    <View style={styles.container}>

      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Hello</Text>
      </View>

      <View>
        <Text style={styles.signInText}>
           Sign in to your account.
        </Text>
      </View>
      
      <View style={styles.inputContainer}>
        <FontAwesome 
          name= {"user"} 
          size={24} 
          color={"#9A9A9A"} 
          style={styles.inputIcon}
          />
        <TextInput style={ styles.TextInput} placeholder='Email/Phone' />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome 
          name= {"lock"} 
          size={24} 
          color={"#9A9A9A"} 
          style={styles.inputIcon}
          />
        <TextInput style={ styles.TextInput} placeholder='Password' secureTextEntry/>
      </View>

      <Text style={styles.forgotPasswordtext} > Forgot your password?</Text>

      <View style={ styles.signInBtnContainer}>
        <Text style= {styles.signIn}> Sign in</Text>
        <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>

        <AntDesign 
          name= {"arrowright"} 
          size={28} 
          color={"white"} 
          style={styles.inputIcon}
          />

        </LinearGradient>
      </View>

      <Text style={styles.footerText}> Don't have an account? 
        <Text style={{textDecorationLine: "underline"}}> Create
           </Text>
           </Text>

    </View>
  )
}

export default login

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  helloContainer: {},
  helloText: {
    textAlign: "center",
    fontSize: 70,
    fontWeight: "500",
    color: 'black',
  },
  signInText: {
    textAlign: "center",
    fontSize: 18,
    color: 'black',
    marginBottom: 30,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 5,
    marginVertical: 20,
    alignItems: "center",
    height: 50,
    borderWidth: 1,
    borderColor: "#DADADA",
  },
  inputIcon: {
    marginLeft: 15,
    marginRight: 5
  },
  TextInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },

  forgotPasswordtext: {
    color: "#BEBEBE",
    textAlign: "right",
    width: "90%",
    fontSize: 15,
  },

  signInBtnContainer: {
    flexDirection: 'row',
    marginTop: 120,
    width: "90%",
    justifyContent: 'flex-end'
  },
   
  signIn:{
    color: "#262626",
    fontSize: 25
  },

  linearGradient: {
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },

  footerText:{
    color: "#262626",
    textAlign: "center",
    fontSize:18,
    marginTop: 100
  }
});