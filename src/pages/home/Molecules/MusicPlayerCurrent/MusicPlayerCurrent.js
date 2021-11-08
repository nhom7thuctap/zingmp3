import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import PlayerItem from '../../Atoms/PlayerItem/PlayerItem';
import db from '../PlayerItems/ListSong';
import './musicPlayerCurrent.scss';
// import CurrentSong from '../PlayerCurrent/CurrentSong';

function MusicPlayerCurrent() {
  const [listSong, setListSong] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListSong'), (snapshot) =>
        setListSong(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="musicPlayer-current">
      {listSong.map((song) => (
        <div key={song.id}>
          {song.isPlay ? (
            <PlayerItem className="music-player" song={song} />
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  );
}

export default MusicPlayerCurrent;
