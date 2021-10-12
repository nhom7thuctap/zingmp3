import './playerItem.scss';

// function create
function PlayerItem({ song }) {
  return (
    <div
      className={`player-song-item ${song.className}
       ${song.isPlay ? 'song-active' : ''}`}
    >
      <div className="song-image">
        <img src={song.thumbnail} alt=""></img>
        <i className="fas fa-play"></i>
      </div>
      <div className="song-info">
        <p className="song-name">{song.name}</p>
        <a href="./">
          <span className="song-singer">{song.singer}</span>
        </a>
      </div>
      <div className="song-btn">
        <i className="far fa-heart song-btn-icon">
          <span>Thêm vào thư viện</span>
        </i>
        <i className="fas fa-ellipsis-h song-btn-icon">
          <span>Khác</span>
        </i>
      </div>
    </div>
  );
}

export default PlayerItem;
