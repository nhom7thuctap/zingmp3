import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addUser } from '../Slice';
import SignupForm from './components/SignupForm';
import './signupPage.scss';

function SignupPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log('form submit: ', values);

      setTimeout(() => {
        const action = addUser(values);
        console.log({ action });
        dispatch(action);
        history.push('/user');
        resolve(true);
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
        <SignupForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default SignupPage;
