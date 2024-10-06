import React, { useState } from 'react';
import { StyleSheet, View, Alert, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ date, setDate }) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);

    if (!event || event.type === 'dismissed') {
      return; 
    }

    const currentDate = selectedDate || date;

    // Log the currentDate for debugging
    console.log('Current Date Type:', typeof currentDate);
    console.log('Current Date Value:', currentDate);
   
    // Validate the selected date
    if (currentDate instanceof Date && !isNaN(currentDate.getTime())) {
      if (currentDate > new Date()) {
        setDate(new Date(currentDate)); // This is the line where the error occurs
      } else {
        Alert.alert('Invalid Date', 'Please select a future date and time.');
      }
    } else {
      Alert.alert('Error', 'Selected date is invalid.');
    }
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatepicker} style={styles.inputContainer}>
        <Text style={styles.inputText}>
          {date ? date.toLocaleString() : 'Select Date and Time'}
        </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date || new Date()} // Ensure a valid date is passed
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
  },
  inputContainer: {
    height: 50,
    borderColor: '#C9D3DB',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 15,
    color: '#222',
  },
});

export default DatePicker;
