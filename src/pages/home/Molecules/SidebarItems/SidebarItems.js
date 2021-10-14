import './sidebarItems.scss';
import SidebarItem from '../../Atoms/SidebarItem/SidebarItem';

function createListItem(list) {
  const listItem = list.map((item, key) => {
    return <SidebarItem key={key} item={item} />;
  });
  return listItem;
}
function SidebarItems(props) {
  const listItem = createListItem(props.listItem);
  return <div className="list-item">{listItem}</div>;
}

export default SidebarItems;
