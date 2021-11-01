import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { addUser, updateUser } from '../Slice';
import { useSelector } from 'react-redux';

import SignupForm from './components/SignupForm';
import { randomNumber } from '../../utils/common';
import './signupPage.scss';

function SignupPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useParams();
  const isAddMode = !userId;
  // console.log(userId);

  const editedUser = useSelector((state) => {
    const foundUser = state.users.find((x) => x.id === +userId);
    return foundUser;
  });

  const initialValues = isAddMode
    ? {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        categoryId: null,
      }
    : editedUser;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      // console.log('form submit: ', values);

      setTimeout(() => {
        if (isAddMode) {
          const newUser = {
            ...values,
            id: randomNumber(10000, 99999),
          };
          const action = addUser(newUser);
          console.log({ action });
          dispatch(action);
        } else {
          const action = updateUser(values);
          dispatch(action);
        }
        resolve(true);
        history.push('/user');
      }, 2000);
    });
  };

  return (
    <div className="singup-wrapper">
      {/* <h1 className="title">
        đăng ký ngay để trải nghiệm những bản nhạc mới nhất
      </h1> */}
      {/* <a href="/">
        <img src="/images/logo-dark.svg" alt="" />
      </a> */}
      {/* <Input type="radio"></Input> */}
      <div className="">
        <SignupForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default SignupPage;
