import './mainContentXone.scss';
import React, { useState, useEffect } from 'react';
import db from '../../PlayerItems/ListSong';
import { onSnapshot, collection } from 'firebase/firestore';
import MainItem from '../../../Atoms/MainItem/MainItem';
// import ListXone from './ListXone';

function MainContentXone() {
  const [listItem, setListItem] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListSuggestion'), (snapshot) =>
        setListItem(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="main-xone-wrapper">
      <h3>XONE's CORNER</h3>
      <div className="main-xone">
        {listItem.map((item) => (
          <MainItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MainContentXone;
