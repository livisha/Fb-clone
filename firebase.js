// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyArYUjY1VsUXdBRvGDYK2Tum9En0zeT87s",
    authDomain: "facebook-clone-303dc.firebaseapp.com",
    projectId: "facebook-clone-303dc",
    storageBucket: "facebook-clone-303dc.appspot.com",
    messagingSenderId: "859425914934",
    appId: "1:859425914934:web:793d012552146af5e4d897",
    measurementId: "G-E2F1NLNSD9"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const dp=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth,provider};
  export default dp;
  