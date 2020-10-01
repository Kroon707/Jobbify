import React from 'react';

import { 
  View, 
  StyleSheet, 
  Text 
} from 'react-native';

import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

import Icon from 'react-native-vector-icons/Ionicons'

import firebase from 'firebase'

import colors from '../sources/colors.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

var userName = null

export default class FBLoginButton extends React.Component {
  state = {
    user: ''
  }

  _fbauth() {    
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(function(result) {
        if(result.isCancelled) {
          alert('Login Cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((accessTokenData) => {
            const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)
            firebase.auth().signInWithCredential(credential).then(() =>
            {
              firebase.auth().onAuthStateChanged((user) => {
                userName = user.displayName
                alert(userName)
              })
            }),
            
            (error) => {
              console.log('An error occurred' + error)
            }
          })
        }
      },
        function(error) {
          alert('An error occured' + error)
        }
    )
  }
  
  render() {
      return(
          <TouchableOpacity style={styles.fbLogin} onPress={() => this._fbauth()}>
            <Icon style={styles.icon} name={'logo-facebook'} size={30}></Icon>
            <Text style={styles.loginText}>Login with Facebook</Text>
          </TouchableOpacity>
      )
  }
}

module.exports = FBLoginButton

const styles = StyleSheet.create({
  fbLogin: {
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
    color: '#3b5998'
  },

  loginText: {
    color: colors.subTitleColor,
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Helvetica-bold'
  }
})

