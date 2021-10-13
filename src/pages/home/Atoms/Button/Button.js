import './button.scss';

function Button({ text, className }) {
  return <button className={`button ${className}`}>{text}</button>;
}

export default Button;
