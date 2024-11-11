import { Flex } from 'antd/lib';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Logo from '@/components/Logo';
import { SearchBar } from '@/components/SearchBar';
import DashboardSidebarMenu from '@/layouts/DashboardLayout/components/DashboardSidebarMenu';
import DashboardTitle from '@/layouts/DashboardLayout/components/DashboardTitle';
import NotificationButton from '@/layouts/DashboardLayout/components/NotificationButton';
import ResponsiveMenuDrawer from '@/layouts/DashboardLayout/components/ResponsiveMenuDrawer';
import Loading from '@/loading';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex flex-row min-h-[100vh]">
      <aside className="flex-col min-w-56 bg-ebony-10 w-56 p-6 gap-8 hidden md:flex">
        <Logo />
        <DashboardSidebarMenu />
      </aside>

      <Flex className="flex-col w-full h-full">
        <header className="flex flex-row justify-between items-center bg-ebony-10 w-full h-[76px] px-6 py-5">
          <Flex className="flex-col">
            <ResponsiveMenuDrawer />
            <DashboardTitle />
          </Flex>
          <Flex className="flex-row gap-4 items-center justify-center">
            <SearchBar placeholder="Search..." />
            <NotificationButton />
            <img src="/avatar.svg" />
          </Flex>
        </header>
        <section className="min-h-[calc(100vh-76px)]">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </section>
      </Flex>
    </div>
  );
};

export default DashboardLayout;
