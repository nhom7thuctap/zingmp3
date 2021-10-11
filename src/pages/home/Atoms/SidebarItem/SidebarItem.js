import './sidebarItem.scss';

function SidebarItem({ icon, menuName, isActive = false, isLive = false }) {
  return (
    <div className={`sidebar-item ${isActive ? 'sidebar-item_active' : ''}`}>
      <i className={icon}></i>
      <p>{menuName}</p>
      {isLive ? <span>Live</span> : ''}
    </div>
  );
}

export default SidebarItem;
