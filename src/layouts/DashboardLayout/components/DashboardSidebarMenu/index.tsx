import { Menu, MenuProps } from 'antd/lib';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { dashboardMenuItems } from '@/constants/menu-configs';

const DashboardSidebarMenu: React.FC = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const onClick: MenuProps['onClick'] = (event) => {
    navigate(event.key);
  };
  return (
    <Menu
      items={dashboardMenuItems}
      className="custom-sidebar-menu"
      onClick={onClick}
      selectedKeys={['/' + pathname.split('/').find((parentRoute) => parentRoute)]}
    />
  );
};

export default DashboardSidebarMenu;
