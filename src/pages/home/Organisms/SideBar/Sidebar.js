import SidebarLogin from '../../Molecules/SidebarLogin/SidebarLogin';
import SidebarLogo from '../../Molecules/SidebarLogo/SidebarLogo';
import './sidebar.scss';
import SidebarList from './SidebarList';

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
