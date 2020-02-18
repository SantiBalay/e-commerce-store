import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAn8UXHokhd-bfE3VrRb9d8tSkm8wKOvyM",
    authDomain: "e-commerce-nord.firebaseapp.com",
    databaseURL: "https://e-commerce-nord.firebaseio.com",
    projectId: "e-commerce-nord",
    storageBucket: "e-commerce-nord.appspot.com",
    messagingSenderId: "863233879887",
    appId: "1:863233879887:web:c3c5ba46655f5d401b5f3a",
    measurementId: "G-57R4QR4M95"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase