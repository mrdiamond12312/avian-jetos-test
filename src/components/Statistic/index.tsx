import { Flex } from 'antd/lib';
import React from 'react';

export interface IStatisticProps {
  title: string;
  icon?: React.ReactNode;
  value: string | number;
}

const Statistic: React.FC<IStatisticProps> = ({ title, value, icon }) => {
  return (
    <Flex className="bg-ebony-10 rounded-lg flex-row p-4 justify-start items-center gap-6">
      <Flex className="bg-ebony-9 w-10 h-10 p-2.5 rounded-lg items-center justify-center">
        {icon}
      </Flex>
      <Flex className="flex-col">
        <span className="text-ebony-8 text-body-3-regular">{title}</span>
        <p className="text-neutral-1 text-body-1-medium">{value}</p>
      </Flex>
    </Flex>
  );
};

export default Statistic;
