import './player.scss';
import PlayerTopbar from '../../Molecules/PlayerTopbar/PlayerTopbar';
import PlayerCurrent from '../../Molecules/PlayerCurrent/PlayerCurrent';
import PlayerItems from '../../Molecules/PlayerItems/PlayerItems';
function Player() {
  return (
    <div className="player">
      <PlayerTopbar />
      <PlayerCurrent />
      <div className="next-info">
        <h4>Tiếp theo</h4>
        <p>
          Từ playlist <span>Nhạc Việt Tháng 10/2021</span>
        </p>
      </div>
      <PlayerItems />
    </div>
  );
}

export default Player;
