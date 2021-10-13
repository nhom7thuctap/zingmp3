import './playerItem.scss';

// function create
function PlayerItem({ song, className }) {
  return (
    <div
      className={`player-song-item ${className}
       ${song.isPlay ? 'song-active' : ''}`}
    >
      <div className="song-image">
        <img src={song.thumbnail} alt=""></img>
        <i className="play-icon fas fa-play"></i>
      </div>
      <div className="song-info">
        <p className="song-name">{song.name}</p>
        <a href="./">
          <span className="song-singer">{song.singer}</span>
        </a>
      </div>
      <div className="song-btn">
        <i className="option-icon far fa-heart song-btn-icon">
          <span>Thêm vào thư viện</span>
        </i>
        <i className="option-icon fas fa-ellipsis-h song-btn-icon">
          <span>Khác</span>
        </i>
      </div>
    </div>
  );
}

export default PlayerItem;
