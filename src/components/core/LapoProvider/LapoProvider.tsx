import { createTheme } from '@lapo';
import React, { FC, PropsWithChildren, useEffect } from 'react';

type LapoProviderProps = {
  theme: ReturnType<typeof createTheme>;
} & PropsWithChildren;

const LapoProvider: FC<LapoProviderProps> = ({ theme, children }) => {
  useEffect(() => {
    document.documentElement.classList.add(theme);
    document.body.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
};

export { LapoProvider };
