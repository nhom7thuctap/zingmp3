import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { removeUser } from '../../../../../forms/Slice';
import ListUser from '../../../Molecules/ListUser/ListUser';

export const MainListUser = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const history = useHistory();
  console.log('list of users: ', users);

  const handleUserRemoveClick = (user) => {
    console.log('remove: ', user);
    const removeUserId = user.id;
    const action = removeUser(removeUserId);
    dispatch(action);
  };

  return (
    <div style={{ background: '#fff', width: '60%', margin: '50px auto' }}>
      <ListUser userList={users} onUserRemoveClick={handleUserRemoveClick} />
    </div>
  );
};
