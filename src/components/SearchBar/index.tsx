import { Input, InputProps } from 'antd/lib';
import classNames from 'classnames';
import { SearchNormal1 } from 'iconsax-react';
import React from 'react';

export const SearchBar: React.FC<InputProps> = ({ onPressEnter, suffix, ...restProps }) => {
  const className = classNames('custom-searchbar', restProps.className);
  return (
    <Input
      onPressEnter={onPressEnter}
      suffix={suffix ?? <SearchNormal1 />}
      {...restProps}
      className={className}
    ></Input>
  );
};
