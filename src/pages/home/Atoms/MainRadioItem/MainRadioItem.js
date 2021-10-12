import './mainRadioItem.scss';

function MainRadioItem({ item }) {
  return (
    <div className="radio-item">
      <div className="radio-img">
        <div className="img">
          <img src={item.img} alt="" />
          <div className="blur"></div>
        </div>
        <span className="play-btn">
          <i className="far fa-play-circle"></i>
        </span>

        <div className="thumbnail">
          <img src={item.thumbnail} alt="" />
        </div>
        {item.isLive ? <span className="live">Live</span> : ''}
      </div>
      <h4 className="radio-name">{item.name}</h4>
      <p className="radio-listening">{item.listening}</p>
    </div>
  );
}

export default MainRadioItem;
