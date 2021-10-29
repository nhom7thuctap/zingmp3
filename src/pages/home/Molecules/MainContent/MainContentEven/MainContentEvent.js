import './mainContentEvent.scss';
import React, { useState, useEffect } from 'react';
import db from '../../PlayerItems/ListSong';
import { onSnapshot, collection } from 'firebase/firestore';
import MainContentEventItem from '../../../Atoms/MainContentEventItem/MainContentEventItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/';
SwiperCore.use([Navigation, Autoplay]);

function MainContentEvent() {
  const [listEvent, setListEvent] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListEven'), (snapshot) =>
        setListEvent(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );
  return (
    <div className="main-event-wrapper">
      <h3>Sự Kiện</h3>
      <div className="main-event">
        <Swiper spaceBetween={30} slidesPerView={3}>
          {listEvent.map((item) => (
            <SwiperSlide key={item.id}>
              <MainContentEventItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MainContentEvent;
