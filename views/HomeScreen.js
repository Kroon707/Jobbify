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
    Settings,
    TouchableHighlight,
    Modal
  } from 'react-native';

import colors from '../sources/colors.js';
import padding from '../sources/padding.js'
import borderRadius from '../sources/borderRadius.js'
import Dropdown from '../components/Dropdown.js'
import SettingsChild from '../components/SettingsChild.js'

import MapView, {PROVIDER_GOOGLE, Marker, Circle, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import Icon from 'react-native-vector-icons/Ionicons';
import Emoji from 'react-native-emoji'

import firebase from 'firebase'
import initializeDatabase from '../database/FirebaseDatabase.js';

const {width, height} = Dimensions.get('window')
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.03;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class HomeScreen extends React.Component {
  state = {
    longitude: 0,
    latitude: 0,
    location: null,
    date: '',
    visibleModal: false,
    initialPosition: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 2,
      longitudeDelta: 2
    },
    jobs: [],
    pushing: true,
    watchLat: 0,
    watchLong: 0,
  };

  componentDidMount() {
    //Initialize firebase database
    initializeDatabase();

    //Watch user posittion for initial map region
    Geolocation.watchPosition((position) => {
      const watchLong = position.coords.longitude
      const watchLat = position.coords.latitude
      this.setState({watchLat: watchLat})
      this.setState({watchLong: watchLong})
    })
    this.queryingJobs()
    this.refreshMarkers()
  }
    /*

    await firebase.database().ref('/jobs/-MDASDggHNR301jY4coR/longitude').once('value', (data) => {
      this.setState({longitude: data.val()})
    });

    await firebase.database().ref('/jobs/-MDASDggHNR301jY4coR/latitude').once('value', (data) => {
      this.setState({latitude: data.val()})
    });


    Geolocation.getCurrentPosition((position) => {
      let lat = parseFloat(position.coords.latitude);
      let long = parseFloat(position.coords.longitude);
      
      var initialRegion = {
        latitude: lat,
        longitude: long,
      }

      this.setState({initialPosition: initialRegion})
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge:1000}
    )

  
  }
  */

  queryingJobs() {
    this.setState({jobs: []})
    // Querying all available jobs
    firebase.database()
    .ref('/jobs')
    .orderByKey()
    .on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        let jobInfo = { 
          details: childSnapshot.child('details').val(),
          title: childSnapshot.child('title').val(),
          latitude: childSnapshot.child('latitude').val(),
          longitude: childSnapshot.child('longitude').val(),
          price: childSnapshot.child('price').val()
        }
        this.state.jobs.push(jobInfo)
        this.setState({pushing: false})
    })
    })
  }


  async renderMarkers() {
    let markers = [];
    markers = this.state.jobs.map(jobitem => (
      <Marker coordinate={{latitude: jobitem.latitude, longitude: jobitem.longitude}}>
        <Callout>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Icon style={styles.calloutIcon} name={'md-briefcase'} size={30}></Icon>
              <View style={{marginLeft: 15}}>
              <Text style={styles.calloutTitle}>{jobitem.title}</Text>
              <Text style={styles.calloutTimestamp}>18:00:00</Text>
              </View>
              <Icon style={styles.calloutForwardIcon} name={'ios-arrow-forward'} size={30}></Icon>
            </View>
        </Callout>
      </Marker>
    ) 
    )
    this.setState({markers})
  }
  refreshMarkers() {
    this.queryingJobs()
    this.renderMarkers().then(() => {
      this.forceUpdate();
    });
  }

  render() {
  //if(this.state.pushing) {return null}
  return (
    <View style={{flex: 1}}>
    <Dropdown onPress={() => {this.props.navigation.openDrawer()}}></Dropdown>
    <TouchableOpacity
      onPress={() => {this.refreshMarkers()}}
      style={styles.refreshButton}>
      <Text>Refresh Markers</Text>
    </TouchableOpacity>
    <MapView 
      style={styles.container}
      initialRegion={{
        latitude: this.state.watchLat,
        longitude: this.state.watchLong,
        latitudeDelta: 20,
        longitudeDelta: 20,
      }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
    >
      {this.state.markers}
    </MapView>
    <View style={styles.bottomContainer}>
      <Image style={styles.image} source={require('../assets/images/jobSearch.jpg')}></Image>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.refreshMarkers()}}>
        <Text style={styles.buttonPlaceholder}>START LOOKING FOR JOBS NEAR YOU</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
  }
}


