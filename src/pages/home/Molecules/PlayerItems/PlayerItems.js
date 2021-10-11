import './playerItems.scss';
import React, { useState, useEffect } from 'react';
import db from './ListSong';
import { onSnapshot, collection } from 'firebase/firestore';
import PlayerItem from '../../Atoms/PlayerItem/PlayerItem';
// import PlayerListItem from './PlayerListItem';

function PlayerItems() {
  const [listSong, setListSong] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListSong'), (snapshot) =>
        setListSong(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  function createListSong() {
    const song = listSong.map((song) => {
      return song.isPlay ? '' : <PlayerItem key={song.id} song={song} />;
    });
    return song;
  }
  return (
    <div className="list-song-item">
      {/* {listSong.map((song) => (
        <>{song.isPlay ? '' : <PlayerItem key={song.id} song={song} />}</>
      ))} */}
      {createListSong(listSong)}
      {createListSong(listSong)}
      {createListSong(listSong)}
      {createListSong(listSong)}
      {createListSong(listSong)}
    </div>
  );
}

export default PlayerItems;
