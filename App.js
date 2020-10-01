
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/**
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './views/HomeScreen';
import JobScreen from './views/JobScreen';
import PendingScreen from './views/PendingScreen';
import TestScreen from './views/TestScreen.js'
import ProfileScreen from './views/ProfileScreen';
import SettingsScreen from './views/SettingsScreen';
import LaunchScreen from './views/LaunchScreen.js';
import LoginScreen from './views/Login/LoginScreen.js'
import SetLocationScreen from './views/Login/SetLocationScreen.js'
import PhoneNumberScreen from './views/Login/PhoneNumberScreen.js'
import CustomDrawer from './components/DrawerContent.js'



const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  drawerStyler: {
    width: '80%'
  }
};

const Drawer = createDrawerNavigator()

export default function App() {
  return(
    <>
  <NavigationContainer>
    <Drawer.Navigator initialRouteName='Launch' drawerStyle={styles.drawerStyler} drawerContent={props => <CustomDrawer {...props} />}>
    <Drawer.Screen component={TestScreen} options={{swipeEnabled: false}} name='Test'></Drawer.Screen>
      <Drawer.Screen component={LaunchScreen} options={{swipeEnabled: false}} name='Launch'></Drawer.Screen>
      <Drawer.Screen component={LoginScreen} options={{swipeEnabled: false}} name='Login'></Drawer.Screen>
      <Drawer.Screen component={SetLocationScreen} options={{swipeEnabled: false}} name='Location'></Drawer.Screen>
      <Drawer.Screen component={PhoneNumberScreen} options={{swipeEnabled: false}} name='Phone'></Drawer.Screen>
      <Drawer.Screen component={HomeScreen} name='Home'></Drawer.Screen>
      <Drawer.Screen component={JobScreen} name='Job'></Drawer.Screen>
      <Drawer.Screen component={PendingScreen} name='Pending'></Drawer.Screen>
      <Drawer.Screen component={SettingsScreen} name='Settings'></Drawer.Screen>
      <Drawer.Screen component={ProfileScreen} name='Profile'></Drawer.Screen>
    </Drawer.Navigator>
  </NavigationContainer>
  </>
  )
}
 /*
import * as React from 'react';
import {   
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  TextInput,
  Dimensions,
  Image } from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const placeholder_color = '#474747';
const text_input_border_color = '#c4c4c4';
const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function homeScreen() {
  return (
    <>
    <View style={styles.sectionContainer}>
    <Text>
      HomePage
    </Text>
    </View>
    </>
  );
}

function loginScreen() {
  return (
    <>
        <View style={styles.sectionContainer}>
          <Text style={styles.Text1}>Login</Text>
          <TextInput style={styles.text_input} placeholder="Username" placeholderTextColor={placeholder_color} onChangeText={}></TextInput>
          <TextInput style={styles.text_input} marginTop={10} placeholder="Password" secureTextEntry={true} placeholderTextColor={placeholder_color}></TextInput>
          <View style={styles.button_background}>
            <Button title="Login" color="#ffffff"></Button>
          </View>
        </View>
        <View style={styles.byJobbifyC}>
            <Text style={styles.byJobbify}>by Jobbify</Text>
          </View>
             
    </>
  );
}

function signUpScreen({ navigation }) {
  return (
    <>
    <View style={styles.sectionContainer}>
      <Text style={styles.Text1}>Signup</Text>
      <TextInput style={styles.text_input} placeholder="Username" placeholderTextColor={placeholder_color}></TextInput>
      <TextInput style={styles.text_input} placeholder="Email" placeholderTextColor={placeholder_color}></TextInput>
      <View style={styles.pwdCheck}>
      <TextInput style={styles.text_input_half} marginTop={10} placeholder="Password" secureTextEntry={true} placeholderTextColor={placeholder_color}></TextInput>
      <TextInput style={styles.text_input_half} marginTop={10} placeholder="Repeat Password" secureTextEntry={true} placeholderTextColor={placeholder_color}></TextInput>
      </View>
      <View style={styles.button_background}>
        <Button title="Signup" color="#ffffff"></Button>
      </View>
      <View style={styles.signupViewModel}>
      <Text style={styles.accountCheck}>Already have an account?</Text><Button style={styles.signUp} title="Login" onPress={() => navigation.navigate("Login")}></Button>
      </View>
    </View>
    <View style={styles.byJobbifyC}>
        <Text style={styles.byJobbify}>by Jobbify</Text>
      </View>
</>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homeScreen}/>
        <Stack.Screen name="Login" component={loginScreen}/>
        <Stack.Screen name="Signup" component={signUpScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  pwdCheck: {
    flexDirection: 'row',
  },

  accountCheck: {
    fontSize: 18,
  },

  signupViewModel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },

  hr: { 
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 275,
    marginTop: 50,
  },

  Text1 : {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: 'bold'
  },

  byJobbifyC: {
    width: window_width,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    },

  byJobbify: {
    fontSize: 25,
    bottom: 50,
    color: text_input_border_color,
  },

  text_input: {
    borderWidth: 1,
    height: 40,
    width: 276,
    paddingLeft: 10,
    borderColor: text_input_border_color,
    borderRadius: 2,
    marginTop: 10,
    color: 'black',
  },

  text_input_half: {
    borderWidth: 1,
    height: 40,
    width: 132,
    paddingLeft: 10,
    borderColor: text_input_border_color,
    borderRadius: 2,
    marginTop: 10,
    color: 'black',
    margin: 6,
  },

  button_background: {
    width: 275,
    height: 60,
    backgroundColor: '#363636',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 2,
    borderColor: 'black',
  },

  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
});


/*
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
*/

