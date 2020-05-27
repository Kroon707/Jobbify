import React from 'react';

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
    TouchableOpacity
  } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../sources/colors';

export default class Dropdown extends React.Component {
    render() {
        const {onPress} = this.props;
        return( 
            <>
                <View style={styles.dropdownMenu} onPress={onPress}>
                    <TouchableOpacity onPress={onPress}>
                        <Icon name={'md-menu'} size={32}></Icon>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}




const styles = StyleSheet.create({
    dropdownMenu: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '7%',
        right: '7%',
        zIndex: 1,
      },
})