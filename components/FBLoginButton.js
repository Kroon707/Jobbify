import React from 'react';
import { 
  View, StyleSheet, Text 
} from 'react-native';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

import Icon from 'react-native-vector-icons/Ionicons'

import auth from 'firebase/auth'

import Facebook from 'expo-facebook'

import colors from '../sources/colors.js'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class FBLoginButton extends React.Component {
  async logIn() {
    try {
      await Facebook.initializeAsync('879240735904395');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
|}
  render() {
    return (
      <View style={styles.FBLogin}>
      <TouchableOpacity style={{flex: 1}} onPress={this.onFacebookButtonPress}>
        <Icon style={styles.icon} name={'logo-facebook'} size={30}></Icon>
        <Text>Sign in with Facebook</Text>
      </TouchableOpacity>
        <Text>{this.facebookCredential}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    FBLogin: {
        backgroundColor: '#3b5998',
        borderRadius: 2,
        color: colors.white,
        width: '90%',
        height: '45%',
        alignItems: 'center',
        flexDirection: 'row'
    },

    icon: {
      marginLeft: 20,
      color: colors.white
    }
})
module.exports = FBLoginButton;