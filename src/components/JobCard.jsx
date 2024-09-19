import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const JobCard = ({ jobTitle, companyName, salary, address, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Icon name="work" size={48} color="#9A9A9A" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.jobTitle}>{jobTitle}</Text>
            <Text style={styles.companyName}>{companyName}</Text>
          </View>
          <Icon name="bookmark" size={24} color="#9A9A9A" />
        </View>
        <View style={styles.footer}>
          <Text style={styles.address}>{address}</Text>
          <Text style={styles.salary}>{salary}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 18,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  companyName: {
    fontSize: 14,
    color: '#555',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  address: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
  salary: {
    fontSize: 14,
    color: '#007BFF',
    textAlign: 'right',
    padding: 8,
  },
});

export default JobCard;
