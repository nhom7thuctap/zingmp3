import React, { useEffect, useState } from 'react';
import './musicPlayerController.scss';

function MusicPlayerController() {
  const [value, onChange] = useState(0);
  useEffect(() => {
    const ele = document.querySelector('.buble');
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });
  const isHaveZero1 = Math.floor(value / 60).toString().length < 2;
  const isHaveZero2 = (value % 60).toString().length < 2;
  return (
    <div className="musicPlayer-controller">
      <ul className="controller-btn">
        <li>
          <span>
            <i className="fas fa-random"></i>
            <span>Bật phát ngẫu nhiên</span>
          </span>
        </li>
        <li>
          <span>
            <i className="fas fa-step-backward"></i>
          </span>
        </li>
        <li>
          <span>
            <i className="far fa-play-circle"></i>
          </span>
        </li>
        <li>
          <span>
            <i className="fas fa-step-forward"></i>
          </span>
        </li>
        <li>
          <span>
            <i className="fas fa-retweet"></i>
            <span>Bật phát lại tất cả</span>
          </span>
        </li>
      </ul>

      <div className="musicPlayer-timeLine">
        <span className="time-begin">
          {isHaveZero1 ? '0' : ''}
          {Math.floor(value / 60)}:{isHaveZero2 ? '0' : ''}
          {value % 60}
        </span>
        <div className="time-line">
          <input
            type="range"
            min="1"
            max="300"
            value={value}
            onChange={({ target: { value: radius } }) => {
              onChange(radius);
            }}
          />
        </div>
        <span className="time-end">05:00</span>
      </div>
    </div>
  );
}

export default MusicPlayerController;
