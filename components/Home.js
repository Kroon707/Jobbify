import React from 'react';

import 
{
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Home extends React.Component {
    render() {
        const {onPress} = this.props
        return(
            <View style={styles.homeMenu}>
                <TouchableOpacity onPress={onPress}>
                <Icon name={'ios-home'} size={32}></Icon>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeMenu: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '7%',
        left: '7%',
        zIndex: 1,
    },
})