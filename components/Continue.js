import React from 'react';

import {
    TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import colors from '../sources/colors.js'

export default class Continue extends React.Component {
    
    render() {
        const {onPress} = this.props;
        return(
            <>
                <TouchableOpacity style={styles.continue} onPress={onPress}>
                    <Icon name={'md-arrow-round-forward'} size={40} color={colors.white}></Icon>
                </TouchableOpacity>
            </>
        )
    }
}

const styles = StyleSheet.create({
    continue: {
        borderRadius: 40,
        backgroundColor: colors.black,
        height: 80,
        width: 80,
        position: 'absolute',
        bottom: '7%',
        right: '7%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})