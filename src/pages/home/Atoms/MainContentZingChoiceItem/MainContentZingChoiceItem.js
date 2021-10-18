import './mainContentZingChoiceItem.scss';

function MainContentZingChoiceItem({ item }) {
  return (
    <div className="zing-choice-item">
      <img className="background-img" src={item.img} alt="" />
      <span className="btn-play">
        <i className="far fa-play-circle"></i>
      </span>
      <div className="overlay"></div>
      <div className="zing-choice-content">
        <h4 className="title">{item.title}</h4>
        <h1 className="singer">{item.singer}</h1>
        <ul>
          <li className="thumbnail">
            <img className="thumbnail-img" src={item.thumbnail} alt="" />
          </li>
          <li className="thumbnail">
            <img className="thumbnail-img" src={item.thumbnail} alt="" />
          </li>
          <li className="thumbnail">
            <img className="thumbnail-img" src={item.thumbnail} alt="" />
          </li>
          <li className="thumbnail">
            <img className="thumbnail-img" src={item.thumbnail} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainContentZingChoiceItem;
