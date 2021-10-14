import './mainContentRadio.scss';
import MainRadioItem from '../../../Atoms/MainRadioItem/MainRadioItem';
import React, { useState, useEffect } from 'react';
import db from '../../PlayerItems/ListSong';
import { onSnapshot, collection } from 'firebase/firestore';

function MainContentRadio(className) {
  const [listRadio, setListRadio] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListRadio'), (snapshot) =>
        setListRadio(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );
  return (
    <div className={`main-radio ${className}`}>
      <h2>Radio Nổi bật</h2>
      <div className="main-radio-wrapper">
        <span className="radio-button prev">
          <i className="fas fa-chevron-left"></i>
        </span>
        <span className="radio-button next">
          <i className="fas fa-chevron-right"></i>
        </span>
        {listRadio.map((item) => (
          <MainRadioItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MainContentRadio;
