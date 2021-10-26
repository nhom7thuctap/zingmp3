import './sidebarItem.scss';
import { NavLink } from 'react-router-dom';

function SidebarItem({ item }) {
  // const newWindow = () => {
  //   const myWindow = window.open('', 'myWindow', 'width=800,height=600');
  //   myWindow.document.write(<SignupPage />);
  // };
  return (
    /* {item.isFirstItem ? (
        <button className="sidebar-item " onClick={newWindow}>
          <i className={item.icon}></i>
          <p>{item.menuName}</p>
        </button>
      ) :  */
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
