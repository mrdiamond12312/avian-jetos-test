import { Flex, Typography } from 'antd/lib';
import React from 'react';
import { Helmet } from 'react-helmet';

const UnderDevelopment: React.FC = () => {
  return (
    <Flex className="p-16 flex-col items-center justify-center gap-4 m-auto">
      <Helmet>
        <title>To be updated | Avian JETOS Assessment</title>
      </Helmet>
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg"
        className="w-fit"
      />
      <Typography className="text-body-1-semibold text-ebony-8">Under Development</Typography>
    </Flex>
  );
};

export default UnderDevelopment;
