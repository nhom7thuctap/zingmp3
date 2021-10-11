import './playerCurrent.scss';
import React, { useState, useEffect } from 'react';
import db from '../PlayerItems/ListSong';
import { onSnapshot, collection } from 'firebase/firestore';
import PlayerItem from '../../Atoms/PlayerItem/PlayerItem';

function PlayerCurrent() {
  const [listSong, setListSong] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListSong'), (snapshot) =>
        setListSong(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <div className="songCurrent">
      {listSong.map((song) => (
        <>{song.isPlay ? <PlayerItem key={song.id} song={song} /> : ''}</>
      ))}
    </div>
  );
}

export default PlayerCurrent;