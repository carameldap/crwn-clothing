// add in config object
import firebase from "firebase";

import "firebase/firestore"; //database
import "firebase/auth"; //authentication

const config = {
  apiKey: "AIzaSyAXIK2xBLle4aRYX-YDL703tqOigqt-SVc",
  authDomain: "crwn-db-58736.firebaseapp.com",
  databaseURL: "https://crwn-db-58736.firebaseio.com",
  projectId: "crwn-db-58736",
  storageBucket: "crwn-db-58736.appspot.com",
  messagingSenderId: "857853713131",
  appId: "1:857853713131:web:589fdfab0fdd2cbaadbcae",
  measurementId: "G-7TVJMSMLTN"
};

/**********************************************************************************
Firebase App named '[DEFAULT]' already exists (app/duplicate-app)
issue is due to calling the initialize method of firebase more than multiple times 
**********************************************************************************/
firebase.initializeApp(config);

//restrict callling more than once to fix issue
/*export default (!firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore());*/

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
