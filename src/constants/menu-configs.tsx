import {
  Element3,
  PresentionChart,
  Setting2,
  Sms,
  User,
  Wallet2,
  WalletMinus,
} from 'iconsax-react';

export const dashboardMenuItems = [
  {
    key: '/dashboard',
    label: 'Dashboard',
    icon: <Element3 />,
  },
  {
    key: '/transactions',
    label: 'Transactions',
    icon: <Wallet2 />,
  },
  {
    key: '/wallet',
    label: 'Wallet',
    icon: <WalletMinus />,
  },
  {
    key: '/analytics',
    label: 'Analytics',
    icon: <PresentionChart />,
  },
  {
    key: '/user',
    label: 'Personal',
    icon: <User />,
  },
  {
    key: '/message',
    label: 'Message',
    icon: <Sms />,
  },
  {
    key: '/setting',
    label: 'Setting',
    icon: <Setting2 />,
  },
];
