import './mainContentRanking.scss';
import RankingItem from './RankingItem/RankingItem';
import React, { useState, useEffect } from 'react';
import db from '../../Molecules/PlayerItems/ListSong';
import { onSnapshot, collection } from 'firebase/firestore';
import Button from '../Button/Button';

function MainContentRanking() {
  const [listRank, setListRank] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListRank'), (snapshot) =>
        setListRank(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="ranking-list">
      {listRank.map((song) => (
        <RankingItem key={song.id} song={song} />
      ))}
      <Button className="more" text="Xem thêm" />
    </div>
  );
}

export default MainContentRanking;
