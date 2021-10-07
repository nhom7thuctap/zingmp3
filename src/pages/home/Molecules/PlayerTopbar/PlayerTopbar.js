import './playerTopbar.scss';

function PlayerTopbar() {
  return (
    <div className="player-topbar-wrapper">
      <ul className="player-toggle">
        <li className="player-toggle-acticve">Danh sách phát</li>
        <li>Nghe gần đây</li>
      </ul>
      <i className="far fa-clock"></i>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default PlayerTopbar;
