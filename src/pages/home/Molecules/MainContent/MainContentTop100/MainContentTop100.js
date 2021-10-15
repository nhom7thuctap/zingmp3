import './mainContentTop100.scss';
import React, { useState, useEffect } from 'react';
import db from '../../PlayerItems/ListSong';
import { onSnapshot, collection } from 'firebase/firestore';
import MainItem from '../../../Atoms/MainItem/MainItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation, Autoplay]);

function MainContentTop100() {
  const [listItem, setListItem] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListSuggestion'), (snapshot) =>
        setListItem(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="top-100-wrapper">
      <h3>Top 100</h3>
      <div className="main-suggestion">
        <Swiper spaceBetween={30} slidesPerView={5}>
          {listItem.map((item) => (
            <SwiperSlide>
              <MainItem className="top100" key={item.id} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MainContentTop100;
