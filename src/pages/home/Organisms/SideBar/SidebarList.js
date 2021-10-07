import React from 'react';
import SidebarItems from '../../Molecules/SidebarItems/SidebarItems';
const listItem = [
  {
    icon: 'fas fa-music',
    menuName: 'Cá nhân',
    isActive: false,
  },
  {
    icon: 'far fa-dot-circle',
    menuName: 'Khám phá',
    isActive: true,
  },
  {
    icon: 'fas fa-chart-line',
    menuName: '#zingchart',
    isActive: false,
  },
  {
    icon: 'fas fa-podcast',
    menuName: 'Radio',
    isActive: false,
    isLive: true,
  },
  {
    icon: 'fas fa-newspaper',
    menuName: 'Theo dõi',
    isActive: false,
  },

  {
    icon: 'fas fa-compact-disc',
    menuName: 'Nhạc mới',
    isActive: false,
  },
  {
    icon: 'fas fa-shapes',
    menuName: 'Thể loại',
    isActive: false,
  },
  {
    icon: 'fas fa-star',
    menuName: 'Top 100',
    isActive: false,
  },
  {
    icon: 'fas fa-play-circle',
    menuName: 'MV',
    isActive: false,
  },
];

function SidebarList() {
  return (
    <>
      <SidebarItems listItem={listItem} />
    </>
  );
}

export default SidebarList;
