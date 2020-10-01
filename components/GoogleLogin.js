import React from 'react'

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native'

import firebase from 'firebase'
import { GoogleSignin } from '@react-native-community/google-signin';
import googleConfig from '../database/GoogleConfig.js'

import Icon from 'react-native-vector-icons/Ionicons'

import colors from '../sources/colors.js'

export default class GoogleLogin extends React.Component {
    _googleSignIn = async () => { 

      GoogleSignin.configure({iosClientId: '857289498527-4ogpc4dqh10pcmegogmfvaoa3m1r9v6q.apps.googleusercontent.com'})
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(idToken);
    
      // Sign-in the user with the credential
      return firebase.auth().signInWithCredential(credential).then(() => {
      });
    }

    render() {
        return(
            <TouchableOpacity style={styles.googleLogin} onPress={() => this._googleSignIn()}>
              <Icon style={styles.icon} name={'logo-google'} size={30}></Icon>
              <Text style={styles.loginText}>Login with Google</Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
  googleLogin: {
    borderRadius: 2,
    backgroundColor: colors.white,
    width: 350,
    height: '45%',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.placeholderBorderColor
  },

  icon: {
    marginLeft: 20,
    color: '#FBBC05'
  },

  loginText: {
    color: colors.subTitleColor,
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Helvetica-bold'
  }
})