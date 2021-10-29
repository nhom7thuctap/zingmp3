import './mainContentZingChoice.scss';
import MainContentZingChoiceItem from '../../../Atoms/MainContentZingChoiceItem/MainContentZingChoiceItem';
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

function MainContentZingChoice() {
  const [listItem, setListItem] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'ListZingChoice'), (snapshot) =>
        setListItem(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="main-zing-choice-wrapper">
      <h3>nghệ sĩ zing choice</h3>
      <div className="main-zing-choice">
        <Swiper spaceBetween={30} slidesPerView={3}>
          {listItem.map((item) => (
            <SwiperSlide key={item.id}>
              <MainContentZingChoiceItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MainContentZingChoice;
