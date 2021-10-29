import './mainContentRelease.scss';
import MainContentReleaseItem from '../../../Atoms/MainContentReleaseItem/MainContentReleaseItem';
import MainItem from '../../../Atoms/MainItem/MainItem';
import React, { useState, useEffect } from 'react';
import db from '../../PlayerItems/ListSong';
import { onSnapshot, collection } from 'firebase/firestore';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/';
SwiperCore.use([Navigation, Autoplay]);

function MainContentRelease() {
  const [listRelease, setListRelease] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListRelease'), (snapshot) =>
        setListRelease(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );
  const [listItem, setListItem] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListSuggestion'), (snapshot) =>
        setListItem(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="main-release-wrapper">
      <h3>Mới Phát Hành</h3>
      <div className="main-release">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {listRelease.map((item) => (
            <SwiperSlide key={item.id}>
              <MainContentReleaseItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="list-item">
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
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

export default MainContentRelease;
