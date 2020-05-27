import firebase from 'firebase'

export default class FireBase {
    constructor() {
        this.init();
      }
     
    //Initialize database

    init = () =>
    firebase.initializeApp({
        apiKey: 'AIzaSyCGZgnNn2ugygmv0pNCkyF4stisqPIONsc',
        authDomain: 'chatter-b85d7.firebaseapp.com',
        databaseURL: 'https://jobbify-273ae.firebaseio.com',
        projectId: 'jobbify-273ae',
        storageBucket: '',
        messagingSenderId: '857289498527',
    });
}