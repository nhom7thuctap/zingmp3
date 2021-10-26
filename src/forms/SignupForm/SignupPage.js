import React from 'react';
import { Input } from 'reactstrap';
import SignupForm from './components/SignupForm';
import './signupPage.scss';

function SignupPage() {
  return (
    <div className="singup-wrapper">
      {/* <h1 className="title">
        đăng ký ngay để trải nghiệm những bản nhạc mới nhất
      </h1> */}
      {/* <a href="/">
        <img src="/images/logo-dark.svg" alt="" />
      </a> */}
      {/* <Input type="radio"></Input> */}
      <div className="form">
        <SignupForm onSubmit={(value) => console.log('form submit: ', value)} />
      </div>
    </div>
  );
}

export default SignupPage;
