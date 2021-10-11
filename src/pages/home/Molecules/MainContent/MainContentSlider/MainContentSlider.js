import './mainContentSlider.scss';
import React, { useState, useEffect } from 'react';
import db from '../../PlayerItems/ListSong';
import { onSnapshot, collection } from 'firebase/firestore';
import MainContentSliderItem from '../../../Atoms/MainContentSliderItem/MainContentSliderItem';

function MainContentSlider() {
  const [listImg, setListImg] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListSlider'), (snapshot) =>
        setListImg(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="list-img">
      {listImg.map((item) => (
        // <div className="img-item">
        <MainContentSliderItem key={item.id} item={item.item} />
        // <img src={item.item} alt=""></img>
        // </div>
      ))}
      <span className="slider-button prev">
        <i className="fas fa-chevron-left"></i>
      </span>
      <span className="slider-button next">
        <i className="fas fa-chevron-right"></i>
      </span>
    </div>
  );
}

export default MainContentSlider;
