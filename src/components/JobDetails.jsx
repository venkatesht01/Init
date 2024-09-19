import React from 'react';
import { Modal, View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const JobDetailsModal = ({ visible, job, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Job Details</Text>
          </View>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.title}>{job.jobTitle}</Text>
            <Text style={styles.company}>{job.companyName}</Text>
            <Text style={styles.location}>{job.location}</Text>
            <Text style={styles.description}>{job.description}</Text>
            {/* You can add more job details here */}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 20,
    maxHeight: '80%', // Limit modal height
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 18,
    color: '#666',
  },
  location: {
    fontSize: 16,
    color: '#666',
  },
  description: {
    marginVertical: 10,
    fontSize: 14,
  },
});

export default JobDetailsModal;
