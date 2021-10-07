import './App.scss';
import Sidebar from './pages/home/Organisms/SideBar/Sidebar';
import Main from './pages/home/Organisms/Main/Main';
import Player from './pages/home/Organisms/Player/Player';
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
      <Player />
    </div>
  );
}

export default App;
