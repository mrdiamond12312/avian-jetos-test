import { Flex, Typography } from 'antd/lib';
import React from 'react';

const UnderDevelopment: React.FC = () => {
  return (
    <Flex className="p-16 flex-col items-center justify-center gap-4 m-auto">
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg"
        className="w-fit"
      />
      <Typography className="text-body-1-semibold text-ebony-8">Under Development</Typography>
    </Flex>
  );
};

export default UnderDevelopment;
