import firebase from 'firebase';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import SingIn from './Auth/pages/SignIn/SingIn';
import MainHeader from './pages/home/Molecules/MainHeader/MainHeader';
import User from './pages/home/Organisms/Main';
import MainExplore from './pages/home/Organisms/Main/MainExplore/MainExplore';
import MainFollow from './pages/home/Organisms/Main/MainFollow/MainFollow';
import { MainListUser } from './pages/home/Organisms/Main/MainListUser/MainListUser';
import MainPersonal from './pages/home/Organisms/Main/MainPersonal/MainPersonal';
import MainRadio from './pages/home/Organisms/Main/MainRadio/MainRadio';
import MainZingChart from './pages/home/Organisms/Main/MainZingChart/MainZingChart';
import MusicPlayer from './pages/home/Organisms/MusicPlayer/MusicPlayer';
import Player from './pages/home/Organisms/Player/Player';
import Sidebar from './pages/home/Organisms/SideBar/Sidebar';

const config = {
  apiKey: 'AIzaSyBUrpoLqSTb132jDkkYzys-NsviEp-V_QQ',
  authDomain: 'test-firebase-8c70a.firebaseapp.com',
};
firebase.initializeApp(config);

function App() {
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          console.log('user is not logged in');
          return;
        }
        console.log('Logged in user: ', user.displayName);
        const token = await user.getIdToken();
        console.log('loged in user token: ', token);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="main">
          <MainHeader />
          <Switch>
            <Redirect exact from="/" to="/explore" />

            <Route
              path="/explore"
              exact
              component={(props) => <MainExplore {...props} />}
            />
            <Route path="/users" component={User} />
            <Route
              path="/personal"
              component={(props) => <MainPersonal {...props} />}
            />
            <Route path="/login" component={(props) => <SingIn {...props} />} />
            <Route
              path="/zingchart"
              component={(props) => <MainZingChart {...props} />}
            />
            <Route
              path="/radio"
              component={(props) => <MainRadio {...props} />}
            />
            <Route
              path="/follow"
              component={(props) => <MainFollow {...props} />}
            />
            <Route
              path="/user"
              component={(props) => <MainListUser {...props} />}
            />
          </Switch>
        </div>
        <Player />
        <MusicPlayer />
      </Router>
    </div>
  );
}

export default App;
