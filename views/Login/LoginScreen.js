import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button,
    Alert
} from 'react-native';


import colors from '../../sources/colors.js';
import fonts from '../../sources/fonts.js';
import Continue from '../../components/Continue.js';
import CustomTextInput from '../../components/CustomTextinput.js';

import firebase from 'firebase'
import GoogleLogin from '../../components/GoogleLogin.js';
import FBLoginButton from '../../components/FBLoginButton.js';
import initializeDatabase from '../../database/FirebaseDatabase.js'

export default class LoginScreen extends React.Component {
    state = {
        username: ''
    }

    componentDidMount() {
        initializeDatabase();
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({userName: user.displayName}) ,
            this.setState({userPicture: user.photoURL})
        })    
    }

    validateUser() {
        if(this.state.username == '') {
            Alert.alert('Login', 'Please login first')
        }

        else {
            this.props.navigation.navigate('Phone')
        }
    }
    
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
                    <FBLoginButton></FBLoginButton>
                </View>
                <Continue onPress={() => this.validateUser()}></Continue>
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
        fontSize: 60,
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