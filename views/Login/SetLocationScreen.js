import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Modal
} from 'react-native';

import Continue from '../../components/Continue.js';
import colors from '../../sources/colors.js';

export default class SetLocationScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={styles.title}>Location</Text>
                    <Text style={styles.subTitle}>Thank you for using Jobbify!</Text>
                </View>
                <Continue onPress={this.props.navigation.navigate('Home')}></Continue>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.globalBackgroundColor,
    },

    topContainer: {
        width: '100%',
        height: '50%',
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContainer: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        backgroundColor: colors.white,
    },

    title: {
        fontSize: 55,
        color: colors.white
    },

    subTitle: {
        fontSize: 20,
        color: colors.placeholderBorderColor,
    },
})