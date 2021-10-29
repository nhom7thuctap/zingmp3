import './mainContentSlider.scss';
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
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {listImg.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="img-item">
              <img src={item.item} alt=""></img>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainContentSlider;
