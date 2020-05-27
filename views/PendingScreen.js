import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TouchableOpacity
  } from 'react-native';

import colors from '../sources/colors.js';
import Dropdown from '../components/Dropdown.js';
import Home from '../components/Home.js';

import Icon from 'react-native-vector-icons/Ionicons'


  const Pending = props => (
    <View style={styles.jobContainer}>
          <Icon style={{marginLeft: 20}} name={'md-briefcase'} size={50}></Icon>
          <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 20}}>Doing the dishes</Text>
          <Text style={{color: '#a1a1a1', marginTop: 4}}>4:13:45</Text>
          </View>
          <View style={{height: 60, width: 1, backgroundColor: '#878787', marginLeft: 30}}></View>
          <View style={{marginLeft: 30,}}>
            <Icon color='#000000' name={'ios-checkmark-circle'} size={40}></Icon>
            <Icon color='#000000' name={'ios-close-circle-outline'} size={40}></Icon>
          </View> 
    </View>
  )
   
export default class PendingScreen extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }

  addTodo() {
    const text = 'Hey'
    this.setState({
      todos: [
        ...this.state.todos, {text: text}
      ]
    })
  }
  render() {
    return (
      <>
        <Dropdown onPress={() => this.props.navigation.openDrawer()}></Dropdown>
        <Home onPress={() => this.props.navigation.navigate('Home')}></Home>
        <Button styles={{marginTop: 200, backgroundColor: 'red'}} title='pressME' onPress={() => this.addTodo()}></Button>
        <ScrollView alignItems='center' style={[styles.fill, styles.scrollviewContainer]}>
          {this.state.todos.map(todo =>
          <Pending></Pending>
            )}
        </ScrollView>
      </>
    )
  }
}
    

/*
  {this.state.todos.map(todo => 
    <Text>Hello</Text>
    )}
    */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.globalBackgroundColor,
  },

  fill: {
    width: '100%',
    height: '100%',
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

  jobContainer: {
    flexDirection: 'row',
    width: '85%',
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: 40,
  },
})

