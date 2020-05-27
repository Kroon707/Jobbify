import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TouchableOpacity,
    TouchableHighlight
  } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../views/HomeScreen';
import JobScreen from '../views/JobScreen';
import PendingScreen from '../views/PendingScreen';
import ProfileScreen from '../views/ProfileScreen';
import SettingsScreen from '../views/SettingsScreen';

import colors from '../sources/colors.js';
import defaultFont from '../sources/fonts.js'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

class CustomDrawer extends React.Component {
    render() {
    return(
        <>
        <TouchableOpacity style={styles.topContainer} onPress={() => this.props.navigation.navigate('Profile')}>
            <View style={styles.profilePicture}><Icon name={'md-add'} size={45} color={colors.white}></Icon></View>
            <View>
            <Text style={{color: '#ffffff', fontSize: 20, marginLeft: 20}}>Bananensplit4000</Text>
            <Text style={{color: '#c2c2c2', marginLeft: 20}}>$460,61</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.midContainer}>
            <TouchableOpacity style={styles.router} onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name={'ios-home'} size={35}></Icon>
            <Text style={styles.textRouting}>Home</Text>
            </TouchableOpacity>
            <View style={styles.line}></View>
            <TouchableOpacity style={styles.router} onPress={() => this.props.navigation.navigate('Job')}>
            <Icon name={'ios-briefcase'} size={35}></Icon>
            <Text style={styles.textRouting}>Create a job</Text>
            </TouchableOpacity>
            <View style={styles.line}></View>
            <TouchableOpacity style={styles.router} onPress={() => this.props.navigation.navigate('Pending')}>
            <Icon name={'ios-list'} size={35}></Icon>
            <Text style={styles.textRouting}>View your current jobs</Text>
            </TouchableOpacity>
            <View style={styles.line}></View>
            <TouchableOpacity style={styles.router} onPress={() => this.props.navigation.navigate('Profile')}>
            <Icon name={'ios-chatboxes'} size={35}></Icon>
            <Text style={styles.textRouting}>Chat</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.router} onPress={() => this.props.navigation.navigate('Settings')}>
                <Icon name={'ios-settings'} size={35}></Icon>
                <Text style={styles.textRouting}>Settings</Text>
            </TouchableOpacity>
            <View style={styles.line}></View>
            <TouchableOpacity style={styles.router}>
                <Icon name={'ios-information-circle-outline'} size={35}></Icon>
                <Text style={styles.textRouting}>Support</Text>
            </TouchableOpacity>
            <View style={styles.line}></View>
            <TouchableOpacity style={styles.router} onPress={() => this.props.navigation.navigate('Launch')}>
                <Icon name={'md-arrow-forward'} size={35}></Icon>
                <Text style={styles.textRouting}>Logout</Text>
            </TouchableOpacity>
        </View>
        </>
    )
    }
}


const styles = StyleSheet.create({
    topContainer: {
        width: '100%',
        height: '25%',
        flexDirection: 'row',
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },

    toucahbleOpacityTopContainer: {
        width: '100%',
        height: '25%',
    },

    midContainer: {
        flex: 1,
    },

    bottomContainer: {
        position: 'absolute',
        bottom: 10,
        width: '100%'
    },



    line: {
        width: '90%',
        height: 1,
        backgroundColor: colors.lineColor,
        marginLeft: 10,
    },

    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: colors.defaultProfileImageColor,
        justifyContent: 'center',
        alignItems: 'center'
    },

    router: {
        alignItems: 'center',
        marginLeft: '6%',
        marginTop: '4.5%',
        marginBottom: '4.5%',
        flexDirection: 'row',
    },

    textRouting: {
        marginLeft: 20,
        fontSize: 18,
    }
})

export default CustomDrawer