import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { path } from '@/constants/path';
import DashboardLayout from '@/layouts/DashboardLayout';
import NotFound from '@/pages/not-found';

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
        element: <></>,
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
