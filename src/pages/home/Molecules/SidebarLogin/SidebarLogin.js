import './sidebarLogin.scss';
import Button from '../../Atoms/Button/Button';

function SidebarLogin() {
  return (
    <div className="sidebar-login">
      <p>Đăng nhập để khám phá những playlist dành riêng cho chính bạn.</p>
      <Button text="Đăng nhập" />
    </div>
  );
}

export default SidebarLogin;
