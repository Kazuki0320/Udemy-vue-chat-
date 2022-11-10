import firebase from 'firebase';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBesweuiqi7lGc1VXJxQa1-hWABYaS4whI",
  authDomain: "vue-chat-5cb8f.firebaseapp.com",
  projectId: "vue-chat-5cb8f",
  storageBucket: "vue-chat-5cb8f.appspot.com",
  messagingSenderId: "1059460538203",
  appId: "1:1059460538203:web:483baa122ba053c24f447e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;