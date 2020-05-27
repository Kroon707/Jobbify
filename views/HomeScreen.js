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
    TouchableOpacity,
    Settings
  } from 'react-native';

import colors from '../sources/colors.js';
import padding from '../sources/padding.js'
import borderRadius from '../sources/borderRadius.js'
import Dropdown from '../components/Dropdown.js'
import SettingsChild from '../components/SettingsChild.js'

import MapView, {PROVIDER_GOOGLE, Marker, Circle} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import Icon from 'react-native-vector-icons/Ionicons';


const {width, height} = Dimensions.get('window')
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.03;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class HomeScreen extends React.Component {
  state = {
    location: null,
    visibleModal: false,
    initialPosition: {
      latitude: 0,
      longitude: 0,
      longitudeDelta: 0,
      latitudeDelta: 0,
    },

    watchPosition: {
      latitude: 0,
      longitude: 0,
    }
  };

  componentDidMount() {
    Geolocation.getCurrentPosition((position) => {
      let lat = parseFloat(position.coords.latitude);
      let long = parseFloat(position.coords.longitude);
      
      var initialRegion = {
        latitude: lat,
        longitude: long,
        longitudeDelta: LONGITUDE_DELTA,
        latitudeDelta: LATITUDE_DELTA
      }

      this.setState({initialPosition: initialRegion})
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge:1000}
    )

    Geolocation.watchPosition((position) => {
      const watchLong = position.coords.longitude
      const watchLat = position.coords.latitude

      var watchRegion = {
        latitude: watchLat,
        longitude: watchLong,
      }

      this.setState({watchPosition: watchRegion})
    })
  }

  render() {
  return (
    <>
    <Dropdown onPress={() => this.props.navigation.openDrawer()}></Dropdown>
    <MapView 
      style={styles.container}
      region={this.state.initialPosition}
    >
     <Marker coordinate={this.state.watchPosition}/>
     <Circle center={this.state.watchPosition} radius={20000} strokeColor={'rgba(90, 210, 255, 0.1)'} fillColor={'rgba(158, 210, 255, 0.3)'}></Circle>
    </MapView>
    <View style={styles.bottomContainer}>
      <Image style={styles.image} source={require('../assets/images/jobSearch.jpg')}></Image>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonPlaceholder}>START LOOKING FOR JOBS NEAR YOU</Text>
      </View>
    </View>
    </>
  )
  }
}


/*
{this.state.visible = true ?
<View style={styles.popUpContainer}>
  <View style={styles.popUpRectangle}>
    <TouchableOpacity styles={styles.touchableCloser} onpress={() => {this.setState({visible: false})}}>
    <Icon style={styles.closeModal} name={'ios-close'} size={50}></Icon>
    </TouchableOpacity>
    <View style={styles.modalContainer}>
      <TextInput style={styles.modalTextinputs} placeholder='Select your radius' placeholderTextColor={colors.black}></TextInput>
      <TextInput style={styles.modalTextinputs} placeholder='Filter jobs' placeholderTextColor={colors.black}></TextInput>
    </View>
  </View>
</View> 
: null}

<MapView.Marker
coordinate={{latitude: 51.84286700, longitude: 5.85462200}}
title={'JOB'}
>
  <Icon name='ios-briefcase' size={80}></Icon>
</MapView.Marker>
*/


const styles =  StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },

  popUpContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center", 
    zIndex: 2,
  },

  popUpRectangle: {
    width: '80%',
    height: '35%',
    backgroundColor: colors.globalBackgroundColor,
    opacity: 1, 
    borderRadius: 15,
  },

  closeModal: {
    position: 'absolute',
    top: 5,
    right: 17,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  modalTextinputs: {
    backgroundColor: colors.white,
    width: '90%',
    height: 45,
    marginTop: 20,
    borderRadius: borderRadius.globalborderRadius,
    paddingLeft: padding.textinputPadding,
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
  },

  bottomContainer: {
    width: '100%',
    height: 320,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center'
  },

  buttonContainer: {
    width: '80%',
    height: 80,
    backgroundColor: colors.coloredButtonBackgroundColor,
    position: 'absolute',
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },

  buttonPlaceholder: {
    color: colors.white,
    fontSize: 17,
    fontFamily: 'HelveticaNeue-CondensedBlack'
  },

  image: {
    position: 'absolute',
    top: 10,
  }
})
  