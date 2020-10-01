import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../sources/colors.js';

import PropTypes from 'prop-types';

export default class SettingsChild extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }

    render = () => {
        const {title, subTitle, icon, onPress} = this.props;   
        return(
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Icon style={styles.icon} name={icon} size={33}></Icon>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} color={colors.black}>{title}</Text>
                    <Text style={styles.subTitle} color={colors.subTitleColor}>{subTitle}</Text>
                </View>
                <Icon style={styles.arrowForward} name={'ios-arrow-forward'} size={33}></Icon>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -1,
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: colors.placeholderBorderColor,
        borderBottomWidth: 1,
        borderBottomColor: colors.placeholderBorderColor,
    },

    titleContainer: {
        marginLeft: 20,
    },

    title: {
        fontSize: 18,
        fontFamily: 'Helvetica-Bold'
    },

    subTitle: {
        fontSize: 14,
    },

    icon: {
        marginLeft: 40
    },

    arrowForward: {
        position: 'absolute',
        right: 20,
    }
})
