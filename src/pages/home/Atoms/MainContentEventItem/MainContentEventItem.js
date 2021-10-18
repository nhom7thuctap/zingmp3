import './mainContentEventItem.scss';
import Button from '../Button/Button';

function MainContentEventItem({ item }) {
  return (
    <div className="event-item">
      <div className="event-img">
        <img src={item.img} alt="" />
        <div className="text-wrapper">
          <span className="tag">{item.tag}</span>
          <h4 className="title">{item.title}</h4>
          <p className="desc">{item.desc}</p>
        </div>
      </div>
      <div className="event-more-info">
        <div className="care">
          <h5 className="care-title">Lượt quan tâm</h5>
          <ul>
            <li>
              {' '}
              <img src="./images/radio1.jpg" alt="" />
            </li>
            <li>
              {' '}
              <img src="./images/radio2.jpg" alt="" />
            </li>
            <li>
              {' '}
              <img src="./images/radio3.jpg" alt="" />
            </li>
            <li>
              {' '}
              <img src="./images/radio4.jpg" alt="" />
            </li>
            <li>
              {' '}
              <img src="./images/radio5.jpg" alt="" />
            </li>
            <li>
              {' '}
              <img src="./images/radio6.jpg" alt="" />
            </li>
            <span className="plus"> + {item.care}</span>
          </ul>
        </div>
        <Button className="event-btn" text="chúc mừng" />
      </div>
    </div>
  );
}

export default MainContentEventItem;
