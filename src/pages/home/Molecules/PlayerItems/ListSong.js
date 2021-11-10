// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBUrpoLqSTb132jDkkYzys-NsviEp-V_QQ',
  authDomain: 'test-firebase-8c70a.firebaseapp.com',
  projectId: 'test-firebase-8c70a',
  storageBucket: 'test-firebase-8c70a.appspot.com',
  messagingSenderId: '616735380688',
  appId: '1:616735380688:web:1315038254414330e23ad5',
  measurementId: 'G-9HJF44RK1D',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();
