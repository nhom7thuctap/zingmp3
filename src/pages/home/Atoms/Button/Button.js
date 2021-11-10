import './button.scss';
import { NavLink } from 'react-router-dom';

function Button({ text, className, LoginBtn }) {
  return LoginBtn ? (
    <NavLink to="/login" className={`button ${className}`}>
      {text}
    </NavLink>
  ) : (
    <button className={`button ${className}`}>{text}</button>
  );
}

export default Button;
