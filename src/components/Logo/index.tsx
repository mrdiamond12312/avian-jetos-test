import { Flex } from 'antd/lib';
import React from 'react';

export interface ILogoConfigs {
  collapse?: boolean;
}

const Logo: React.FC<ILogoConfigs> = ({ collapse = false }) => {
  return (
    <Flex className="flex-row gap-1 items-center justify-center w-fit">
      <img src="/logo-icon.svg" height={36} />
      {!collapse && <img src="/logo-text.svg" height={16} />}
    </Flex>
  );
};

export default Logo;
