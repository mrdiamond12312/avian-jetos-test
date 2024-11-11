import { Flex, Menu } from 'antd/lib';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Logo from '@/components/Logo';
import { dashboardMenuItems } from '@/constants/menu-configs';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex flex-row min-h-[100vh]">
      <aside className="flex flex-col bg-ebony-10 w-56 p-6 gap-8">
        <Logo />
        <Menu items={dashboardMenuItems} className="custom-sidebar-menu" />
      </aside>
      <Flex className="flex-col">
        <header></header>
      </Flex>
    </div>
  );
};

export default DashboardLayout;
