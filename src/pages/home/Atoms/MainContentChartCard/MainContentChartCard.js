import './mainContentChartCard.scss';

function MainContentChartCard(props) {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img className="background" src={props.img} alt="" />
        <div className="overlay"></div>
        <div className="card-item">
          <span className="hastag">#zingchart tuần</span>
          <h1 className="title">{props.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default MainContentChartCard;
