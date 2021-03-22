import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBTxn6jGbjzsX3MVRpMoDn3kWKp_x4qBIo",
    authDomain: "reactjs-crud-f8c81.firebaseapp.com",
    projectId: "reactjs-crud-f8c81",
    storageBucket: "reactjs-crud-f8c81.appspot.com",
    messagingSenderId: "68668144019",
    appId: "1:68668144019:web:f9e13830fc80d31f69d066"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)