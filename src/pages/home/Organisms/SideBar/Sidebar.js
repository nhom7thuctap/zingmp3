import './sidebar.scss';
import SidebarLogo from '../../Molecules/SidebarLogo/SidebarLogo';
import SidebarList from './SidebarList';
import SidebarLogin from '../../Molecules/SidebarLogin/SidebarLogin';
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarLogo />
      <SidebarList />
      <SidebarLogin />
    </div>
  );
}

export default Sidebar;
