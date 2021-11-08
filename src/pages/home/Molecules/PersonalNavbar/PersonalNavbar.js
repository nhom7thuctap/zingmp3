import React from 'react';
import ButtonNavbar from '../../Atoms/ButtonNavbar/ButtonNavbar';
import './personalNavbar.scss';

export default function PersonalNavbar() {
  return (
    <div className="navbar-wrapper">
      <ButtonNavbar text="tổng quan" link="/personal" />
      <ButtonNavbar text="bài hát" link="/personal/library/song" />

      <ButtonNavbar text="playlist" link="/personal/library/playlist" />

      <ButtonNavbar text="nghệ sĩ" link="/personal/library/artist" />

      <ButtonNavbar text="album" link="/personal/library/album" />

      <ButtonNavbar text="mv" link="/personal/library/video" />

      <ButtonNavbar text="tải lên" link="/personal/upload" />
    </div>
  );
}
