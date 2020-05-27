import firebase from 'react-native-firebase';


export function addUser(user) {
    firebase.firestore()
    .collection('userName')
    .add(user);
}