import './sidebarItem.scss';
import { NavLink } from 'react-router-dom';

function SidebarItem({ item }) {
  return (
    <NavLink
      to={item.link}
      exact={true}
      activeClassName="sidebar-item_active"
      className="sidebar-item "
    >
      <i className={item.icon}></i>
      <p>{item.menuName}</p>
      {item.isLive ? <span>Live</span> : ''}
    </NavLink>
  );
}

export default SidebarItem;
