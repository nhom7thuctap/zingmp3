import './mainContentSlider.scss';
import MainContentSliderItem from '../../../Atoms/MainContentSliderItem/MainContentSliderItem';

function createListImg(list) {
  const listImg = list.map((index, key) => {
    return <MainContentSliderItem key={key} item={index.item} />;
  });
  return listImg;
}
function MainContentSlider(props) {
  const listImg = createListImg(props.listImg);
  return (
    <div className="list-img">
      {listImg}
      <span className="slider-button prev">
        <i className="fas fa-chevron-left"></i>
      </span>
      <span className="slider-button next">
        <i className="fas fa-chevron-right"></i>
      </span>
    </div>
  );
}

export default MainContentSlider;
