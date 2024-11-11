import React from 'react';
import { useLocation } from 'react-router-dom';

import { dashboardMenuItems } from '@/constants/menu-configs';

const DashboardTitle: React.FC = () => {
  const { pathname } = useLocation();

  const headerTitle = dashboardMenuItems.find((menuItem) =>
    pathname.includes(menuItem?.key as string),
  );

  return <h1 className="text-body-2-semibold hidden md:flex">{headerTitle?.label ?? ''}</h1>;
};

export default DashboardTitle;
