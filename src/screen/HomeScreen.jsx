import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import JobCard from '../components/JobCard';

// Import the local image
import profileImage from '../images/profile.png';

// Sample data for recent job applications
const recentApplications = [
  { id: '1', jobTitle: 'Software Engineer', companyName: 'Tech Corp', salary: '$120,000', address: 'New York, Dallas' },
  { id: '2', jobTitle: 'UI/UX Designer', companyName: 'Creative Inc', salary: '$90,000', address: 'New York, Dallas' },
  { id: '3', jobTitle: 'Project Manager', companyName: 'Innovative Solutions', salary: '$110,000', address: 'New York, Dallas' },
];

// User information
const user = {
  name: 'John Doe',
  imageUrl: profileImage, // Use the imported image
};

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome, {user.name}!</Text>
        <Image source={user.imageUrl} style={styles.userImage} />
      </View>
      <View style={styles.applicationsSection}>
        <Text style={styles.applicationsHeader}>Recent Applications</Text>
        <FlatList
          data={recentApplications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <JobCard
              jobTitle={item.jobTitle}
              companyName={item.companyName}
              salary={item.salary}
              address={item.address}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  applicationsSection: {
    flex: 1,
  },
  applicationsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default HomePage;
