import './sidebarCard.scss';
import Button from '../../Atoms/Button/Button';

function SidebarLogin({
  textCard,
  textBtn,
  classNameCard,
  classNameBtn,
  LoginBtn,
}) {
  return (
    <div className={`sidebar-login ${classNameCard}`}>
      <p>{textCard}</p>
      <Button LoginBtn={LoginBtn} text={textBtn} className={classNameBtn} />
    </div>
  );
}

export default SidebarLogin;
