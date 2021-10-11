import './mainContentSuggestion.scss';
import React, { useState, useEffect } from 'react';
import db from '../../PlayerItems/ListSong';
import { onSnapshot, collection } from 'firebase/firestore';
import MainItem from '../../../Atoms/MainItem/MainItem';

function MainContentSuggestion() {
  const [listItem, setListItem] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListSuggestion'), (snapshot) =>
        setListItem(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="main-suggestion-wrapper">
      <h3>Nhạc Hay Nghe Ngay</h3>
      <div className="main-suggestion">
        {listItem.map((item) => (
          <MainItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MainContentSuggestion;
