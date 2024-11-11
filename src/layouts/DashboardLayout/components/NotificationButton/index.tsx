import { Button } from 'antd/lib';
import { Notification } from 'iconsax-react';
import React from 'react';

const NotificationButton: React.FC = () => {
  return (
    <Button
      aria-label="notification-trigger"
      ghost
      className="border-none p-1 hover:!text-neutral-1 relative"
    >
      <Notification size={20} color="#9E9E9E"></Notification>
      <div className="bg-success-5 rounded-full w-1 h-1 absolute top-2 left-4 border border-ebony-9"></div>
    </Button>
  );
};

export default NotificationButton;
