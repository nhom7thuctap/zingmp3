import './mainContentFollow.scss';
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

function MainContentFollow() {
  const [listFollow, setlistFollow] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListFollow'), (snapshot) =>
        setlistFollow(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );
  return (
    <div className="list-follow">
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {listFollow.map((item) => (
          <SwiperSlide>
            <div className="img-item" key={item.id}>
              <img src={item.item} alt=""></img>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainContentFollow;
