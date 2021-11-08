import React from 'react';
import './personalProfile.scss';

export default function PersonalProfile(props) {
  const { avatar, name } = props;
  return (
    <div className="personal-wrapper">
      <img className="avatar" src={avatar} alt="" />
      <h1 className="name">{name}</h1>
    </div>
  );
}
