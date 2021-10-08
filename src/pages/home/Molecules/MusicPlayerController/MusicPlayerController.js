import './musicPlayerController.scss';
import React, { useState, useEffect } from 'react';

function MusicPlayerController() {
  const [value, onChange] = useState(1);
  useEffect(() => {
    const ele = document.querySelector('.buble');
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });
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
        <span className="time-begin">{value}</span>
        <div className="time-line">
          <input
            type="range"
            min="1"
            max="100"
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
