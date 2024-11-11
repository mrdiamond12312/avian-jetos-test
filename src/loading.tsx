import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd/lib';
import React from 'react';

import Logo from '@/components/Logo';

const Loading: React.FC = () => {
  return (
    <Flex className="w-fit fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100 flex-col gap-2">
      <Logo collapse />
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 100, color: '#c9c9c9' }} spin />}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </Flex>
  );
};

export default Loading;
