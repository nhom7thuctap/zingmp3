import './sidebarItem.scss';

function SidebarItem({ icon, menuName, isActive = true, isLive = false }) {
  return (
    <div
      // className={`sidebar-item ${isActive ? 'sidebar-item_active' : ''}`}
      className={`sidebar-item ${isActive ? 'siderbar-item_active' : ''}`}
    >
      <i className={icon}></i>
      <p>{menuName}</p>
      {isLive ? <span>Live</span> : ''}
    </div>
  );
}

export default SidebarItem;
