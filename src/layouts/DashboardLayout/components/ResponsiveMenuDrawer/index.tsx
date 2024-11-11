import { Button, Drawer } from 'antd/lib';
import { Menu } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Logo from '@/components/Logo';
import DashboardSidebarMenu from '@/layouts/DashboardLayout/components/DashboardSidebarMenu';

const ResponsiveMenuDrawer: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);
  const { pathname } = useLocation();

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <div className="flex md:hidden">
      <Button ghost className="border-none p-1" onClick={openMenu}>
        <Menu size={20} />
      </Button>
      <Drawer
        open={open}
        onClose={closeMenu}
        title={<Logo />}
        width={'fit-content'}
        className="custom-drawer"
      >
        <DashboardSidebarMenu />
      </Drawer>
    </div>
  );
};

export default ResponsiveMenuDrawer;
