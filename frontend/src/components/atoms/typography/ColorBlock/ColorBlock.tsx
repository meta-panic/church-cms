import React, { ReactNode } from 'react';
import cx from 'classnames';
import styles from './ColorBlock.module.css';

type BlockColor = 'light' | 'dark';


interface BlockColorProviderProps {
  children: ReactNode;
  blockColor: BlockColor;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let blockColorContext = 'light';

export const BlockColorProvider: React.FC<BlockColorProviderProps> = ({ children, blockColor }) => {
  blockColorContext = blockColor;
  return (
    <div
      className={cx({ [styles["dark-block"]]: blockColor === 'dark' })}
    >
      {children}
    </div>
  );
};
