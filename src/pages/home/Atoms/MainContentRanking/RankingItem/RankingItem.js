import './rankingItem.scss';

function RankingItem({ song }) {
  const isFirst = song.rankNumber == 1;
  const isSecond = song.rankNumber == 2;
  console.log(isFirst);
  return (
    <div className="ranking-item">
      <h1 className={`number ${isFirst ? 'first' : isSecond ? 'second' : ''}`}>
        {song.rankNumber}
      </h1>
      <div className="thumbnail">
        <img src={song.thumbnail} alt="" />
        <span>
          <i className="fas fa-play"></i>
        </span>
        <div className="img-overlay"></div>
      </div>
      <div className="song-info">
        <h4 className="song-name">{song.name}</h4>
        <p className="song-singer">{song.singer}</p>
      </div>
      <span className="percent">{song.percent}%</span>
      <div className="overlay"></div>
    </div>
  );
}

export default RankingItem;
