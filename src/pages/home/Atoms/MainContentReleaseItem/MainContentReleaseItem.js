import './mainContentReleaseItem.scss';

function MainContentReleaseItem({ item }) {
  return (
    <div className="release-item">
      <div className="release-img">
        <img src={item.img} alt="" />
        <div className="overlay"></div>
        <span>
          {' '}
          <i className="far fa-play-circle"></i>
        </span>
      </div>
      <div className="release-content">
        <h3 className="title">{item.title}</h3>
        <p className="singer">{item.singer}</p>
        <span className="ranking">#{item.ranking}</span>
        <span className="date">{item.date}</span>
      </div>
    </div>
  );
}

export default MainContentReleaseItem;
