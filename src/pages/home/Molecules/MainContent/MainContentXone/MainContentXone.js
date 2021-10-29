import './mainContentXone.scss';
import React, { useState, useEffect } from 'react';
import db from '../../PlayerItems/ListSong';
import { onSnapshot, collection } from 'firebase/firestore';
import MainItem from '../../../Atoms/MainItem/MainItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/';
SwiperCore.use([Navigation, Autoplay]);

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
        <Swiper spaceBetween={30} slidesPerView={5}>
          {listItem.map((item) => (
            <SwiperSlide key={item.id}>
              <MainItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MainContentXone;
