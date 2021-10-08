import './musicPlayerOptions.scss';
import { useState } from 'react';

function MusicPlayerOptions() {
  const [value, onChange] = useState(1);
  return (
    <div className="musicPlayer-options">
      <ul className="icon">
        <li>
          <img src="http://cdn.onlinewebfonts.com/svg/img_224993.png" alt="" />
        </li>
        <li>
          <i class="fas fa-microphone-alt"></i>
        </li>
        <li>
          <i class="far fa-window-maximize"></i>
        </li>
        <li>
          <i class="fas fa-volume-up"></i>
        </li>
      </ul>

      <input
        type="range"
        min="1"
        max="100"
        value={value}
        onChange={({ target: { value: radius } }) => {
          onChange(radius);
        }}
        className="seekbar"
      ></input>
    </div>
  );
}

export default MusicPlayerOptions;
