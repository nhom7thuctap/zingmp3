import SidebarCard from '../../Molecules/SidebarCard/SidebarCard';
import SidebarLogo from '../../Molecules/SidebarLogo/SidebarLogo';
import './sidebar.scss';
import SidebarList from './SidebarList';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarLogo />
      <SidebarList />
      <SidebarCard
        textCard="Đăng nhập để khám phá playlist dành riêng cho chính bạn."
        textBtn="đăng nhập"
      />
      <SidebarCard
        textCard="Nghe nhạc không quảng cáo cùng kho nhạc VIP."
        classNameCard="buy-vip-card"
        textBtn="mua vip"
        classNameBtn="buy-vip-btn"
      />
      <div className="sidebar-create-playlist">
        <span className="icon">+</span>
        <p className="title">Tạo playlist mới</p>
      </div>
    </div>
  );
}

export default Sidebar;
