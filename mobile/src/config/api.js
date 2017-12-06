import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC2We8oW-ilhF_Wyj25Dr0N4WFffOSBOFM",
    authDomain: "votest-auth.firebaseapp.com",
    databaseURL: "https://votest-auth.firebaseio.com",
    projectId: "votest-auth",
    storageBucket: "votest-auth.appspot.com",
    messagingSenderId: "969326204563"
};
export const firebaseApp = firebase.initializeApp(config);