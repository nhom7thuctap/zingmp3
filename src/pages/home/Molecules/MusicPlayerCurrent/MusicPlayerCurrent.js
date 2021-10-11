import './musicPlayerCurrent.scss';
import React, { useState, useEffect } from 'react';
import db from '../PlayerItems/ListSong';
import { onSnapshot, collection } from 'firebase/firestore';
import PlayerItem from '../../Atoms/PlayerItem/PlayerItem';
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
      <div className="songCurrent">
        {listSong.map((song) => (
          <>{song.isPlay ? <PlayerItem key={song.id} song={song} /> : ''}</>
        ))}
      </div>
    </div>
  );
}

export default MusicPlayerCurrent;