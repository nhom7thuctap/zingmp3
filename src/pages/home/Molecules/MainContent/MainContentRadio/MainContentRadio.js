import './mainContentRadio.scss';
import MainRadioItem from '../../../Atoms/MainRadioItem/MainRadioItem';
import React, { useState, useEffect } from 'react';
import db from '../../PlayerItems/ListSong';
import { onSnapshot, collection } from 'firebase/firestore';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation, Autoplay]);

function MainContentRadio({ className }) {
  const [listRadio, setListRadio] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListRadio'), (snapshot) =>
        setListRadio(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );
  return (
    <div className={`main-radio ${className}`}>
      <h2>Radio Nổi bật</h2>
      <div className="main-radio-wrapper">
        <Swiper spaceBetween={20} slidesPerView={7} navigation>
          {listRadio.map((item) => (
            <SwiperSlide key={item.id}>
              <MainRadioItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MainContentRadio;
