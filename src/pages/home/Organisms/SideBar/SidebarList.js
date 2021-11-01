import React from 'react';
import SidebarItems from '../../Molecules/SidebarItems/SidebarItems';
const listItem = [
  {
    icon: 'fas fa-music',
    menuName: 'Cá nhân',
    isActive: false,
    link: '/users/add',
    isFirstItem: true,
  },
  {
    icon: 'far fa-dot-circle',
    menuName: 'Khám phá',
    isActive: true,
    link: '/explore',
  },
  {
    icon: 'fas fa-chart-line',
    menuName: '#zingchart',
    isActive: false,
    link: '/zingchart',
  },
  {
    icon: 'fas fa-podcast',
    menuName: 'Radio',
    isActive: false,
    isLive: true,
    link: '/radio',
  },
  {
    icon: 'fas fa-newspaper',
    menuName: 'Theo dõi',
    isActive: false,
    link: '/follow',
  },

  {
    icon: 'fas fa-compact-disc',
    menuName: 'Nhạc mới',
    isActive: false,
    link: '/newmusic',
  },
  {
    icon: 'fas fa-shapes',
    menuName: 'Thể loại',
    isActive: false,
    link: '/type',
  },
  {
    icon: 'fas fa-star',
    menuName: 'Top 100',
    isActive: false,
    link: '/top',
  },
  {
    icon: 'fas fa-play-circle',
    menuName: 'MV',
    isActive: false,
    link: '/mv',
  },
  {
    icon: 'fas fa-user',
    menuName: 'List User',
    isActive: false,
    link: '/users',
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
