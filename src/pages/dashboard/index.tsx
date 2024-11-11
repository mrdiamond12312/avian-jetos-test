import { Col, Row } from 'antd/lib';
import { Card, DollarCircle, Wallet1, Wallet3 } from 'iconsax-react';
import React from 'react';

import Statistic, { IStatisticProps } from '@/components/Statistic';

const Dashboard: React.FC = () => {
  const informations: IStatisticProps[] = [
    {
      title: 'Balance',
      value: '$ 41,210',
      icon: <Wallet3 variant="Bold" />,
    },
    {
      title: 'Income',
      value: '$ 41,210',
      icon: <Wallet1 variant="Bold" />,
    },
    {
      title: 'Expenses',
      value: '$ 41,210',
      icon: <Card variant="Bold" />,
    },
    {
      title: 'Savings',
      value: '$ 41,210',
      icon: <DollarCircle variant="Bold" />,
    },
  ];
  return (
    <div className="w-full p-6">
      <Row gutter={[24, 24]}>
        {informations.map((info) => (
          <Col span={24} md={12} xl={6} key={info.title}>
            <Statistic {...info} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
