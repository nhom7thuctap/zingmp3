import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import MainItem from '../../../Atoms/MainItem/MainItem';
import db from '../../PlayerItems/ListSong';
import './mainContentSuggestion.scss';

SwiperCore.use([Navigation, Autoplay]);

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

export default MainContentSuggestion;
