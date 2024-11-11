import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { path } from '@/constants/path';
import DashboardLayout from '@/layouts/DashboardLayout';
import NotFound from '@/pages/not-found';

const UnderDevelopment = lazy(() => import('@/pages/under-development'));
const Dashboard = lazy(() => import('@/pages/dashboard'));

export const router = createBrowserRouter([
  {
    path: path.HOMEPAGE,
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        path: '',
        element: <Navigate to={path.DASHBOARD} replace />,
      },
      {
        path: path.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: path.ANALYTICS,
        element: <UnderDevelopment />,
      },
      {
        path: path.MESSAGE,
        element: <UnderDevelopment />,
      },
      {
        path: path.PERSONAL,
        element: <UnderDevelopment />,
      },
      {
        path: path.SETTING,
        element: <UnderDevelopment />,
      },
      {
        path: path.WALLET,
        element: <UnderDevelopment />,
      },
      {
        path: path.TRANSACTIONS,
        element: <UnderDevelopment />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);
