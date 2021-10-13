import './musicPlayer.scss';
import MusicPlayerCurrent from '../../Molecules/MusicPlayerCurrent/MusicPlayerCurrent';
import MusicPlayerController from '../../Molecules/MusicPlayerController/MusicPlayerController';
import MusicPlayerOptions from '../../Molecules/MusicPlayerOptions/MusicPlayerOptions';

function MusicPlayer() {
  return (
    <div className="musicPlayer-wrapper">
      <div className="musicPlayer">
        <MusicPlayerCurrent />
        <MusicPlayerController />
        <MusicPlayerOptions />
      </div>
    </div>
  );
}

export default MusicPlayer;
