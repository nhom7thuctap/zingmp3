import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/';
import 'swiper/components/navigation/navigation.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import db from '../../PlayerItems/ListSong';
import './mainContentSlider.scss';

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
