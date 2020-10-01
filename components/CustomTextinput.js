import React from 'react'

import {
    TextInput,
    StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types';

import colors from '../sources/colors.js';
import padding from '../sources/padding';

export default class CustomTextInput extends React.Component {
    static propTypes = {
        placeholder: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
    }

    onChangeText = name => this.setState({ name });

    render =() => {
        const {placeholder, height, password, width} = this.props;   
        return(
            <TextInput onChangeText={this.onChangeText} value={this.name} style={[styles.textInput, {height: height}]} secureTextEntry={password} placeholderTextColor={colors.black} placeholder={placeholder}></TextInput>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: colors.white,
        width: '90%',
        height: this.height,
        marginTop: 20,
        borderRadius: 5,
        paddingLeft: padding.textinputPadding,
    }
})