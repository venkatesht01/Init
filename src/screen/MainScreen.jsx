import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from 'react-native';
import Icon, {Icons} from '../components/Icons';
import * as Animatable from 'react-native-animatable';
import Colors from '../constants/Colors';
import Login from './login';
import Search from './Search';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import EmployerHomeScreen from './employer/HomeScreen';
import JobPosting from './JobPosting';
import EmployeeHomeScreen from './employee/HomeScreen';

const Tab = createBottomTabNavigator();

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
      viewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
      textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
    } else {
      viewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
      textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, {flex: focused ? 1 : 0.65}]}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            {backgroundColor: item.color, borderRadius: 16},
          ]}
        />
        <View
          style={[
            styles.btn,
            {backgroundColor: focused ? null : item.alphaClr},
          ]}>
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? Colors.white : Colors.primary}
          />
          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text
                style={{
                  color: Colors.white,
                  paddingHorizontal: 8,
                }}>
                {item.label}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MainScreen = () => {
  useEffect(() => {
    assignScreens();
  },[]);
  const [tabArr, setTabArr] = useState([
    {
      route: 'Home',
      label: 'Home',
      type: Icons.Feather,
      icon: 'home',
      component: EmployeeHomeScreen,
      color: Colors.primary,
      alphaClr: Colors.primaryAlpha,
    },
    {
      route: 'Search',
      label: 'Search',
      type: Icons.Feather,
      icon: 'search',
      component: Search,
      color: Colors.green,
      alphaClr: Colors.greenAlpha,
    },
    {
      route: 'Add',
      label: 'Add New',
      type: Icons.Feather,
      icon: 'plus-square',
      component: Login,
      color: Colors.red,
      alphaClr: Colors.redAlpha,
    },
  ]);

  async function assignScreens() {
    const token = await AsyncStorage.getItem('jwtToken');
    const decoded = jwtDecode(token);
    const {role} = decoded;
    console.log(role);
    if (role == 'employer') {
      setTabArr([
        {
          route: 'Home',
          label: 'Home',
          type: Icons.Feather,
          icon: 'home',
          component: EmployerHomeScreen,
          color: Colors.primary,
          alphaClr: Colors.primaryAlpha,
        },
        {
          route: 'Search',
          label: 'Search',
          type: Icons.Feather,
          icon: 'search',
          component: Search,
          color: Colors.green,
          alphaClr: Colors.greenAlpha,
        },
        {
          route: 'Add',
          label: 'Add New',
          type: Icons.Feather,
          icon: 'plus-square',
          component: JobPosting,
          color: Colors.red,
          alphaClr: Colors.redAlpha,
        },
      ]);
    } else if (role == 'employee') {
      setTabArr([
        {
          route: 'Home',
          label: 'Home',
          type: Icons.Feather,
          icon: 'home',
          component: EmployeeHomeScreen,
          color: Colors.primary,
          alphaClr: Colors.primaryAlpha,
        },
        {
          route: 'Search',
          label: 'Search',
          type: Icons.Feather,
          icon: 'search',
          component: Search,
          color: Colors.green,
          alphaClr: Colors.greenAlpha,
        },
        {
          route: 'Add',
          label: 'Add New',
          type: Icons.Feather,
          icon: 'plus-square',
          component: JobPosting,
          color: Colors.red,
          alphaClr: Colors.redAlpha,
        },
      ]);
    }
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: 'absolute',
            margin: 16,
            borderRadius: 16,
          },
        }}>
        {tabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: props => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  },
});

// const handleLogout = async () => {
//   try {
//     // Remove the token from storage
//     await AsyncStorage.removeItem('userToken');
//     // Navigate to login screen after logout
//     navigation.navigate('Login');
//   } catch (error) {
//     Alert.alert('Error', 'Failed to log out');
//     console.error(error);
//   }
// };

export default MainScreen;