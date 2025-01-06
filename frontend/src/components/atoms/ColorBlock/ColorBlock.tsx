import React, { createContext, ReactNode, } from 'react';
import classNames from 'classnames';
import styles from './ColorBlock.module.css';

type BlockColor = 'light' | 'dark';

const BlockColorContext = createContext<BlockColor>('light');

interface BlockColorProviderProps {
  children: ReactNode;
  blockColor: BlockColor;
}

export const BlockColorProvider: React.FC<BlockColorProviderProps> = ({ children, blockColor }) => {
  return (
    <BlockColorContext.Provider
      value={blockColor}
    >
      <div
        className={classNames({ [styles["dark-block"]]: blockColor === 'dark' })}
      >
        {children}
      </div>
    </BlockColorContext.Provider>
  );
};
