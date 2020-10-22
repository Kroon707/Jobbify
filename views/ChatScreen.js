import React from 'react'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Pressable
  } from 'react-native';

import colors from '../sources/colors.js';
import Button from 'react-native-select-two/lib/Button';


export default class ChatScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button 
                title="back to home"
                onPress={() => {this.props.navigation.navigate('Home')}}
                style={styles.button}/>
            </View>
        )
    }


}


const styles = StyleSheet.create ({
    container: {
      alignItems: 'center',
      flex: 1,
      backgroundColor: colors.globalBackgroundColor,
      //dit kan later weg maar zodat de button duidelijk in het midden is
      justifyContent: 'center'
    },

    button: {
        height:40,
        backgroundColor: 'black',
    }
})