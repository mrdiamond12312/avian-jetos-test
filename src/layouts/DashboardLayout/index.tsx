import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { path } from '@/constants/path';
import { Flex } from 'antd/lib';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex flex-row min-h-[100vh]">
      <aside className='flex flex-col bg-ebony-10 w-56'></aside>
      <Flex className='flex-col'>
        <header></header>
      </Flex>
    </div>
  );
};

export default DashboardLayout;
