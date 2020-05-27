import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button
} from 'react-native';

import colors from '../sources/colors.js';
import fonts from '../sources/fonts.js';
import Continue from '../components/Continue.js';
import CustomTextInput from '../components/CustomTextinput.js';

export default class LaunchScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={styles.title}>Jobbify</Text>
                    <Text style={styles.subTitle}>Thank you for using Jobbify!</Text>
                </View>
                <Continue onPress={() => this.props.navigation.navigate('Login')}></Continue>
            </View>
        )
    }
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.globalBackgroundColor,
    },

    topContainer :{
        width: '100%',
        height: '77%',
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

    pwdCheck: {
        flexDirection: 'row',
    },
    
    accountCheck: {
    fontSize: 18,
    },

    signupViewModel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    },
})