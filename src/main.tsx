import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd/lib';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/../configs/routes';
import store from '@/storage/store';

import '@/global.less';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: 'Poppins',
            },
          }}
        >
          <RouterProvider router={router} />
        </ConfigProvider>
      </React.StrictMode>
    </QueryClientProvider>
  </Provider>,
);
