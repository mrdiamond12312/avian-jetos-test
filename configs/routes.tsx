import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { path } from '@/constants/path';
import DashboardLayout from '@/layouts/DashboardLayout';
import NotFound from '@/pages/not-found';

const UnderDevelopement = lazy(() => import('@/pages/under-developement'));
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
        element: <UnderDevelopement />,
      },
      {
        path: path.MESSAGE,
        element: <UnderDevelopement />,
      },
      {
        path: path.PERSONAL,
        element: <UnderDevelopement />,
      },
      {
        path: path.SETTING,
        element: <UnderDevelopement />,
      },
      {
        path: path.WALLET,
        element: <UnderDevelopement />,
      },
      {
        path: path.TRANSACTIONS,
        element: <UnderDevelopement />,
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
