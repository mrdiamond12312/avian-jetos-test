import { Flex, Typography } from 'antd/lib';
import React from 'react';

const UnderDevelopement: React.FC = () => {
  return (
    <Flex className="p-16 flex-col items-center justify-center gap-4 m-auto">
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg"
        className="w-fit"
      />
      <Typography className="text-body-1-semibold text-ebony-8">Under Developement</Typography>
    </Flex>
  );
};

export default UnderDevelopement;
