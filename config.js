import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAX-FGf_kKrG6BwlMi19gPsBCLbsll4tYU",
  authDomain: "reactnativettest.firebaseapp.com",
  projectId: "reactnativettest",
  storageBucket: "reactnativettest.appspot.com",
  messagingSenderId: "529905521924",
  appId: "1:529905521924:web:77e44f09b32d049a34ac51",
  measurementId: "G-Y68YBEECTN"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};
