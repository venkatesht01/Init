// SearchScreen.js
import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostJob from './PostJob'; // Import your PostJob component
import JobCard from '../../components/JobCard';

const Tab = createMaterialTopTabNavigator();

const JobScreen = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);
  const [isPosting, setIsPosting] = useState(false);

  const postJob = () => {
    setIsPosting(true); // Set state to show the PostJob component
  };

  const handleJobPosted = (newJob) => {
    // Add new job to the jobs array with an ID
    setJobs((prevJobs) => [...prevJobs, { ...newJob, id: Date.now().toString() }]);
    setIsPosting(false);
    Alert.alert('Success', 'Job posted successfully!');
  };

  return (
    <View style={styles.container}>
      {isPosting ? (
        <PostJob setJobs={handleJobPosted} setIsPosting={setIsPosting} navigation={navigation} />
      ) : (
        <>
          <Button title="Post a Job" onPress={postJob} />
          <FlatList style={styles.jobcard}
            data={jobs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <JobCard
                job={item}
                jobTitle={item.role}
                companyName={item.companyName}
                salary={item.salary}
                address={item.address}
              />
            )}
          />
        </>
      )}
    </View>
  );
};

const NotificationScreen = () => {
  const notifications = [
    "Notification 1: New job posted!",
    "Notification 2: Job application received.",
    "Notification 3: Job status updated.",
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
};

const SearchScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Jobs" component={JobScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  jobcard: {
    marginTop:20
  }
});

export default SearchScreen;
