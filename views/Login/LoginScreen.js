import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button
} from 'react-native';

import GoogleSignIn from 'react-native-google-signin';
import { LoginButton } from 'react-native-fbsdk';

import colors from '../../sources/colors.js';
import fonts from '../../sources/fonts.js';
import Continue from '../../components/Continue.js';
import CustomTextInput from '../../components/CustomTextinput.js';

import GoogleLogin from '../../components/GoogleLogin.js'
import FBLoginButton from '../../components/FBLoginButton.js'


export default class LoginScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.topContainer}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subTitle}>Thank you for using Jobbify!</Text>
                </View>
                <View style={styles.loginOptionContainer}>
                    <GoogleLogin></GoogleLogin>
                </View>
                <View style={styles.loginOptionContainer}>
                <FBLoginButton/>
                </View>
                <Continue onPress={() => this.props.navigation.navigate('Home')}></Continue>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.globalBackgroundColor,
    },

    topContainer :{
        width: '100%',
        height: '50%',
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 80,
        color: colors.white
    },

    subTitle: {
        fontSize: 20,
        color: colors.placeholderBorderColor,
    },
    

    loginOptionContainer: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: colors.placeholderBorderColor,
        borderBottomWidth: 1,
        borderBottomColor: colors.placeholderBorderColor,
    }
})