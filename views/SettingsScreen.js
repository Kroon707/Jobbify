import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Linking
  } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../sources/colors.js'
import fonts from '../sources/fonts.js';

import Dropdown from '../components/Dropdown.js'
import Home from '../components/Home.js';
import SettingsChild from '../components/SettingsChild.js'

     
export default class SettingsScreen extends React.Component {
  render() { 
    return (	
      <ScrollView style={styles.container}>
        <Dropdown onPress={() => this.props.navigation.openDrawer()}></Dropdown>
        <Home onPress={() => this.props.navigation.navigate('Home')}></Home>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.declareSetting}>Privacy</Text>
        <SettingsChild icon={'ios-mail'} title={'Email'} subTitle={'Change your email'}></SettingsChild>
        <SettingsChild icon={'md-call'} title={'Phone Number'} subTitle={'Change your phone number'}></SettingsChild>
        <Text style={styles.declareSetting}>Location Settings</Text>
        <SettingsChild title={'Location'} icon={'md-compass'} subTitle={'Change your location settings'} onPress={() => Linking.openSettings()}></SettingsChild>
        <Text style={styles.declareSetting}>Payment Settings</Text>
        <SettingsChild title={'Payment Method'} subTitle={'View or change your payment method'} icon={'ios-card'}></SettingsChild>
      </ScrollView>
    )
  }
}
  
const styles = StyleSheet.create ({
  container: {
      flex: 1,
      backgroundColor: colors.globalBackgroundColor,
  },

  title: {
    fontSize: fonts.titleFontSize,
    marginLeft: 20,
    marginTop: 150,
    fontFamily: 'Helvetica-Bold'
  },

  jobContainer: {
    flexDirection: 'row',
    width: '85%',
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },

  declareSetting: {
    color: colors.subTitleColor,
    marginLeft: 20,
    marginTop: 40,
    marginBottom: 20,
    fontSize: 18,
    fontFamily: 'Helvetica-Bold'
  }
})

