import './mainItem.scss';

const MainItem = ({ item }) => {
  return (
    <div className="main-item">
      <div className="item-img">
        <div className="img-btn-wrapper">
          <div className="img-btn">
            <i className="far fa-heart"></i>
            <span className="desc longer">Thêm vào thư viện</span>
          </div>
          <div className="img-btn-center">
            <i className="far fa-play-circle"></i>
          </div>
          <div className="img-btn">
            <i className="fas fa-ellipsis-h"></i>
            <span className="desc">Khác</span>
          </div>
        </div>
        <img src={item.img} alt="" />
        <div className="overlay"></div>
      </div>
      <h4>{item.title}</h4>
      <p>{item.desc}</p>
    </div>
  );
};

export default MainItem;
