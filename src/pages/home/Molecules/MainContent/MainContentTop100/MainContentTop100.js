import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import MainItem from '../../../Atoms/MainItem/MainItem';
import db from '../../PlayerItems/ListSong';
import './mainContentTop100.scss';

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
            <SwiperSlide key={item.id}>
              <MainItem className="top100" item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MainContentTop100;
