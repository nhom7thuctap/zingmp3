import './mainFooter.scss';
import React, { useState, useEffect } from 'react';
import db from '../../Molecules/PlayerItems/ListSong';
import { onSnapshot, collection } from 'firebase/firestore';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/';
SwiperCore.use([Navigation, Autoplay]);
function MainFooter() {
  const [listImg, setListImg] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListFooter'), (snapshot) =>
        setListImg(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="main-footer">
      <h2 className="title">đối tác âm nhạc</h2>
      <div className="list-footer">
        <Swiper spaceBetween={20} slidesPerView={8}>
          {listImg.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="img-item">
                <img src={item.item} alt=""></img>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MainFooter;
