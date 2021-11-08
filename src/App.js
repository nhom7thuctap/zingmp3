import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Sidebar from './pages/home/Organisms/SideBar/Sidebar';
import MainExplore from './pages/home/Organisms/Main/MainExplore/MainExplore';
import MainZingChart from './pages/home/Organisms/Main/MainZingChart/MainZingChart';
import MainRadio from './pages/home/Organisms/Main/MainRadio/MainRadio';
import Player from './pages/home/Organisms/Player/Player';
import MainHeader from './pages/home/Molecules/MainHeader/MainHeader';
import MusicPlayer from './pages/home/Organisms/MusicPlayer/MusicPlayer';
import MainFollow from './pages/home/Organisms/Main/MainFollow/MainFollow';
import { MainListUser } from './pages/home/Organisms/Main/MainListUser/MainListUser';
import User from './pages/home/Organisms/Main';
import MainPersonal from './pages/home/Organisms/Main/MainPersonal/MainPersonal';

function App() {
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
            {/* <Route
              path="/personal/:userId"
              component={(props) => <SignupPage {...props} />}
            /> */}
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
