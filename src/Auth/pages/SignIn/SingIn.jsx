import React from 'react';
import firebase from 'firebase';
import { StyledFirebaseAuth } from 'react-firebaseui';

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'redirect',
  signInSuccesUrl: '/personal',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SingIn() {
  return (
    <div>
      <div className="text-center" style={{ color: '#fff' }}>
        <h2>Login Form</h2>
        <p>or login with social accounts</p>
      </div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SingIn;
