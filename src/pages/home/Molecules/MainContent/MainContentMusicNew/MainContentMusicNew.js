import './mainContentMusicNew.scss';
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

function MainContentMusicNew() {
  const [listItem, setListItem] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListSuggestion'), (snapshot) =>
        setListItem(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="music-new-wrapper">
      <h2 className="title">nhạc mới mỗi ngày</h2>
      <div className="music-new-list">
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

export default MainContentMusicNew;
