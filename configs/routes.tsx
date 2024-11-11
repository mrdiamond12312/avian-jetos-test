import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { path } from '@/constants/path';

import Dashboard from '@/layouts/DashboardLayout';

const NotFound = lazy(() => import('@/pages/not-found'));

export const router = createBrowserRouter([
  {
    path: path.HOMEPAGE,
    element: <Dashboard />,
    children: [
      // {
      //   path: path.HOMEPAGE,
      //   element: <Navigate replace to={(path)} />,
      // },
      // {
      //   path: (path),
      //   lazy: () => lazyRouteImport("pages/TermsOfUse"),
      // },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);
