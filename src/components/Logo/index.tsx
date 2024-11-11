import { Flex } from 'antd/lib';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <Flex className="flex-row gap-1 items-center justify-center">
      <img src="/logo-icon.svg" height={36} />
      <img src="/logo-text.svg" height={16} />
    </Flex>
  );
};

export default Logo;
