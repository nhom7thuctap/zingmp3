import './sidebarItems.scss';
import SidebarItem from '../../Atoms/SidebarItem/SidebarItem';

function createListItem(list) {
  const listItem = list.map((index, key) => {
    return (
      <SidebarItem
        key={key}
        icon={index.icon}
        menuName={index.menuName}
        isActice={index.isActice}
        isLive={index.isLive}
      />
    );
  });
  return listItem;
}
function SidebarItems(props) {
  const listItem = createListItem(props.listItem);
  return <div className="list-item">{listItem}</div>;
}

export default SidebarItems;