/*
<Circle center={this.state.watchPosition} radius={2000} strokeColor={'rgba(90, 210, 255, 0.1)'} fillColor={'rgba(158, 210, 255, 0.3)'}></Circle>
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

/*

 <View style={{zIndex: 2, width: '100%', height: '100%', backgroundColor: colors.globalBackgroundColor, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', backgroundColor: '#000000', height: '16%', width: '100%', alignItems: 'center', paddingLeft: 40, paddingTop: 20}}>
          <Icon name={'md-briefcase'} size={45} style={{color: '#ffffff'}}></Icon>
          <View style={{marginLeft: 15}}>
            <Text style={{fontSize: 35, color: '#ffffff'}}>Mowing Grass</Text>
            <Text style={{color: colors.globalBackgroundColor}}>SkinnyPenis123</Text>
          </View>
        </View>
        <View style={{width: '90%', height: '10%', backgroundColor: '#ffffff', marginTop: 30, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderWidth: 1, borderColor: colors.lineColor}}>
          <Text style={{marginRight: 27}}>Nederland, Wijchen, Bullekamp 20</Text>
          <View style={{width: 1, height: '60%', backgroundColor: colors.lineColor}}></View>
          <Emoji name={'flag-nl'} style={{fontSize: 35, marginLeft: 27}}></Emoji>
        </View>
        <View style={{width: '90%', height: '10%', backgroundColor: '#ffffff', marginTop: 20, alignItems: 'center', paddingLeft: 30, flexDirection: 'row', borderWidth: 1, borderColor: colors.lineColor}}>
          <Icon name={'logo-euro'} size={20}></Icon>
          <Text style={{fontSize: 20, marginLeft: 10}}>15,45</Text>
        </View>
        <View style={{width: '90%', height: '40%', backgroundColor: '#ffffff', marginTop: 20, padding: 15, borderWidth: 1, borderColor: colors.lineColor}}>
          <Text>dwadwadwadwadwdwadwadwadnwadnwanidwaidniwanjhidwahidwaiodhwadiowahdoiwadhwaiodhwaiodhwaodiwahdiowahdwahdiwahdwaiohdiohwaoihdaiodsfbvdsbvbvsdbirniovobdsbodvbfsovbndsvsdihfivohcvoidschdvbfebcxvbcv,cbjvklvfdbjpvbfvbvhoicnjdsklvbdso[vdbvesfbueasdofdabofesbfrsdsbjkbdsvwbebsbuvbdsbvdsvb rbvdsvdsvhfsbinesdhdsvpjdsjvodshdosvphdshsvbfdsabvafdsjvbdasvjabjvdbjvsbdisofhesioFHLDK;hveifhkdchisefhdishk;fhefi;esiohfh;ieshifehs;iofhisvkl;hvisdvlhbdfsbiavhoifshirsigiosbiovdsobidiwaindniwadinowainoda</Text>
        </View>
        <View style={{flexDirection: 'row', height: '7%'}}>
          <TouchableOpacity style={{width: '43%', height: '100%', backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginRight: '2%', borderRadius: 2, borderWidth: 2, borderColor: '#000000'}}>
            <Text style={{color: '#000000'}}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '43%', height: '100%', backgroundColor: '#000000', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginRight: '2%', borderRadius: 2}}>
            <Text style={{color: '#ffffff'}}>ACCEPT JOB</Text>
          </TouchableOpacity>
      </View>
    </View>
*/


const styles =  StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },

  jobContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
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

  refreshButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '14%',
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
  },

  calloutIcon: {
    marginLeft: 7,
  },

  calloutTitle: {
    fontSize: 18,
  },

  calloutTimestamp: {
    fontSize: 15,
    color: '#6e6e6e'
  },

  calloutForwardIcon: {
    marginLeft: 15,
    marginRight: 10
  }
})
  