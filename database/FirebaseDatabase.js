import firebase from 'firebase'

function initializeDatabase() {
    const config = {
        apiKey: 'AIzaSyCGZgnNn2ugygmv0pNCkyF4stisqPIONsc',
        authDomain: 'jobbify-273ae.firebaseapp.com',
        projectId: 'jobbify-273ae',
        databaseURL: 'https://jobbify-273ae.firebaseio.com'
    };

    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
}

export default initializeDatabase
  