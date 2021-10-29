import React from 'react';
import { useSelector } from 'react-redux';

export const MainListUser = (props) => {
  const users = useSelector((state) => state.users);
  console.log('list of users: ', users);
  return <div></div>;
};
