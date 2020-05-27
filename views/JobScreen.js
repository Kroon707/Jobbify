import React, {Component, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TextInput,
    TouchableOpacity
  } from 'react-native';
import Select2 from 'react-native-select-two';

import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../sources/colors.js';
import padding from '../sources/padding.js';
import Dropdown from '../components/Dropdown.js';
import Home from '../components/Home.js';

const mockData = [
    { id: 1, name: 'Landmowing' },
    { id: 2, name: 'Doing the dishes' },
    { id: 3, name: 'Washing the car' },
    { id: 4, name: 'Cleaning the windows'},
    { id: 5, name: 'Doing the laundry' },
    { id: 6, name: 'Cleaning the pool' },
    { id: 7, name: 'Babysitting' },
];
   
  class JobScreen extends React.Component {
    state = {
      type: '',
      title: '',
      price: '',
      details: '',
    }
    render() {
      return (
        <View style={styles.container}>
          <Dropdown onPress={() => this.props.navigation.openDrawer()}></Dropdown>
          <Home onPress={() => this.props.navigation.navigate('Home')}></Home>
          <Text style={{fontSize: 32, marginTop: 120,}}>Create a Job</Text>
          <TextInput style={styles.jobTitle} placeholder="Enter the title for your job" color={colors.black} placeholderTextColor={colors.placeholderColor} onSubmitEditing={() => { this.secondTextInput.focus(); }} returnKeyType={"next"} maxLength={30}></TextInput>
          <View style={styles.modalContainer}>
                <Select2
                    isSelectSingle
                    style={styles.jobTitle}
                    buttonStyle={styles.button}
                    selectedTItleStyle={styles.titleStyle}
                    colorTheme={'black'}
                    popupTitle='Choose your job'
                    title='Choose your job'
                    selectButtonText='Confirm'
                    cancelButtonText='Cancel'
                    searchPlaceHolderText='Look for specific jobs'
                    listEmptytitle='U must specify a job'
                    data={mockData}
                    onSelect={data => {
                        this.setState({ data });
                    }}
                    onRemoveItem={data => {
                        this.setState({ data });
                    }} 
                />
          </View>
          <TextInput ref={(input) => { this.secondTextInput = input; }} returnKeyType={"next"} style={styles.jobTitle} placeholder="Select your price" color={colors.black}  placeholderTextColor={colors.placeholderColor} maxLength={30} onSubmitEditing={() => { this.thirdTextInput.focus(); }} returnKeyType={"next"}></TextInput>
          <TextInput ref={(input) => { this.thirdTextInput = input; }} returnKeyType={"done"} style={styles.jobDetails} placeholder="Enter details" color={colors.black} placeholderTextColor={colors.placeholderColor} multiline={true} maxLength={300}></TextInput>
          <TouchableOpacity style={styles.buttonContainer}> 
          <Button color='#ffffff' style={styles.button} title="Confirm"></Button>
          </TouchableOpacity>
        </View>
        )
    }
  }

  const itemWidth = 325;

  const styles = StyleSheet.create ({
    container: {
      alignItems: 'center',
      flex: 1,
      backgroundColor: colors.globalBackgroundColor,
    },

    modalContainer: {
      alignItems: 'center'
    },

    jobTitle: {
      backgroundColor: colors.white,
      width: itemWidth,
      height: 45,
      marginTop: 20,
      borderRadius: 5,
      paddingLeft: padding.textinputPadding,
    },

    jobDetails: {
      backgroundColor: colors.white,
      width: itemWidth,
      height: 300,
      borderRadius: 5,
      marginTop: 20,
      paddingLeft: padding.textinputPadding,
      paddingRight: padding.textinputPadding,
      paddingTop: padding.textinputPadding,
    },

    buttonContainer: {
      position: 'absolute',
      top: 700,
      width: itemWidth,
      height: 60,
      backgroundColor: colors.buttonBackgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      borderRadius: 15,
      marginBottom: 250,
    },

    button: {
      borderRadius: 4,
      marginBottom: 20,
      height: 40,
    },

    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },

    dropdownMenu: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '7%',
      right: '7%',
      zIndex: 1,
      shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    },
})

export default JobScreen