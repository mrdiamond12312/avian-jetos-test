import { Flex } from 'antd/lib';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <Flex className="flex-row gap-1 items-center justify-center">
      <img src="/logo-icon.png" height={36} />
      <img src="/logo-text.png" height={16} />
    </Flex>
  );
};

export default Logo;
