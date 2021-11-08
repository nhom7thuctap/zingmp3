import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/';
import 'swiper/components/navigation/navigation.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import db from '../../Molecules/PlayerItems/ListSong';
import './mainFooter.scss';

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
