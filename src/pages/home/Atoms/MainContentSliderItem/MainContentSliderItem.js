import './mainContentSliderItem.scss';

function MainContentSliderItem(item) {
  return (
    <div className="slider-item">
      <img src={item.item} alt="" />
    </div>
  );
}

export default MainContentSliderItem;
