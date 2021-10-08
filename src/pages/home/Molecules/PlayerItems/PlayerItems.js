import './playerItems.scss';
import PlayerListItem from './PlayerListItem';

function PlayerItems() {
  return (
    <div className="list-song-item">
      <PlayerListItem />
      <PlayerListItem />
    </div>
  );
}

export default PlayerItems;
