import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/';
import 'swiper/components/navigation/navigation.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import MainContentZingChoiceItem from '../../../Atoms/MainContentZingChoiceItem/MainContentZingChoiceItem';
import db from '../../PlayerItems/ListSong';
import './mainContentZingChoice.scss';
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
