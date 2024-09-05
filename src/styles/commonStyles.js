import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
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
  inputIcon: {
    marginHorizontal: 15,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 70,
    width: '90%',
    justifyContent: 'flex-end',
  },
  buttonText: {
    color: '#262626',
    fontSize: 25,
  },
  linearGradient: {
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  footerText: {
    color: '#262626',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 100,
  },
  footerLink: {
    textDecorationLine: 'underline',
  },
});

export default commonStyles;