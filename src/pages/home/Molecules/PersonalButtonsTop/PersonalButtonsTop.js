import React from 'react';
import Button from '../../Atoms/Button/Button';
import './personalButtonsTop.scss';

export const PersonalButtonsTop = () => {
  return (
    <div className="button-top-wrapper">
      <Button className="button-personal buy-vip-btn" text="nâng cấp vip" />
      <Button className="button-personal " text="nhập code vip" />
      <button className="button-more">
        <i className="fas fa-ellipsis-h"></i>
      </button>
    </div>
  );
};
