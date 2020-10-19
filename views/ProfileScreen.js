import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity
  } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import ImagePicker from 'react-native-image-picker';

import colors from '../sources/colors.js'
import SettingsChild from '../components/SettingsChild.js'
import Dropdown from '../components/Dropdown.js';
import Home from '../components/Home.js';

import firebase from 'firebase';

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: '',
    };
  }

  /*
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
            this.setState({userName: user.displayName}) ,
            this.setState({userPicture: user.photoURL})
        }
    )
  }
  */
 
  //Set's new profile image
  chooseFile = () => {
    var options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);

      } else {
        let source = response;
        alert(source)
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source.uri,
        });
      }
    });
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Dropdown onPress={() => this.props.navigation.openDrawer()}></Dropdown>
        <Home onPress={() => this.props.navigation.navigate('Home')}></Home>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={this.chooseFile.bind(this)}>
            <Image style={styles.profilePicture} source={{uri: this.state.filePath}}></Image>
            <View style={styles.addProfilePicture}><Icon style={{color: 'white'}} name={'md-add'} size={22}></Icon></View>
          </TouchableOpacity>
          <Text style={styles.profileName}>Lennart</Text>
          <View style={styles.line}></View>
          <View style={styles.profileDetailsContainer}>
            <View style={styles.profileDetails}>
              <Text style={styles.profileDetailsValue}>$443,67</Text>
              <Text style={styles.profileDetailsTitle}>Revenue</Text>
            </View>
            <View style={styles.vrLine}></View>
            <View style={styles.profileDetails}>
              <Text style={styles.profileDetailsValue}>0</Text>
              <Text style={styles.profileDetailsTitle}>Total Jobs</Text>
            </View>
          </View>
        </View>
        <Text style={styles.declareSetting}>Privacy</Text>
        <SettingsChild icon={'md-contact'} title={'Profile'} subTitle={'Username, Email, Phone Number'}></SettingsChild>
        <Text style={styles.declareSetting}>History</Text>
        <SettingsChild icon={'ios-archive'} title={'Job History'} subTitle={'View your previous accepted jobs'}></SettingsChild>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: colors.globalBackgroundColor,
    },

    topContainer: {
      width: '100%',
      height: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.black,
    },

    profileDetailsContainer: {
      width: '90%',
      height: 80,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },

    profileDetails: {
      alignItems: 'center',
    },

    profileDetailsValue: {
      marginBottom: 5,
      fontSize: 24,
      color: colors.white,
    },

    profileDetailsTitle: {
      color: colors.placeholderBorderColor,
      fontFamily: 'Helvetica-bold',
      fontSize: 18,
    },

    profilePicture: { 
      width: 150,
      height: 150,
      borderRadius: 75,
      backgroundColor: '#dedede',
      top: 45,
      borderColor: colors.white
    },

    addProfilePicture: {
      width: 40, 
      height: 40, 
      borderRadius: 20, 
      backgroundColor: '#4287f5', 
      right: -105, 
      justifyContent: 'center', 
      alignItems: 'center'
    },

    profileName: {
      color: colors.white,
      fontSize: 20,
      marginTop: 15,
    },

    selectedProfileImage: {
      flex: 1,
      alignSelf: 'stretch',
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

    declareSetting: {
      color: colors.subTitleColor,
      marginLeft: 20,
      marginTop: 40,
      marginBottom: 20,
      fontSize: 18,
      fontFamily: 'Helvetica-Bold'
    },

    line: {
      width: '90%',
      height: 1,
      backgroundColor: colors.white,
      marginTop: 20,
    },

    vrLine: {
      height: '40%',
      width: 1,
      backgroundColor: colors.white
    }

})
